"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Check, Upload } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// Mock data for demonstration
const mockResults = {
  productName: "Chocolate Chip Cookies",
  ingredients: [
    "Wheat Flour",
    "Sugar",
    "Chocolate Chips (Sugar, Chocolate Liquor, Cocoa Butter, Soy Lecithin)",
    "Vegetable Oil (Palm, Canola)",
    "Eggs",
    "Natural Flavors",
    "Salt",
    "Baking Soda",
  ],
  allergens: [
    { name: "Wheat", severity: "high" },
    { name: "Eggs", severity: "high" },
    { name: "Soy", severity: "medium" },
  ],
  nutritionalInfo: {
    calories: 150,
    fat: 7,
    carbs: 22,
    protein: 2,
    sugar: 12,
    sodium: 110,
  },
}

export default function ResultsPage() {
  return (
    <div className="container mx-auto py-16 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Analysis Results</h1>
        <p className="text-muted-foreground">Here's what we found in your food label</p>
      </div>

      <div className="grid gap-6">
        {/* Product Information */}
        <Card>
          <CardHeader>
            <CardTitle>Product Information</CardTitle>
            <CardDescription>Basic details about the product</CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-bold mb-4">{mockResults.productName}</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Ingredients:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {mockResults.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-sm">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Allergen Alerts */}
        <Card>
          <CardHeader className="bg-amber-50 dark:bg-amber-950/20 border-b">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <CardTitle>Allergen Alerts</CardTitle>
            </div>
            <CardDescription>Potential allergens detected in this product</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {mockResults.allergens.length > 0 ? (
              <div className="space-y-4">
                {mockResults.allergens.map((allergen, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Badge
                      variant="outline"
                      className={`
                        ${allergen.severity === "high" ? "border-red-500 text-red-500" : ""}
                        ${allergen.severity === "medium" ? "border-amber-500 text-amber-500" : ""}
                        ${allergen.severity === "low" ? "border-yellow-500 text-yellow-500" : ""}
                      `}
                    >
                      {allergen.severity}
                    </Badge>
                    <div>
                      <h4 className="font-medium">{allergen.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {allergen.severity === "high"
                          ? "This is a major ingredient in the product."
                          : allergen.severity === "medium"
                            ? "This ingredient is present in moderate amounts."
                            : "This ingredient is present in trace amounts."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Alert>
                <Check className="h-4 w-4" />
                <AlertTitle>No allergens detected</AlertTitle>
                <AlertDescription>
                  Based on your profile, we didn't detect any allergens in this product.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Nutritional Information */}
        <Card>
          <CardHeader>
            <CardTitle>Nutritional Information</CardTitle>
            <CardDescription>Per serving</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Calories</span>
                  <span className="text-sm font-medium">{mockResults.nutritionalInfo.calories} kcal</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Fat</span>
                  <span className="text-sm font-medium">{mockResults.nutritionalInfo.fat}g</span>
                </div>
                <Progress value={mockResults.nutritionalInfo.fat * 5} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Carbohydrates</span>
                  <span className="text-sm font-medium">{mockResults.nutritionalInfo.carbs}g</span>
                </div>
                <Progress value={mockResults.nutritionalInfo.carbs * 3} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Protein</span>
                  <span className="text-sm font-medium">{mockResults.nutritionalInfo.protein}g</span>
                </div>
                <Progress value={mockResults.nutritionalInfo.protein * 10} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Sugar</span>
                  <span className="text-sm font-medium">{mockResults.nutritionalInfo.sugar}g</span>
                </div>
                <Progress value={mockResults.nutritionalInfo.sugar * 4} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Sodium</span>
                  <span className="text-sm font-medium">{mockResults.nutritionalInfo.sodium}mg</span>
                </div>
                <Progress value={mockResults.nutritionalInfo.sodium / 10} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex gap-4 justify-center">
        <Button asChild variant="outline">
          <Link href="/upload">
            <Upload className="mr-2 h-4 w-4" />
            Scan Another Label
          </Link>
        </Button>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}

