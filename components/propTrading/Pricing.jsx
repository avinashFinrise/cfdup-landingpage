"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import PricingCard from "./PricingCard"

const pricingData = {
  "5k": {
    step1: { price: 69 },
    step2: { price: 59 },
  },
  "15k": {
    step1: { price: 135 },
    step2: { price: 125 },
  },
  "25k": {
    step1: { price: 225 },
    step2: { price: 199 },
  },
  "50k": {
    step1: { price: 335 },
    step2: { price: 299 },
  },
  "100k": {
    step1: { price: 549 },
    step2: { price: 499 },
  },
  "200k": {
    step1: { price: 999 },
    step2: { price: 949 },
  },
}

const accountSizes = ["5k", "15k", "25k", "50k", "100k", "200k"]


export default function Pricing() {
  const [activeSize, setActiveSize] = useState(accountSizes[0])
  const data = pricingData[activeSize]

  return (
    <section className="relative min-h-screen py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/60 to-secondary/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center font-poppins font-bold text-4xl mb-10"
        >
          Pricing Plans
        </motion.h1>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex gap-2 bg-card/50 border border-border/50 rounded-full p-2">
            {accountSizes.map(size => (
              <button
                key={size}
                onClick={() => setActiveSize(size)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition
                  ${activeSize === size
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"}
                `}
              >
                {size}$
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <PricingCard step="Step 1" price={data.step1.price} />
          <PricingCard step="Step 2" price={data.step2.price} highlight />
        </div>
      </div>
    </section>
  )
}
