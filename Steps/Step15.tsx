"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

export default function Step15() {
  const [selectedProcedure, setSelectedProcedure] = useState<string | null>("integration")
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogContent, setDialogContent] = useState({
    title: "",
    description: "",
  })

  const reviewPlatforms = [
    { id: "bewertet", name: "bewertet.de" },
    { id: "customer-alliance", name: "Customer Alliance" },
    { id: "ecom", name: "eCom" },
    { id: "kunden-testen", name: "kunden-testen.com" },
    { id: "kununu", name: "kununu" },
    { id: "provenexpert", name: "ProvenExpert" },
    { id: "trusted-shops", name: "Trusted Shops (Trusted Badge)" },
    { id: "trustami", name: "Trustami" },
    { id: "who-knows-the-best", name: "who knows the BEST" },
    { id: "yelp", name: "Yelp" },
  ]

  const openDialog = (title: string, description: string) => {
    setDialogContent({ title, description })
    setDialogOpen(true)
  }

  return (
    <div className="bg-gray-100 p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-gray-800 mb-2">
          Do you participate in customer review or rating processes or integrate corresponding widgets into your shops,
          apps or websites?
        </h2>
        <div
          className="text-blue-600 hover:underline text-sm cursor-pointer mb-3"
          onClick={() =>
            openDialog(
              "Review Process Explanation",
              "Customer reviews and ratings often involve collecting and displaying personal data. This requires specific privacy policy provisions to comply with data protection regulations.",
            )
          }
        >
          [Show explanation]
        </div>

        <div className="flex gap-2 mb-6">
          <Button
            className="bg-green-500 hover:bg-green-600 text-white w-16"
            onClick={() =>
              openDialog(
                "Reviews Enabled",
                "You've indicated that you participate in customer review or rating processes. This will be included in your privacy policy.",
              )
            }
          >
            ja
          </Button>
          <Button
            variant="outline"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-16"
            onClick={() =>
              openDialog(
                "Reviews Disabled",
                "You've indicated that you don't participate in customer review or rating processes. This section will be excluded from your privacy policy.",
              )
            }
          >
            nein
          </Button>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 mb-3">Please select the procedures you use:</p>

          <Card
            className={`w-48 p-4 cursor-pointer ${selectedProcedure === "integration" ? "border-blue-500 border-2" : "border-gray-200"}`}
            onClick={() => {
              setSelectedProcedure("integration")
              openDialog(
                "Integration Selected",
                "You've selected 'Integration of review and rating widgets' as your review procedure. This will be included in your privacy policy.",
              )
            }}
          >
            <div className="text-blue-600 text-center">Integration of review and rating widgets</div>
          </Card>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 mb-3">Please select a review platform:</p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {reviewPlatforms.slice(0, 6).map((platform) => (
              <Card
                key={platform.id}
                className={`p-4 cursor-pointer flex items-center justify-center ${selectedPlatform === platform.id ? "border-blue-500 border-2" : "border-gray-200"}`}
                onClick={() => {
                  setSelectedPlatform(platform.id)
                  openDialog(
                    "Platform Selected",
                    `You've selected '${platform.name}' as your review platform. This will be included in your privacy policy.`,
                  )
                }}
              >
                <div className="text-blue-600 text-center">{platform.name}</div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {reviewPlatforms.slice(6, 10).map((platform) => (
              <Card
                key={platform.id}
                className={`p-4 cursor-pointer flex items-center justify-center ${selectedPlatform === platform.id ? "border-blue-500 border-2" : "border-gray-200"}`}
                onClick={() => {
                  setSelectedPlatform(platform.id)
                  openDialog(
                    "Platform Selected",
                    `You've selected '${platform.name}' as your review platform. This will be included in your privacy policy.`,
                  )
                }}
              >
                <div className="text-blue-600 text-center">{platform.name}</div>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className="bg-amber-50 text-amber-800 border-amber-200 px-3 py-1 rounded-md">
            Visited Premium: Aus über 2.300 weiteren Modulen auswählen
          </Badge>
          <Info
            className="text-blue-500 w-5 h-5 cursor-pointer"
            onClick={() =>
              openDialog(
                "Premium Information",
                "Upgrade to premium to access over 2,300 additional modules for your privacy policy.",
              )
            }
          />
          <Button
            variant="ghost"
            className="text-blue-600 hover:text-blue-800 p-0 h-auto"
            onClick={() =>
              openDialog(
                "All Platforms",
                "View all available review platforms. Premium users have access to over 2,300 additional modules.",
              )
            }
          >
            Show all
          </Button>
        </div>

        <Button
          variant="secondary"
          className="text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-1"
          onClick={() =>
            openDialog(
              "Review Preview",
              "This preview shows how the review and rating section will appear in your privacy policy.",
            )
          }
        >
          Show preview
        </Button>
      </div>

      {/* Global Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogContent.title}</DialogTitle>
            <DialogDescription>{dialogContent.description}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
