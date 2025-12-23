"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { AlertTriangle, FileText, Shield, Users } from 'lucide-react';

const Legal = () => {
  const legalItems = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: 'Terms & Conditions',
      description: 'Complete terms of service and platform usage guidelines',
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: 'Privacy Policy',
      description: 'How we protect and handle your personal information'
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
      title: 'Risk Disclosure',
      description: 'Important information about trading risks and capital protection'
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'AML / KYC',
      description: 'Anti-money laundering and know your customer policies',
      links: [{ text: "aml", href: "/docs/AML Omix.pdf" }, { text: "kyc", href: "/docs/KYC POLICY.pdf" }, { text: "Crypto MT5 KYC Guidelines", href: "/docs/crypto mt5 AML.pdf" }]
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
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
            Legal & <span className="text-primary">Compliance</span>
          </h2>
        </motion.div>

        {/* Legal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {legalItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {item.icon}
                    </div>
                  </div>
                  <CardTitle className="font-poppins font-semibold text-lg text-foreground">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>

                  {item.links && (
                    <div className="flex justify-center gap-2 flex-wrap">
                      {item.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
            inline-flex items-center gap-1.5
            px-3 py-1.5
            text-xs font-medium
            rounded-full
            border border-border
            bg-background/60
            text-primary
            hover:bg-primary/10
            hover:border-primary/30
            transition-all
          "
                        >
                          <FileText className="h-3.5 w-3.5" />
                          {link.text.toUpperCase()}
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Legal Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-card/30 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The information provided on this website is for general informational purposes only and does not
                  constitute investment advice, financial advice, trading advice, or a recommendation to engage in
                  any investment strategy or transaction.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Omix Capital does not guarantee the accuracy, completeness, or timeliness of the information
                  presented and shall not be held liable for any losses or damages arising directly or indirectly
                  from the use of this website or reliance on its content.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Users are solely responsible for their investment decisions and should seek independent
                  professional advice before participating in any financial activity. Access to services may be
                  restricted in certain jurisdictions in accordance with applicable laws and regulations.
                </p>


                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <p className="text-destructive font-medium text-sm">
                    CFDs are complex instruments and come with a high risk of losing money rapidly due
                    to leverage Learn more
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Legal;