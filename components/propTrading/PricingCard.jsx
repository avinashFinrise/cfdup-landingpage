"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { AnimatedNumber } from "../ui/AnimatedNumber"


const PricingCard = ({ step, price, highlight }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className={`rounded-2xl p-10 h-full border transition-all duration-300
        ${highlight
          ? "bg-primary/90 text-primary-foreground border-primary"
          : "bg-card/40 border-border/50"}
      `}
    >
      <p className={`text-sm font-semibold mb-4 ${highlight ? "text-white/80" : "text-orange-400"}`}>
        {step}
      </p>

      <h3 className="text-4xl font-poppins font-bold mb-2">
        $<AnimatedNumber value={price} />
      </h3>

      <p className={`mb-6 ${highlight ? "text-white/90" : "text-muted-foreground"}`}>
        Risk-Reward Challenge Structure
      </p>

      <Link href="/about">
        <Button
            size="lg"
            className={`w-full rounded-full mb-8 font-medium
            ${highlight
                ? "bg-white text-primary hover:bg-white/90"
                : "bg-primary hover:bg-primary/90"}
            `}
        >
            Choose {step} Plan
            
        </Button>
      </Link>

      <div className="space-y-4 text-sm">
        {[
          ["Challenge Fees", `$${price}`],
          ["Challenge Type", step === "Step 1" ? "1 Step" : "2 Step"],
          ["Profit Target", step === "Step 1" ? "10%" : "P1: 8%, P2: 5%"],
          ["Maximum Daily Loss", step === "Step 1" ? "3%" : "5%"],
          ["Maximum Overall Loss", step === "Step 1" ? "6%" : "10%"],
          ["Minimum Trading Days", "5 Days"],
          ["Profit Split Up to", "100%"],
          ["News Trading", "✓"],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between">
            <span className={highlight ? "text-white/80" : "text-muted-foreground"}>
              {label}
            </span>
            <span className="font-medium">{value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default PricingCard
