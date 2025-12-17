"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Award, Globe, Shield, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: 'Transparency',
      description: 'Clear pricing with no hidden fees'
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: 'Innovation', 
      description: 'Cutting-edge trading technology'
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: 'Integrity',
      description: 'Ethical business practices always'
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Client Success',
      description: 'Your success is our priority'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8">
            <span className="text-primary">ABOUT Omix Capital</span>
          </h2>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="font-poppins font-bold text-2xl text-foreground">
                OUR STORY
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Omix Capital was founded with one mission: to empower traders of all levels with world-class 
                technology, competitive pricing, and unmatched support. Our vision is to make CFD trading 
                transparent, fast, and accessible to everyone.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="font-poppins font-bold text-xl text-primary">
                  OUR MISSION
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To deliver a secure, seamless, and efficient trading environment.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="font-poppins font-bold text-xl text-primary">
                  OUR VISION
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the most trusted CFD broker globally.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="font-poppins font-bold text-2xl text-primary text-center mb-8">
            CORE VALUES
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center h-full bg-card/30 border-border/50 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {value.icon}
                      </div>
                    </div>
                    <h4 className="font-poppins font-semibold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;