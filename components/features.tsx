"use client"

import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Clock, 
  Target, 
  TrendingUp, 
  Users, 
  Award, 
  Headphones 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: 'Ultra-Low Spreads',
      description: 'Starting from 0.0 pips',
      details: 'Get the tightest spreads in the market for maximum profitability.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: 'High Leverage',
      description: 'Up to 1:500',
      details: 'Maximize your trading potential with flexible leverage options.'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: 'Fast Execution',
      description: 'Millisecond order processing',
      details: 'Lightning-fast execution to never miss a trading opportunity.'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Trusted Platforms',
      description: 'MT5 + Proprietary',
      details: 'Trade on industry-leading platforms with advanced tools.'
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: 'Instant Deposits',
      description: 'With minimal fees',
      details: 'Quick and secure deposits and withdrawals 24/7.'
    },
    {
      icon: <Headphones className="h-8 w-8 text-primary" />,
      title: '24/7 Support',
      description: 'Multilingual assistance',
      details: 'Expert support team available around the clock.'
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
            Why Choose <span className="text-primary">CFDUP?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the advantages of trading with a trusted global broker
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