"use client"

import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Coins, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Chart from './Chart';

const Markets = () => {
  const markets = [
    { name: 'Forex', icon: <TrendingUp className="h-6 w-6" />, active: true },
    { name: 'Indices', icon: <BarChart3 className="h-6 w-6" />, active: false },
    { name: 'Commodities', icon: <Coins className="h-6 w-6" />, active: false },
    { name: 'Stocks', icon: <Building2 className="h-6 w-6" />, active: false }
  ];

  const features = [
    'Tight spreads from 0.0 pips',
    'Leverage up to 1:500', 
    'Fast & reliable execution'
  ];

  return (
    <section id="markets" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Trade Global Markets
            <br />
            <span className="text-primary">with CFDUP</span>
          </h2>
        </motion.div>

        {/* Markets Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {markets.map((market, index) => (
            <motion.div
              key={market.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={market.active ? "default" : "outline"}
                className={`font-poppins font-medium px-6 py-3 ${
                  market.active 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-primary hover:text-primary-foreground'
                } transition-all duration-300`}
              >
                {market.icon}
                <span className="ml-2">{market.name}</span>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <div className="space-y-2">
            {features.map((feature, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-foreground font-medium flex items-center justify-center"
              >
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                {feature}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Trading Chart Visualization */}

                <Chart/>


        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button 
            size="lg" 
            className="font-poppins font-medium uppercase text-sm px-12 py-6 shadow-xl hover:shadow-primary/25 transition-all duration-300"
          >
            Start Trading Today
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="font-poppins font-medium uppercase text-sm px-12 py-6"
          >
            Open Live Account
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Markets;