"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Star, Zap } from "lucide-react";


const Accounts = () => {

const accounts = [
  {
    type: "STANDARD",
    title: "Standard",
    subtitle: "Low minimum deposit with no commission.",
    price: "",
    description: "Low minimum deposit with no commission.",
    features: [
      "Min deposit: 10 USD",
      "Min spread: 0.20 pips",
      "Max leverage: 1:2000",
      "Commission: No commission"
    ],
    badge: "STANDARD",
    popular: false,
    icon: <Zap className="h-8 w-8 text-primary" />
  },
  {
    type: "PRO",
    title: "Pro",
    subtitle: "Tighter spreads and no commission.",
    price: "",
    description: "Tighter spreads and no commission.",
    features: [
      "Min deposit: 300 USD",
      "Min spread: 0.10 pips",
      "Max leverage: 1:2000",
      "Commission: No commission"
    ],
    badge: "PRO",
    popular: true,
    icon: <Star className="h-8 w-8 text-yellow-400" />
  },
  {
    type: "ZERO",
    title: "Zero",
    subtitle: "Spreads from 0 pips on top instruments.",
    price: "",
    description: "Spreads from 0 pips on top instruments.",
    features: [
      "Max deposit: 10000 USD",
      "Min spread: 0.0 pips",
      "Max leverage: 1:2000",
      "Commission: From 0.05 USD per lot/side"
    ],
    badge: "ZERO",
    popular: false,
    icon: <Shield className="h-8 w-8 text-sky-400" />
  },
  {
    type: "BONUSES",
    title: "Available",
    subtitle: "",
    price: "Compliant",
    description: "accounts with 0 swap charges",
    features: ["Minimum Deposit $100", "Leverage Up to 1:500", "Bonuses Available"],
    badge: "BONUSES",
    popular: false,
    icon: <CheckCircle className="h-8 w-8 text-purple-400" />
  },
  {
    type: "ISLAMIC",
    title: "Compliant",
    subtitle: "accounts with 0 swap charges",
    price: "",
    description: "",
    features: ["Minimum Deposit $100", "Leverage Up to 1:500", "Bonuses Available"],
    badge: "ISLAMIC (SWAP-FREE)",
    popular: false,
    icon: <Shield className="h-8 w-8 text-cyan-400" />
  }
];


  return (
    <section id="accounts" className="py-20 bg-secondary/30">
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
            Choose the Account
            <br />
            <span className="text-primary">That Fits Your Style</span>
          </h2>
        </motion.div>

        {/* Accounts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {accounts.slice(0, 3).map((account, index) => (
            <motion.div
              key={account.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative"
            >
              {account.popular && (
                <div className="absolute -top-3 right-4 bg-gradient-to-r from-primary to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <Card
                className={`h-full border border-border/40 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  account.popular ? "border-primary shadow-lg" : ""
                }`}
              >
                <CardHeader className="text-center pb-4">
<div
  className={`
    inline-flex items-center px-3 py-1 
    rounded-full text-[11px] font-poppins font-medium tracking-wide uppercase
    text-foreground/80
    bg-foreground/5
    border border-border
    mb-4
  `}
>
  {account.badge}
</div>


                  <div className="mb-3 flex justify-center">{account.icon}</div>
                  <CardTitle className="font-poppins font-bold text-2xl text-foreground mb-1">
                    {account.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{account.subtitle}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  {account.price && (
                    <div className="text-center mb-6">
                      <div className="text-3xl font-poppins font-bold bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">
                        {account.price}
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">{account.description}</p>
                    </div>
                  )}

                  <div className="space-y-3">
                    {account.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3 border-b border-border/20 pb-2 last:border-none"
                      >
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {accounts.slice(3).map((account, index) => (
            <motion.div
              key={account.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="h-full border border-border/40 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="text-center pb-4">
<div
  className={`
    inline-flex items-center px-3 py-1 
    rounded-full text-[11px] font-poppins font-medium tracking-wide uppercase
    text-foreground/80
    bg-foreground/5
    border border-border
    mb-4
  `}
>
  {account.badge}
</div>


                  <div className="mb-3 flex justify-center">{account.icon}</div>
                  <CardTitle className="font-poppins font-bold text-2xl text-foreground mb-1">
                    {account.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{account.subtitle}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {account.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3 border-b border-border/20 pb-2 last:border-none"
                      >
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button
            size="lg"
            className="font-poppins font-medium uppercase text-sm px-12 py-6 shadow-xl hover:shadow-primary/25 transition-all duration-300 rounded-xl"
          >
            <a href='https://crm.omixcapital.com/' target='_blank' rel='noopener noreferrer'>
            Open Live Account
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="font-poppins font-medium uppercase text-sm px-12 py-6 rounded-xl"
          >
            <a href='https://crm.omixcapital.com/' target='_blank' rel='noopener noreferrer'>
            Try Demo
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Accounts;
