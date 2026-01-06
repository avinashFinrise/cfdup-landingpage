"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    q: "What is OmixCapital?",
    a: "OmixCapital is a proprietary trading firm that provides traders with access to real capital. By passing our evaluation process, traders can manage funded accounts and retain a significant portion of the profits they generate.",
  },
  {
    q: "What advantages does OmixCapital offer to traders?",
    a: (
        <>
            <p className="text-sm" >OmixCapital offers:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li>Guaranteed payouts upon meeting profit targets.</li>
                <li>Permission to trade during high-impact news events.</li>
                <li>No consistency rules, allowing flexibility in trading performance.</li>
                <li>Programs suitable for both beginners and experienced traders.</li>
            </ul>
        </>
    ),
  },
  {
    q: "Which financial markets can I access through OmixCapital?",
    a: "You can trade various markets, including Forex, commodities, indices, and cryptocurrencies.",
  },
  {
    q: "How does the profit-sharing model work at OmixCapital?",
    a: "After meeting the profit targets, you are entitled to a significant share of the profits, with the exact percentage depending on your account type.",
  },
  {
    q: "What are the stages involved in obtaining a funded account?",
    a: (
        <>
            <p className="text-sm" >The process includes:</p>
            <ol className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li>Signing up on OmixCapital.com.</li>
                <li>Selecting and purchasing an evaluation challenge.</li>
                <li>Meeting the specified trading criteria.</li>
                <li>Receiving a funded account upon successful completion.</li>
            </ol>
        </>
    ),
  },
]

export default function FAQSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-secondary/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-wide text-primary">
              FAQ
            </span>
            <h2 className="font-poppins font-bold text-4xl mt-3 leading-tight">
              Frequently Asked
              <br />
              Questions
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border-none"
                >
                  <AccordionTrigger
                    className="flex items-center justify-between bg-primary/80 hover:bg-primary/90 transition rounded-lg px-6 py-4 text-primary-foreground hover:no-underline"
                  >
                    <span className="font-medium text-left">
                      {item.q}
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="bg-primary/10 text-primary-foreground px-6 pb-5 rounded-lg mt-5 pt-5">
                    <p className="text-sm leading-relaxed opacity-90 text-white">
                      {item.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* <div className="mt-8">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 font-medium hover:bg-primary hover:text-primary-foreground transition"
              >
                Read More
              </Button>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
