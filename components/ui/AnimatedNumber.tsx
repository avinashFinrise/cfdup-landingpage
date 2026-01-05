"use client"

import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"

interface AnimatedNumberProps {
  value: number
  className?: string
}

export function AnimatedNumber({ value, className }: AnimatedNumberProps) {
  const motionValue = useMotionValue(value)
  const rounded = useTransform(motionValue, latest => Math.round(latest))

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.6,
      ease: "easeOut",
    })
    return controls.stop
  }, [value])

  return (
    <motion.span className={className}>
      {rounded}
    </motion.span>
  )
}
