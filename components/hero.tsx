"use client"

import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const features = [
    'Ultra-Low Spreads Starting from 0.0 pips',
    'High Leverage Up to 1:500',
    'Fast Execution Millisecond order processing',
    'Trusted Platforms MT5 + Proprietary',
    'Instant Deposits & Withdrawals',
    'Fast Execution Millisecond order processing'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/50 to-secondary/30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-7xl text-foreground mb-4 text-balance leading-tight">
              Trade{' '}
              <span className="text-primary">Smarter.</span>
              <br />
              Trade{' '}
              <span className="text-primary">Faster.</span>
              <br />
              Trade with{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                CFDUP
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Your trusted partner in global CFD trading. Access Forex, Indices, Commodities,
            and Stocks on MT5 and our proprietary WebTrader with ultra-tight spreads and up to 1:500 leverage.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button 
              size="lg" 
              className="font-poppins font-medium uppercase text-sm px-8 py-6 shadow-2xl hover:shadow-primary/25 transition-all duration-300 animate-pulse-glow"
            >
              Open Live Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="font-poppins font-medium px-8 py-6 hover:bg-secondary/80 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Try Demo Account
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg" 
              className="font-poppins font-medium px-8 py-6"
            >
              Request a Callback
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-3 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:bg-card/80 transition-all duration-300"
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Start Trading CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12"
          >
            <Button 
              size="lg" 
              variant="outline"
              className="font-poppins font-semibold uppercase text-sm px-12 py-6 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              Start Trading Today
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-6 h-6 bg-primary/20 rounded-full"
        animate={{ 
          y: [0, 20, 0],
          x: [0, 10, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-3 h-3 bg-primary/40 rounded-full"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      />
    </section>
  );
};

export default Hero;