"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const TradingIntroSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-secondary/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-foreground mb-6 leading-tight">
            Kickstart Your Forex
            <br />
            Trading Career with{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Omix Capital
            </span>
          </h2>

          <p className="text-muted-foreground text-lg mb-6 max-w-xl">
            Unlock your trading potential and start earning with real capital today.
          </p>

          <div className="space-y-4 mb-8 max-w-xl">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
              <p className="text-sm text-muted-foreground">
                Instant access to funded trading accounts designed for traders of
                all levels with full transparency.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
              <p className="text-sm text-muted-foreground">
                Flexible account options tailored to your trading style and risk
                level — from beginners to seasoned professionals.
              </p>
            </div>

            <p className="text-sm font-medium text-foreground">
              No hidden costs. No complicated rules. Just pure trading freedom.
            </p>
          </div>

          <Button
            size="lg"
            className="rounded-full px-10 py-6 font-poppins font-medium shadow-lg hover:shadow-primary/30 transition"
          >
            Get Started
          </Button>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          {/* Outer glow ring */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-primary/20 blur-3xl" />

          {/* Purple ring */}
            <div className="w-[300px] h-[300px] rounded-full bg-background border border-border/5 flex items-center justify-center overflow-hidden">
                <img
                    src="/images/globe.png"
                    alt="Global Markets"
                    className="w-full h-full object-cover"
                />
            </div>

          {/* Experience badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-6 right-6 bg-primary text-black rounded-full w-28 h-28 flex flex-col items-center justify-center text-center shadow-xl"
          >
            <span className="text-2xl font-bold">12+</span>
            <span className="text-xs uppercase tracking-wide">
              Years of
              <br />
              Experience
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TradingIntroSection
