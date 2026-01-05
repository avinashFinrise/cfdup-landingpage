"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calculator, FileCheck, FileStack, Target, Users } from "lucide-react"

const steps = [
  {
    step: 'Step 1',
    title: 'Sign Up & Onboard',
    icon: <Users className="w-10 h-10 text-chart-2" />,
  },
  {
    step: 'Step 2',
    title: 'Define Your Mission',
    icon: <Target className="w-10 h-10 text-chart-2" />,
  },
  {
    step: 'Step 3',
    title: 'Build Your Program',
    icon: <FileStack className="w-10 h-10 text-chart-2" />,
  },
  {
    step: 'Step 4',
    title: 'Create Your Budget',
    icon: <Calculator className="w-10 h-10 text-chart-2" />,
  },
  {
    step: 'Step 5',
    title: 'Submit for Review',
    icon: <FileCheck className="w-10 h-10 text-chart-2" />,
  },
]

const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h3 className="font-poppins font-bold text-2xl text-primary mb-2">
            HOW IT WORKS
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A simple, structured process from idea to execution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <Card className="h-full bg-card/30 border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-chart-2/10">
                      {item.icon}
                    </div>
                  </div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {item.step}
                  </p>
                  <h4 className="font-poppins font-semibold text-foreground">
                    {item.title}
                  </h4>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
