"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

const services = [
  "Amazon Payments",
  "American Express",
  "Apple Pay",
  "Flattr",
  "Google Play",
  "Klarna",
  "MaterCard",
  "PayPal-Dienste (PayPal, PayPal Plus, Braintree, etc.)",
  "Stripe",
  "Visa"
]

const marketplaces = [
  "avocadostore",
  "eBay",
  "etsy (formerly dawanda)",
  "Etsy",
  "Folksy",
  "hood.de",
  "Indiegogo",
  "Kickstarter",
  "Shopify",
  "Patreon",
  "Startnext",
  "Steady",
  "vinted",
]

export default function Step9C() {
  const [commercialService, setCommercialService] = useState<boolean | null>(null)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [serviceSearchTerm, setServiceSearchTerm] = useState("")
  const [showAllServices, setShowAllServices] = useState(true)

  const [processPersonalData, setProcessPersonalData] = useState<boolean | null>(null)
  const [dataProcessingSearchTerm, setDataProcessingSearchTerm] = useState("")
  const [showAllDataProcessing, setShowAllDataProcessing] = useState(true)

  const [offerGoods, setOfferGoods] = useState<boolean | null>(null)
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<string[]>([])
  const [marketplaceSearchTerm, setMarketplaceSearchTerm] = useState("")
  const [showAllMarketplaces, setShowAllMarketplaces] = useState(true)

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogContent, setDialogContent] = useState({
    title: "",
    description: "",
  })

  const toggleSelection = (item: string, selectedList: string[], setSelectedList: (list: string[]) => void) => {
    if (selectedList.includes(item)) {
      setSelectedList(selectedList.filter((i) => i !== item))
    } else {
      setSelectedList([...selectedList, item])
    }
  }

  const openDialog = (title: string, description: string) => {
    setDialogContent({ title, description })
    setDialogOpen(true)
  }

  // Filter services based on search term
  const filteredServices = services.filter(service =>
    service.toLowerCase().includes(serviceSearchTerm.toLowerCase())
  )

  // Filter marketplaces based on search term
  const filteredMarketplaces = marketplaces.filter(marketplace =>
    marketplace.toLowerCase().includes(marketplaceSearchTerm.toLowerCase())
  )

  // Mock data processing options
  const dataProcessingOptions = [
    "Kunden können ein Kundenkonto anlegen",
    "Wirtschaftliche Analysen und Marktforschung",

  ]

  // Filter data processing options based on search term
  const filteredDataProcessingOptions = dataProcessingOptions.filter(option =>
    option.toLowerCase().includes(dataProcessingSearchTerm.toLowerCase())
  )

  return (
    <div className="p-8 space-y-12">
      <div className="space-y-4 bg-muted p-6 rounded-lg shadow">
        <Label className="text-lg font-semibold">Setzen Sie Zahlungsdienstleister oder andere Dienstleister im Rahmen des Zahlungsverfahrens ein (z. B. PayPal, Sofortüberweisung oder "Point of Sale"-Zahlungsterminals)?</Label>
        <p className="text-sm text-blue-600 underline cursor-pointer mb-4">(Erläuterungen anzeigen)</p>

        <div className="flex gap-4">
          <Button
            variant="default"
            className={commercialService === true ? "bg-green-400 hover:bg-green-400" : ""}
            onClick={() => {
              setCommercialService(true)
              openDialog(
                "Commercial Services Enabled",
                "You've indicated that you offer commercial or business services. Please select the specific services below.",
              )
            }}
          >
            Ja
          </Button>
          <Button
            variant="default"
            className={commercialService === false ? "bg-orange-500 hover:bg-orange-500" : ""}
            onClick={() => {
              setCommercialService(false)
              setSelectedServices([])
              openDialog(
                "Commercial Services Disabled",
                "You've indicated that you don't offer commercial or business services. This section will be excluded from your privacy policy.",
              )
            }}
          >
            Nein
          </Button>
        </div>

        {commercialService === true && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4  ">
              {filteredServices
                .filter(service => showAllServices || selectedServices.includes(service))
                .map((service) => (
                  <Card

                    key={service}
                    onClick={() => {
                      toggleSelection(service, selectedServices, setSelectedServices)
                      openDialog(
                        "Service Selected",

                        `You've ${selectedServices.includes(service) ? "deselected" : "selected"} the service: ${service}`,
                      )
                    }}
                    className={`${selectedServices.includes(service) ? "border-primary bg-primary/5" : ""} cursor-pointer hover:border-primary/50 transition-colors`}
                  >
                    <CardContent className="p-4">{service}</CardContent>
                  </Card>
                ))}
            </div>

            <div className="flex items-center gap-2 mt-4 pt-2 border-t border-gray-200">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search services..."
                  className="pl-8"
                  value={serviceSearchTerm}
                  onChange={(e) => setServiceSearchTerm(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                className="whitespace-nowrap bg-blue-100 hover:bg-blue-200"
                onClick={() => setShowAllServices(!showAllServices)}
              >
                {showAllServices ? "Show Selected" : "Show All"}
              </Button>

            </div>
            <Button className="w-full bg-blue-100 text-black hover:bg-blue-200 shadow-md">
              Vorschau anzeigen
            </Button>
          </>
        )}
      </div>

   

    

      {/* Global Dialog */}
     
    </div>
  )
}