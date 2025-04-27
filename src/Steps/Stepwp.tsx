"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { InfoIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

interface HostingService {
  id: string
  name: string
}

export default function Stepwp() {
  const [useExternalServices, setUseExternalServices] = useState<boolean | null>(null)
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogContent, setDialogContent] = useState({
    title: "",
    description: "",
  })

  const hostingServices: HostingService[] = [
    { id: "audio-hosting", name: "Nutzer können Kommentare oder Beiträge hinterlassen" },
    { id: "blubrry", name: "Kommentarabos" },
    { id: "libsyn", name: "Abruf von WordPress-Emojis und -Smilies" },
    { id: "podtrac", name: "Akismet Anti-Spam-Prüfung" },
    { id: "podcast-publisher", name: "Hosting bei Blogger.com" },
    { id: "podpage", name: "DISQUS-Kommentare" },
    { id: "soundcloud", name: "Profilbilder von Gravatar" },
    { id: "spotify", name: "Hosting bei Medium" },
    { id: "spotify", name: "UpdraftPlus - Backup" },
  ]

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const openDialog = (title: string, description: string) => {
    setDialogContent({ title, description })
    setDialogOpen(true)
  }

  return (
    <div className="max-w-3xl mt-5 mx-auto p-4 bg-gray-100 rounded-lg">
      <div className="mb-6">
        <div className=" p-4 rounded-lg mb-2">
          <div className="flex items-center mb-1">
            <h2 className="text-lg font-medium">
            Bieten Sie einen Blog (oder ein vergleichbares Publikationsmedium) an? </h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 ml-2"
                    onClick={() =>
                      openDialog(
                        "External Hosting Explanation",
                        "External hosting services for podcasts or music may collect and process user data. This requires specific privacy policy provisions to comply with data protection regulations.",
                      )
                    }
                  >
                    <InfoIcon className="h-4 w-4" />
                    <span className="sr-only">(Erläuterungen anzeigen)</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Bitte wählen Sie die eingesetzten Dienstleister (soweit zutreffend)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div
            className="text-xs text-gray-500 underline cursor-pointer"
            onClick={() =>
              openDialog(
                "External Hosting Explanation",
                "External hosting services for podcasts or music may collect and process user data. This requires specific privacy policy provisions to comply with data protection regulations.",
              )
            }
          >
            (Show explanations)
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          <Button
            variant={useExternalServices === true ? "default" : "outline"}
            className={`w-16 ${useExternalServices === true ? "bg-green-500 hover:bg-green-600" : ""}`}
            onClick={() => {
              setUseExternalServices(true)
              openDialog(
                "External Services Enabled",
                "You've indicated that you use external hosting services for podcasts or music. This will be included in your privacy policy.",
              )
            }}
          >
            ja
          </Button>
          <Button
            variant={useExternalServices === false ? "default" : "outline"}
            className={`w-16 ${useExternalServices === false ? "bg-gray-400 hover:bg-gray-500" : "bg-gray-300"}`}
            onClick={() => {
              setUseExternalServices(false)
              openDialog(
                "External Services Disabled",
                "You've indicated that you don't use external hosting services for podcasts or music. This section will be excluded from your privacy policy.",
              )
            }}
          >
            nein
          </Button>
        </div>

        {useExternalServices && (
          <>
            <div className="mb-2 text-sm">Bitte wählen Sie die eingesetzten Dienstleister (soweit zutreffend)</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {hostingServices.map((service) => (
                <Card
                  key={service.id}
                  className={`p-4 cursor-pointer flex items-center justify-center text-center h-24 ${
                    selectedServices.includes(service.id) ? "bg-blue-50 border-blue-300" : "bg-gray-200"
                  }`}
                  onClick={() => {
                    toggleService(service.id)
                    openDialog(
                      "Service Selected",
                      `You've ${selectedServices.includes(service.id) ? "deselected" : "selected"} the service: ${service.name}`,
                    )
                  }}
                >
                  <span className="text-sm">{service.name}</span>
                </Card>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2">
              <Badge variant="outline" className="bg-green-50 text-green-800 border-green-300 px-2 py-1">
                Vortel Premium: Aus über 2.000 weiteren Modulen auswählen
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-600 text-xs"
                onClick={() =>
                  openDialog(
                    "All Services",
                    "View all available hosting services. Premium users have access to over 2,000 additional modules.",
                  )
                }
              >
              Alle anzeigen
              </Button>
            </div>

            <div className="mt-4">
              <Button
                variant="outline"
                className="bg-gray-200"
                onClick={() =>
                  openDialog(
                    "Hosting Services Preview",
                    "This preview shows how the external hosting services section will appear in your privacy policy.",
                  )
                }
              >
                Vorschau anzeigen
              </Button>
            </div>
          </>
        )}
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
