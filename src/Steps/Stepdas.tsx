"use client"

// CookieConsentForm.tsx
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

interface MarketingProvider {
  id: string
  name: string
  selected: boolean
}

export default function Stepdas() {
  const [consent, setConsent] = useState<boolean | null>(null)
  const [showExplanations, setShowExplanations] = useState(false)
  const [customOptOut, setCustomOptOut] = useState("")
  const [providers, setProviders] = useState<MarketingProvider[]>([
    { id: "google-ads", name: "Adobe Analytics", selected: false },
    { id: "google-adsense-personalized", name: "Burst Statistics", selected: false },
    { id: "google-adsense-non-personalized", name: "econda Analytics", selected: false },
    { id: "linkedin", name: "etracker", selected: false },
    { id: "linkedin", name: "Google Analytics (aktuelle Version 4)", selected: false },
    { id: "linkedin", name: "Google Tag Manager", selected: false },
    { id: "linkedin", name: "Jetpack (WordPress Stats)", selected: false },
    { id: "linkedin", name: "Visual Website Optimizer", selected: false },
    { id: "linkedin", name: "Zählmarken VG Wort / Skalierbares Zentrales Messverfahren", selected: false },
    { id: "linkedin", name: "Yandex-Metrica" , selected: false },
  ])

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogContent, setDialogContent] = useState({
    title: "",
    description: "",
  })

  const handleConsentChange = (value: boolean) => {
    setConsent(value)
    openDialog(
      value ? "Marketing Tracking Enabled" : "Marketing Tracking Disabled",
      value
        ? "You've enabled marketing tracking. Please select the specific providers below."
        : "You've disabled marketing tracking. This section will be excluded from your privacy policy.",
    )
  }

  const toggleProvider = (id: string) => {
    const provider = providers.find((p) => p.id === id)
    setProviders(
      providers.map((provider) => (provider.id === id ? { ...provider, selected: !provider.selected } : provider)),
    )

    if (provider) {
      openDialog(
        "Provider Selection",
        `You've ${provider.selected ? "deselected" : "selected"} ${provider.name}. This will ${provider.selected ? "no longer be" : "be"} included in your privacy policy.`,
      )
    }
  }

  const openDialog = (title: string, description: string) => {
    setDialogContent({ title, description })
    setDialogOpen(true)
  }

  return (
    <div className="max-w-2xl mt-5 mx-auto p-6 bg-gray-200 rounded-md">
       
      <div className="mb-6 ">
        <h2 className="text-lg font-medium mb-2">
        Setzen Sie Dienste und Verfahren zur Webanalyse, A/B - Testing und Optimierung ein?  </h2>

        <div className="mb-2">
          <button
            className="text-blue-600 text-sm underline"
            onClick={() => {
              setShowExplanations(!showExplanations)
              if (!showExplanations) {
                openDialog(
                  "Marketing Tracking Explanation",
                  "Marketing tracking involves collecting data about user behavior to optimize advertising campaigns. This requires specific privacy policy provisions to comply with data protection regulations.",
                )
              }
            }}
          >
            {showExplanations ? "Hide explanations" : "(Erläuterungen anzeigen)"}
          </button>
        </div>

        {showExplanations && (
          <div className="bg-white p-3 rounded mb-4 text-sm">
            {/* <p>This explains what marketing tracking is used for and how your data might be processed.</p> */}
          </div>
        )}

        <div className="flex gap-2 mb-6">
          <Button
            onClick={() => handleConsentChange(true)}
            className={cn(
              "w-20",
              consent === true ? "bg-green-500 hover:bg-green-600" : "bg-green-100 hover:bg-green-200",
            )}
          >
            ja
          </Button>
          <Button
            onClick={() => handleConsentChange(false)}
            className={cn(
              "w-20",
              consent === false ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-200 hover:bg-gray-300",
            )}
          >
            nein
          </Button>
        </div>
      </div>

      {consent && (
        <div className="mb-6">
          <p className="mb-3 text-sm">Bitte wählen Sie einen der verwendeten Anbieter oder der Verfahren aus (bitte lesen Sie zudem die Erläuterungen):
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {providers.map((provider) => (
              <Card
                key={provider.id}
                className={cn(
                  "cursor-pointer hover:bg-gray-50",
                  provider.selected ? "border-green-500 hover:bg-green-600 bg-gray-50" : "bg-gray-200" ,
                )}
                onClick={() => toggleProvider(provider.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-sm">{provider.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {consent && (
        <div className="mb-6">
          <p className="text-sm mb-3">
          Sie können an dieser Stelle Angaben zu individuellen Widerspruchsmöglichkeiten (z. B. Opt-Out-/ Widerspruchs-Links oder HTML-Code wie bei Matomo) eintragen. Diese Angaben sind jedoch nicht notwendig, wenn Sie ein Cookie-Opt-In-Tool/ Banner nutzen und Nutzer dort entscheiden können, ob Cookies gesetzt werden:

          </p>

          <Textarea value={customOptOut} onChange={(e) => setCustomOptOut(e.target.value)} className="min-h-32" />
        </div>
      )}

      {consent && (
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="relative w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-auto text-left pl-3 pr-8"
              onClick={() =>
                openDialog(
                  "Premium Features",
                  "Upgrade to premium to access over 2,300 additional modules for your privacy policy.",
                )
              }
            >
              Vorteil Premium: Aus über 2.300 weiteren Modulen auswählen
            </Button>
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white">🔍</span>
            </div>
          </div>

          <Button
            variant="link"
            className="text-blue-600"
            onClick={() =>
              openDialog(
                "All Providers",
                "View all available marketing providers. Premium users have access to over 2,300 additional modules.",
              )
            }
          >
            Alle anzeigen
          </Button>
        </div>
      )}

      <div className="mt-6">
        <Button
          variant="secondary"
          className="bg-blue-100 text-blue-800 hover:bg-blue-200"
          onClick={() =>
            openDialog(
              "Marketing Preview",
              "This preview shows how the marketing tracking section will appear in your privacy policy.",
            )
          }
        >
          Alle anzeigen
          
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
