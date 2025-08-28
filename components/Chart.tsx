"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Zap } from "lucide-react";
import {
  createChart,
  ColorType,
  IChartApi,
  ISeriesApi,
  UTCTimestamp,
  AreaSeries,
} from "lightweight-charts";

export default function LiveTradingWidget() {
  const [price, setPrice] = useState<number>(0);
  const [change, setChange] = useState<number>(0);
  const [legend, setLegend] = useState<string>("BTC/USDT Live");

  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Area"> | null>(null);
  const basePriceRef = useRef<number | null>(null);

  // Helper function to convert UTC timestamp to client timezone timestamp
  const convertToClientTimezone = (utcTimestamp: number): UTCTimestamp => {
    const utcDate = new Date(utcTimestamp);
    const timezoneOffset = utcDate.getTimezoneOffset() * 60 * 1000; // offset in milliseconds
    const clientTime = utcTimestamp - timezoneOffset;
    return Math.floor(clientTime / 1000) as UTCTimestamp;
  };

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // ✅ Initialize chart
    const chart = createChart(chartContainerRef.current, {
      layout: {
        textColor: "#fff",
        background: { type: ColorType.Solid, color: "transparent" },
        attributionLogo: false
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
      rightPriceScale: {
        scaleMargins: { top: 0.3, bottom: 0.25 },
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: true,
      },
      crosshair: {
        horzLine: { visible: false, labelVisible: false },
      },
      grid: {
        vertLines: { visible: false },
        horzLines: { visible: false },
      },
    });

    chartRef.current = chart;

   const areaSeries = chart.addSeries(AreaSeries,{
      topColor: "rgba(74, 222, 128, 0.5)", // Green with 50% opacity
      bottomColor: "rgba(74, 222, 128, 0.05)", // Green with 5% opacity
      lineColor: "rgba(74, 222, 128, 1)", // Solid green line
      lineWidth: 2,
    });

    seriesRef.current = areaSeries;

    // ✅ Fetch last 50 ticks from Binance
    fetch(
      "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1s&limit=50"
    )
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((d: any) => ({
          time: convertToClientTimezone(d[0]), // Convert open time to client timezone
          value: parseFloat(d[4]), // close price
        }));

        if (seriesRef.current) {
          seriesRef.current.setData(formatted);
        }

        // base price for % change
        if (formatted.length > 0) {
          basePriceRef.current = formatted[0].value;
          setPrice(formatted[formatted.length - 1].value);
        }

        // ✅ Default zoom: last 50 points
        chart.timeScale().setVisibleLogicalRange({
          from: formatted.length - 50,
          to: formatted.length,
        });

        chart.timeScale().scrollToRealTime();
      })
      .catch((error) => {
        console.error("Error fetching initial data:", error);
      });

    // ✅ Legend updates
    chart.subscribeCrosshairMove((param) => {
      if (!param.time || !seriesRef.current) return;
      const data = param.seriesData.get(seriesRef.current);
      if (!data) return;

      const value =
        (data as { value?: number; close?: number }).value ??
        (data as { close?: number }).close;

      if (value !== undefined) {
        setLegend(`BTC/USDT Live ${value.toFixed(2)}`);
      }
    });

    // ✅ Live WebSocket
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
    ws.onmessage = (event) => {
      const trade = JSON.parse(event.data);
      const newPrice = parseFloat(trade.p);

      if (!basePriceRef.current) {
        basePriceRef.current = newPrice;
      }

      setPrice(newPrice);
      setChange(((newPrice - basePriceRef.current) / basePriceRef.current) * 100);

      if (seriesRef.current) {
        seriesRef.current.update({
          time: convertToClientTimezone(trade.T), // Convert trade time to client timezone
          value: newPrice,
        });
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = (event) => {
      console.log("WebSocket connection closed:", event);
    };

    return () => {
      ws.close();
      chart.remove();
    };
  }, []);

  return (
    <Card className="bg-secondary/20 border-none shadow-lg rounded-2xl mb-10">
      <CardContent className="p-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-4"
        >
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            BTC/USDT Live
          </h2>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              change >= 0
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {change.toFixed(2)}%
          </span>
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative w-full h-[300px]"
        >
          <div ref={chartContainerRef} className="w-full h-full" />
          <div className="absolute left-3 top-3 text-sm font-light text-white">
            {legend}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-3 gap-4 mt-6 text-center"
        >
          <div>
            <p className="text-sm text-gray-400">Last Price</p>
            <p className="text-lg font-bold text-white">
              ${price.toFixed(4)}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Change</p>
            <p
              className={`text-lg font-bold ${
                change >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {change.toFixed(2)}%
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Signal</p>
            <p className="text-lg font-bold text-primary flex items-center justify-center gap-1">
              <Zap className="w-4 h-4" /> Strong
            </p>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}