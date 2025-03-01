"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpIcon, ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export default function Home() {
  return (
    <>
      <section className="container mx-auto py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <motion.div {...fadeIn}>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 gradient-text">
            Analyze Food Labels for Nutrition and Allergens
          </h1>
          <p className="text-muted-foreground mb-8">
            Upload a photo of any food label and get detailed information about ingredients, allergens, and nutritional
            content. Stay safe and informed about what you eat.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="gradient-bg hover-effect soft-shadow">
              <Link href="/signup">
                Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="hover-effect soft-shadow">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="bg-muted rounded-lg flex items-center justify-center p-16 glassmorphism"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col items-center justify-center">
            <ArrowUpIcon className="h-16 w-16 text-primary animate-bounce" />
          </div>
        </motion.div>
      </section>

      <section className="parallax py-16 md:py-24">
        <div className="parallax-bg" style={{ backgroundImage: "url(/placeholder.svg)" }}></div>
        <div className="parallax-content container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Why Choose Us
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Accurate Analysis",
                description:
                  "Our advanced AI technology provides precise identification of ingredients and nutritional content with over 99% accuracy.",
              },
              {
                title: "Allergen Alerts",
                description:
                  "Instantly identify potential allergens and receive personalized alerts based on your dietary restrictions.",
              },
              {
                title: "Easy to Use",
                description:
                  "Simply upload a photo of any food label and get comprehensive analysis in seconds, no technical knowledge required.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm glassmorphism hover-effect"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 md:py-24 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Our advanced technology makes it easy to understand what's in your food
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              number: 1,
              title: "Sign Up",
              description: "Create an account and tell us about your dietary restrictions and allergies.",
            },
            {
              number: 2,
              title: "Upload Label",
              description: "Take a photo of any food label and upload it to our platform.",
            },
            {
              number: 3,
              title: "Get Results",
              description: "Receive detailed analysis of ingredients, nutrition, and potential allergens.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="p-6 glassmorphism hover-effect"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

