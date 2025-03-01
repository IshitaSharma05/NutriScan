"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "glassmorphism" : "bg-transparent"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          NutriScan
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium hover-effect ${isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className={`text-sm font-medium hover-effect ${isActive("/pricing") ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              Pricing
            </Link>
            <Link
              href="/upload"
              className={`text-sm font-medium hover-effect ${isActive("/upload") ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              Upload
            </Link>
          </nav>
          <ThemeToggle />
          <Button asChild className="gradient-bg hover-effect">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden border-t glassmorphism"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container mx-auto py-4 flex flex-col gap-4">
            <Link
              href="/"
              className={`text-sm font-medium ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className={`text-sm font-medium ${isActive("/pricing") ? "text-primary" : "text-muted-foreground"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/upload"
              className={`text-sm font-medium ${isActive("/upload") ? "text-primary" : "text-muted-foreground"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Upload
            </Link>
            <Button asChild className="gradient-bg w-full">
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                Sign Up
              </Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}

