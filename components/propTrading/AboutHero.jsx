"use client"

import { motion } from "framer-motion"
import { ArrowDown, ShieldCheck, Target, Users } from "lucide-react"

const AboutHero = () => {
  const highlights = [
    {
      text: "Guaranteed Payouts",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    },
    {
      text: "Unrestricted News Trading",
      icon: <Users className="w-6 h-6 text-primary" />,
    },
    {
      text: "No strict Consistency Rules",
      icon: <Target className="w-6 h-6 text-primary" />,
    },
    { 
      text: "Beginner-Friendly to Professional",
      icon: <ArrowDown className="w-6 h-6 text-primary" />,
    }
  ]

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/60 to-secondary/30" />

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Pre-heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm sm:text-base uppercase tracking-wide text-muted-foreground mb-3"
          >
            Omix Capital Proprietary Trading
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
          >
            Your Shortcut to
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Trading Capital
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            OmixCapital backs confident, disciplined traders with real capital and real opportunities
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-14 justify-items-center items-center"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50"
              >
                {item.icon}
                <span className="text-sm font-medium text-foreground">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* 
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center text-muted-foreground"
            >
              <span className="text-xs uppercase tracking-wide mb-1">
                Learn more
              </span>
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.div> */}
        </div>
      </div>

      {/* Floating accents (same language as main hero) */}
      <motion.div
        className="absolute top-24 left-12 w-4 h-4 bg-primary/30 rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-6 h-6 bg-primary/20 rounded-full"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </section>
  )
}

export default AboutHero
