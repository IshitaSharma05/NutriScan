"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignupPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "male",
    weight: "",
    height: "",
    email: "",
    hasAllergies: false,
    allergies: {
      milk: false,
      eggs: false,
      peanuts: false,
      treeNuts: false,
      wheat: false,
      soy: false,
      fish: false,
      shellfish: false,
      gluten: false,
      other: false,
      otherSpecify: "",
    },
    lactoseIntolerant: "not-aware",
    preservativeAllergies: "not-aware",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    if (name.startsWith("allergies.")) {
      const allergyName = name.split(".")[1]
      setFormData((prev) => ({
        ...prev,
        allergies: {
          ...prev.allergies,
          [allergyName]: checked,
        },
      }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: checked }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      // In a real app, you would send this data to your backend
      console.log("Form submitted:", formData)
      // Redirect to upload page
      router.push("/upload")
    }
  }

  return (
    <div className="container mx-auto py-16 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Create Your Account</CardTitle>
          <CardDescription>
            {step === 1 ? "Please provide your basic information" : "Tell us about your dietary restrictions"}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {step === 1 ? (
              // Step 1: Basic Information
              <>
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    min="1"
                    max="120"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Gender</Label>
                  <RadioGroup value={formData.gender} onValueChange={(value) => handleRadioChange("gender", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other-gender" />
                      <Label htmlFor="other-gender">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      name="weight"
                      type="number"
                      min="1"
                      max="500"
                      value={formData.weight}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      name="height"
                      type="number"
                      min="50"
                      max="300"
                      value={formData.height}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </>
            ) : (
              // Step 2: Allergy Information
              <>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasAllergies"
                      checked={formData.hasAllergies}
                      onCheckedChange={(checked) => handleCheckboxChange("hasAllergies", checked as boolean)}
                    />
                    <Label htmlFor="hasAllergies">Do you have food allergies?</Label>
                  </div>
                </div>

                {formData.hasAllergies && (
                  <div className="space-y-3 border p-4 rounded-md">
                    <Label>Select all that apply:</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="milk"
                          checked={formData.allergies.milk}
                          onCheckedChange={(checked) => handleCheckboxChange("allergies.milk", checked as boolean)}
                        />
                        <Label htmlFor="milk">Milk</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="eggs"
                          checked={formData.allergies.eggs}
                          onCheckedChange={(checked) => handleCheckboxChange("allergies.eggs", checked as boolean)}
                        />
                        <Label htmlFor="eggs">Eggs</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="peanuts"
                          checked={formData.allergies.peanuts}
                          onCheckedChange={(checked) => handleCheckboxChange("allergies.peanuts", checked as boolean)}
                        />
                        <Label htmlFor="peanuts">Peanuts</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="treeNuts"
                          checked={formData.allergies.treeNuts}
                          onCheckedChange={(checked) => handleCheckboxChange("allergies.treeNuts", checked as boolean)}
                        />
                        <Label htmlFor="treeNuts">Tree Nuts</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="wheat"
                          checked={formData.allergies.wheat}
                          onCheckedChange={(checked) => handleCheckboxChange("allergies.wheat", checked as boolean)}
                        />
                        <Label htmlFor="wheat">Wheat</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="soy"
                          checked={formData.allergies.soy}
                          onCheckedChange={(checked) => handleCheckboxChange("allergies.soy", checked as boolean)}
                        />
                        <Label htmlFor="soy">Soy</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="fish"
                          checked={formData.allergies.fish}
                          onCheckedChange={(checked) => handleCheckboxChange("allergies.fish", checked as boolean)}
                        />
                        <Label htmlFor="fish">Fish</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="shellfish"
                          checked={formData.allergies.shellfish}
                          onCheckedChange={(checked) => handleCheckboxChange("allergies.shellfish", checked as boolean)}
                        />
                        <Label htmlFor="shellfish">Shellfish</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="gluten"
                          checked={formData.allergies.gluten}
                          onCheckedChange={(checked) => handleCheckboxChange("allergies.gluten", checked as boolean)}
                        />
                        <Label htmlFor="gluten">Gluten</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="other"
                          checked={formData.allergies.other}
                          onCheckedChange={(checked) => handleCheckboxChange("allergies.other", checked as boolean)}
                        />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </div>
                    {formData.allergies.other && (
                      <div className="space-y-2">
                        <Label htmlFor="otherSpecify">Please specify:</Label>
                        <Input
                          id="otherSpecify"
                          name="allergies.otherSpecify"
                          value={formData.allergies.otherSpecify}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              allergies: {
                                ...prev.allergies,
                                otherSpecify: e.target.value,
                              },
                            }))
                          }
                        />
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-2">
                  <Label>Are you lactose intolerant?</Label>
                  <RadioGroup
                    value={formData.lactoseIntolerant}
                    onValueChange={(value) => handleRadioChange("lactoseIntolerant", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="lactose-yes" />
                      <Label htmlFor="lactose-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="lactose-no" />
                      <Label htmlFor="lactose-no">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="not-aware" id="lactose-not-aware" />
                      <Label htmlFor="lactose-not-aware">Not aware</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Are you allergic to any preservatives or artificial ingredients?</Label>
                  <RadioGroup
                    value={formData.preservativeAllergies}
                    onValueChange={(value) => handleRadioChange("preservativeAllergies", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="preservative-yes" />
                      <Label htmlFor="preservative-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="preservative-no" />
                      <Label htmlFor="preservative-no">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="not-aware" id="preservative-not-aware" />
                      <Label htmlFor="preservative-not-aware">Not aware</Label>
                    </div>
                  </RadioGroup>
                </div>
              </>
            )}
          </CardContent>
          <CardFooter>
            {step === 2 && (
              <Button type="button" variant="outline" onClick={() => setStep(1)} className="mr-auto">
                Back
              </Button>
            )}
            <Button type="submit" className={step === 2 ? "ml-auto" : "w-full"}>
              {step === 1 ? "Next" : "Complete Signup"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

