"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

const Step14 = () => {
  const [sweepstakesEnabled, setSweepstakesEnabled] = useState<boolean | null>(null)
  const [surveysEnabled, setSurveysEnabled] = useState<boolean | null>(null)

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogContent, setDialogContent] = useState({
    title: "",
    description: "",
  })

  const openDialog = (title: string, description: string) => {
    setDialogContent({ title, description })
    setDialogOpen(true)
  }

  return (
    <div className="flex flex-col gap-4 max-w-3xl bg-gray-200 mt-4">
      <Card className="bg-gray-100">
        <CardContent className="p-4">
          <div className="mb-4">
            <p className="font-medium mb-1">Do you organize sweepstakes or competitions?</p>
            <p
              className="text-xs text-blue-500 hover:underline cursor-pointer"
              onClick={() =>
                openDialog(
                  "Sweepstakes Explanation",
                  "Sweepstakes and competitions often involve collecting personal data from participants. This requires specific privacy policy provisions to comply with data protection regulations.",
                )
              }
            >
              [Show explanations]
            </p>
          </div>

          <div className="flex gap-2 mb-4">
            <Button
              className="bg-green-500 hover:bg-green-600 w-16"
              onClick={() => {
                setSweepstakesEnabled(true)
                openDialog(
                  "Sweepstakes Enabled",
                  "You've indicated that you organize sweepstakes or competitions. This will be included in your privacy policy.",
                )
              }}
            >
              ja
            </Button>
            <Button
              variant="outline"
              className="bg-gray-200 hover:bg-gray-300 w-16"
              onClick={() => {
                setSweepstakesEnabled(false)
                openDialog(
                  "Sweepstakes Disabled",
                  "You've indicated that you don't organize sweepstakes or competitions. This section will be excluded from your privacy policy.",
                )
              }}
            >
              nein
            </Button>
          </div>

          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-gray-600">Vorteile Premium: Aus über 2.300 weiteren Modulen auswählen</p>
            <div className="flex items-center">
              <Search className="h-4 w-4 text-gray-500 mr-2" />
              <p
                className="text-xs text-blue-500 hover:underline cursor-pointer"
                onClick={() =>
                  openDialog(
                    "Premium Features",
                    "Upgrade to premium to access over 2,300 additional modules for your privacy policy.",
                  )
                }
              >
                Show all
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            className="text-xs px-2 py-1 h-auto bg-blue-50 text-blue-500 hover:bg-blue-100"
            onClick={() =>
              openDialog(
                "Sweepstakes Preview",
                "This preview shows how the sweepstakes section will appear in your privacy policy.",
              )
            }
          >
            Show preview
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gray-100">
        <CardContent className="p-4">
          <div className="mb-4">
            <p className="font-medium mb-1">Do you conduct surveys or polls?</p>
            <p
              className="text-xs text-blue-500 hover:underline cursor-pointer"
              onClick={() =>
                openDialog(
                  "Surveys Explanation",
                  "Surveys and polls often involve collecting personal data from participants. This requires specific privacy policy provisions to comply with data protection regulations.",
                )
              }
            >
              [Show explanations]
            </p>
          </div>

          <div className="flex gap-2 mb-4">
            <Button
              className="bg-green-500 hover:bg-green-600 w-16"
              onClick={() => {
                setSurveysEnabled(true)
                openDialog(
                  "Surveys Enabled",
                  "You've indicated that you conduct surveys or polls. This will be included in your privacy policy.",
                )
              }}
            >
              ja
            </Button>
            <Button
              variant="outline"
              className="bg-gray-200 hover:bg-gray-300 w-16"
              onClick={() => {
                setSurveysEnabled(false)
                openDialog(
                  "Surveys Disabled",
                  "You've indicated that you don't conduct surveys or polls. This section will be excluded from your privacy policy.",
                )
              }}
            >
              nein
            </Button>
          </div>

          <p className="text-xs text-gray-600 mb-4">Please select a provider used, if applicable:</p>

          <div className="grid grid-cols-4 gap-2 mb-4">
            <div
              className="bg-gray-200 p-4 flex items-center justify-center rounded-md cursor-pointer"
              onClick={() =>
                openDialog(
                  "Other Provider",
                  "You've selected 'Other' as your survey provider. You can specify the details in the next step.",
                )
              }
            >
              <span className="text-sm">Other</span>
            </div>
            <div
              className="bg-gray-200 p-4 flex items-center justify-center rounded-md cursor-pointer"
              onClick={() =>
                openDialog(
                  "Google Form with Formulate",
                  "You've selected 'Google Form with Formulate' as your survey provider. This will be included in your privacy policy.",
                )
              }
            >
              <span className="text-xs text-center">Google Form (with Formulate)</span>
            </div>
            <div
              className="bg-gray-200 p-4 flex items-center justify-center rounded-md cursor-pointer"
              onClick={() =>
                openDialog(
                  "Google Form",
                  "You've selected 'Google Form' as your survey provider. This will be included in your privacy policy.",
                )
              }
            >
              <span className="text-sm">Google Form</span>
            </div>
            <div
              className="bg-gray-200 p-4 flex items-center justify-center rounded-md cursor-pointer"
              onClick={() =>
                openDialog(
                  "LimeSurvey",
                  "You've selected 'LimeSurvey' as your survey provider. This will be included in your privacy policy.",
                )
              }
            >
              <span className="text-sm">LimeSurvey</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-gray-600">Vorteile Premium: Aus über 2.300 weiteren Modulen auswählen</p>
            <div className="flex items-center">
              <Search className="h-4 w-4 text-gray-500 mr-2" />
              <p
                className="text-xs text-blue-500 hover:underline cursor-pointer"
                onClick={() =>
                  openDialog(
                    "Premium Features",
                    "Upgrade to premium to access over 2,300 additional modules for your privacy policy.",
                  )
                }
              >
                Show all
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            className="text-xs px-2 py-1 h-auto bg-blue-50 text-blue-500 hover:bg-blue-100"
            onClick={() =>
              openDialog(
                "Surveys Preview",
                "This preview shows how the surveys section will appear in your privacy policy.",
              )
            }
          >
            Show preview
          </Button>
        </CardContent>
      </Card>

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

export default Step14
