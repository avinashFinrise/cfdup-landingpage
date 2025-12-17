"use client"

import { motion } from 'framer-motion';
import {
  BarChart2,
  Clock,
  Code,
  Headphones,
  Monitor,
  RefreshCw,
  Shield,
  Target
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Instant withdrawals",
      description: "T&Cs apply",
      details: "Fast and reliable withdrawals - processed quickly with transparent T&Cs."
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-primary" />,
      title: "Swap-free trading",
      description: "Hold overnight positions for free",
      details: "Hold overnight positions for free on most popular assets. T&Cs apply."
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-primary" />,
      title: "Tight spreads",
      description: "Spreads that stay tight and stable",
      details: "Trade with spreads that remain tight and stable, even during market-moving news."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Unmatched speed, less slippage",
      description: "Most precise execution in the market",
      details: "Trade with the most precise execution² in the market to reduce slippage and missed fills."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Best-in-class security",
      description: "Funds held in segregated accounts",
      details: "Trade knowing your funds are kept safe in separate client accounts."
    },
    {
      icon: <Headphones className="h-8 w-8 text-primary" />,
      title: "24/7 live support",
      description: "Get answers in minutes",
      details: "Get answers in minutes via phone, live chat or email, in 14 languages."
    },
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "Trading platform",
      description: "Web, Mobile & Desktop with MT5",
      details: "Trade confidently with Web, Mobile and Desktop platforms using MT5."
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Algo trading",
      description: "MT5 customization",
      details: "Endless algo trading customization with MT5 - automate and scale your strategies."
    }
  ];


  return (
    <section className="py-20">
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
            Why Choose <span className="text-primary">Omix Capital?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trade in{" "}
            <span className="font-semibold text-primary">Gold</span>,{" "}
            <span className="font-semibold text-primary">Crypto</span>,{" "}
            <span className="font-semibold text-primary">Oil</span>,{" "}
            <span className="font-semibold text-primary">Forex</span>{" "}
            <span className="text-muted-foreground">and</span>{" "}
            <span className="font-semibold text-primary">Indices</span> with industry-leading features.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <motion.div 
                      className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      {feature.icon}
                    </motion.div>
                  </div>
                  <CardTitle className="font-poppins font-semibold text-xl text-foreground mb-2">
                    {feature.title}
                  </CardTitle>
                  <p className="text-primary font-medium">
                    {feature.description}
                  </p>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-muted-foreground">
                    {feature.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '100K+', label: 'Active Traders' },
            { number: '50M+', label: 'Trades Executed' },
            { number: '0.0', label: 'Min Spreads (pips)' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-poppins font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;