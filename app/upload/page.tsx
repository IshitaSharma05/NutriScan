"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, AlertCircle, Check } from "lucide-react"
import { useRouter } from "next/navigation"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function UploadPage() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null)
    const selectedFile = e.target.files?.[0]

    if (!selectedFile) {
      return
    }

    // Check if file is an image
    if (!selectedFile.type.startsWith("image/")) {
      setError("Please select an image file")
      return
    }

    // Check file size (max 5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("File size should be less than 5MB")
      return
    }

    setFile(selectedFile)

    // Create preview
    const reader = new FileReader()
    reader.onload = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(selectedFile)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) {
      setError("Please select a file to upload")
      return
    }

    setIsUploading(true)

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false)
      setSuccess(true)

      // Redirect to results page after 1 second
      setTimeout(() => {
        router.push("/results")
      }, 1000)
    }, 2000)
  }

  return (
    <div className="container mx-auto py-16 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Upload Food Label</CardTitle>
          <CardDescription>Take a clear photo of the food label and upload it for analysis</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                <Check className="h-4 w-4" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>Your image has been uploaded. Redirecting to results...</AlertDescription>
              </Alert>
            )}

            <div
              className={`border-2 border-dashed rounded-lg p-12 text-center ${
                preview ? "" : "hover:bg-muted/50 cursor-pointer"
              }`}
              onClick={() => !preview && document.getElementById("file-upload")?.click()}
            >
              {preview ? (
                <div className="space-y-4">
                  <img src={preview || "/placeholder.svg"} alt="Preview" className="max-h-[300px] mx-auto rounded-md" />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation()
                      setFile(null)
                      setPreview(null)
                    }}
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <Upload className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Click to upload or drag and drop</p>
                    <p className="text-sm text-muted-foreground">PNG, JPG or JPEG (max. 5MB)</p>
                  </div>
                </div>
              )}
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={!file || isUploading || success}>
              {isUploading ? "Uploading..." : "Analyze Label"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

