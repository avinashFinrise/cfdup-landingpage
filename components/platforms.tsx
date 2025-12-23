"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Monitor, Smartphone } from 'lucide-react';

const Platforms = () => {
  const platforms = [
    {
      title: 'MT5',
      subtitle: 'Desktop & Mobile',
      description: 'Launch WebTrader',
      icon: <Monitor className="h-8 w-8 text-primary" />,
      features: ['Advanced charting', 'Expert advisors', 'Multiple timeframes'],
      button: 'Download MT5',
      buttonIcon: <Download className="h-4 w-4" />,
      href: "https://download.mql5.com/cdn/web/metaquotes.ltd/mt5/mt5setup.exe?utm_source=www.metatrader5.com&utm_campaign=download"
    },
    {
      title: 'WebTrader',
      subtitle: 'No download required',
      description: 'Launch WebTrader',
      icon: <ExternalLink className="h-8 w-8 text-primary" />,
      features: ['Browser-based', 'Instant access', 'Full functionality'],
      button: 'Launch WebTrader',
      buttonIcon: <ExternalLink className="h-4 w-4" />,
      href: "https://web.metatrader.app/terminal?lang=en"
    },
    {
      title: 'Mobile Trading',
      subtitle: 'Trade on the go',
      description: 'iOS & Android apps',
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      features: ['Push notifications', 'Touch ID login', 'Full trading suite'],
      button: 'Get Mobile App',
      buttonIcon: <Download className="h-4 w-4" />,
      href: "https://download.mql5.com/cdn/mobile/mt5/android?hl=en&utm_source=www.metatrader5.com&utm_campaign=install.metaquotes"
    }
  ];

  const tradingData = [
    { label: 'Demo', value: '1,072', change: '+0.5%', positive: true },
    { label: 'Retail', value: '1,900', change: '+1.2%', positive: true },
    { label: 'Professional', value: '502.20', change: '+1.9%', positive: true },
    { label: 'Islamic', value: '1,440', change: '+0.1%', positive: true }
  ];

  return (
    <section id="platforms" className="py-20">
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
            <span className="text-primary">Trade Anytime, Anywhere</span>
          </h2>
        </motion.div>

        {/* Trading Data Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {tradingData.map((data, index) => (
            <motion.div
              key={data.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-poppins font-medium text-muted-foreground uppercase">
                    {data.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-2xl font-poppins font-bold text-foreground mb-1">
                    {data.value}
                  </div>
                  <div className={`text-sm font-medium ${data.positive ? 'text-green-500' : 'text-red-500'}`}>
                    {data.change}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {platform.icon}
                    </div>
                  </div>
                  <CardTitle className="font-poppins font-bold text-xl text-foreground mb-2">
                    {platform.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {platform.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground font-medium mb-4">
                    {platform.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-muted-foreground">
                        • {feature}
                      </div>
                    ))}
                  </div>
                  
                    <a href={platform.href} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-poppins font-medium">
                      {platform.buttonIcon}
                      <span className="ml-2">{platform.button}</span>
                  </Button>
                    </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="bg-secondary/30 border-border/50">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-2">
                Ho/Troin secacomut de/mvy
              </h3>
              <div className="text-muted-foreground space-y-1">
                <p>• WebQTel, Video tutorials, and eBooks</p>
                <p>• Coming Center with advanced resources</p>
              </div>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Platforms;