"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Brain, HeadphonesIcon, Sparkles } from "lucide-react"

const features = [
  {
    icon: <Brain className="w-8 h-8 text-chart-2" />,
    title: "AI-Powered Insights",
    description: "Leverage advanced analytics for strategic decision-making"
  },
  {
    icon: <Sparkles className="w-8 h-8 text-chart-2" />,
    title: "Innovative Solutions",
    description: "Cutting-edge tools designed for modern organizations"
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8 text-chart-2" />,
    title: "Expert Support",
    description: "Dedicated team to guide you through every step"
  }
]

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h3 className="font-poppins font-bold text-2xl text-primary mb-2">
            WHY CHOOSE US
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built to help organizations succeed with confidence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
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
                  <h4 className="font-poppins font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
