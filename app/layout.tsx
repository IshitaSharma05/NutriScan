import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import RootLayoutClient from "./layout-client"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NutriScan - Food Label Analysis",
  description: "Analyze food labels for nutrition and allergens",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <RootLayoutClient children={children} />
}



import './globals.css'