"use client"

import { motion } from "framer-motion"
import { CheckCircle, Target, UserPlus, Wallet } from "lucide-react"

const steps = [
  {
    step: "Step 1",
    title: "Sign Up",
    description:
      "Create your account on FundedReady.com in just a few clicks. Provide basic details like your name, email, and phone number to get started.",
    icon: UserPlus,
  },
  {
    step: "Step 2",
    title: "Choose Your Challenge",
    description:
      "Select from our range of funding plans designed for different skill levels and strategies. Pick the one that matches your risk appetite and trading goals.",
    icon: Target,
  },
  {
    step: "Step 3",
    title: "Pass the Evaluation",
    description:
      "Meet simple and transparent trading targets: hit the profit target, stay within drawdown limits, and trade the required number of days.",
    icon: CheckCircle,
  },
  {
    step: "Step 4",
    title: "Get Funded",
    description:
      "Once you pass the challenge, you’ll receive a funded trading account. Trade with real capital and keep the majority of your profits.",
    icon: Wallet,
  },
]

export default function HowToGetFunded() {
  return (
    <section className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-secondary/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="font-poppins font-bold text-4xl mb-4">
            How to Get Funded with FundedReady
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Getting started with a FundedReady account is quick and hassle-free.
            We provide real trading capital to skilled traders — you focus on
            trading, we handle the rest.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-primary/80 rounded-2xl p-6 text-primary-foreground shadow-lg"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                  <Icon className="h-6 w-6" />
                </div>

                <p className="text-sm font-semibold uppercase tracking-wide mb-1 opacity-90">
                  {item.step}
                </p>

                <h3 className="font-poppins font-semibold text-lg mb-3">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed opacity-90">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
