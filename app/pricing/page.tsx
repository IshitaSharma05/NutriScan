"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export default function PricingPage() {
  return (
    <div className="container mx-auto py-16 md:py-24">
      <motion.div className="text-center mb-16" {...fadeIn}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Simple, Transparent Pricing</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that's right for you and start analyzing food labels today.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Free Plan */}
        <motion.div
          className="border rounded-lg p-8 bg-card glassmorphism hover-effect"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-2">Free</h3>
          <p className="text-muted-foreground mb-6">Perfect for getting started</p>
          <div className="text-4xl font-bold mb-6">₹0</div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <span>10 free allergen detections</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Basic nutritional information</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Common allergen alerts</span>
            </li>
          </ul>
          <Button asChild className="w-full gradient-bg hover-effect soft-shadow">
            <Link href="/signup">Get Started</Link>
          </Button>
        </motion.div>

        {/* Basic Plan */}
        <motion.div
          className="border rounded-lg p-8 bg-card glassmorphism hover-effect relative"
          {...fadeIn}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
            Popular
          </div>
          <h3 className="text-2xl font-bold mb-2">Basic</h3>
          <p className="text-muted-foreground mb-6">For regular users</p>
          <div className="text-4xl font-bold mb-6">
            ₹50<span className="text-lg font-normal">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Unlimited allergen detections</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Detailed nutritional analysis</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Personalized allergen alerts</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Ingredient safety ratings</span>
            </li>
          </ul>
          <Button asChild className="w-full gradient-bg hover-effect soft-shadow">
            <Link href="/signup">Subscribe</Link>
          </Button>
        </motion.div>

        {/* Premium Plan */}
        <motion.div
          className="border rounded-lg p-8 bg-card glassmorphism hover-effect"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-2">Premium</h3>
          <p className="text-muted-foreground mb-6">For health-conscious users</p>
          <div className="text-4xl font-bold mb-6">
            ₹200<span className="text-lg font-normal">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Everything in Basic plan</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Doctor consultation</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Personalized nutrition advice</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Priority support</span>
            </li>
          </ul>
          <Button asChild className="w-full gradient-bg hover-effect soft-shadow">
            <Link href="/signup">Subscribe</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

