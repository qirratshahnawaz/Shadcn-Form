"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

const services = [
  "Online shop, order forms, e-commerce and delivery",
  "Agency services",
  "Education and training services",
  "Craft services",
  "Project and development services (software, web design, etc.)",
  "Offering structures and platforms (Cloud, SaaS)",
  "Technical services (engineers, technicians)",
  "Therapeutic services",
  "Events and activities",
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

export default function Step9() {
  const [commercialService, setCommercialService] = useState<boolean | null>(null)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [processPersonalData, setProcessPersonalData] = useState<boolean | null>(null)
  const [offerGoods, setOfferGoods] = useState<boolean | null>(null)
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<string[]>([])

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

  return (
    <div className="p-8 space-y-12 mt-5">
      <div className="space-y-4 bg-muted p-6 rounded-lg shadow">
        <Label className="text-lg font-semibold">Do you offer commercial or business services?</Label>
        <div className="flex gap-4">
          <Button
            variant={commercialService === true ? "default" : "outline"}
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
            variant={commercialService === false ? "destructive" : "outline"}
            onClick={() => {
              setCommercialService(false)
              openDialog(
                "Commercial Services Disabled",
                "You've indicated that you don't offer commercial or business services. This section will be excluded from your privacy policy.",
              )
            }}
          >
            Nein
          </Button>
        </div>

        {commercialService && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            {services.map((service) => (
              <Card
                key={service}
                onClick={() => {
                  toggleSelection(service, selectedServices, setSelectedServices)
                  openDialog(
                    "Service Selected",
                    `You've ${selectedServices.includes(service) ? "deselected" : "selected"} the service: ${service}`,
                  )
                }}
                className={selectedServices.includes(service) ? "border-primary cursor-pointer" : "cursor-pointer"}
              >
                <CardContent className="p-4">{service}</CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-4 bg-muted p-6 rounded-lg shadow">
        <Label className="text-lg font-semibold">
          Do you process personal data (customers, suppliers, third parties)?
        </Label>
        <div className="flex gap-4">
          <Button
            variant={processPersonalData === true ? "default" : "outline"}
            onClick={() => {
              setProcessPersonalData(true)
              openDialog(
                "Personal Data Processing Enabled",
                "You've indicated that you process personal data. Please select the specific data processing activities below.",
              )
            }}
          >
            Ja
          </Button>
          <Button
            variant={processPersonalData === false ? "destructive" : "outline"}
            onClick={() => {
              setProcessPersonalData(false)
              openDialog(
                "Personal Data Processing Disabled",
                "You've indicated that you don't process personal data. This section will be excluded from your privacy policy.",
              )
            }}
          >
            Nein
          </Button>
        </div>

        {processPersonalData && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <Card
              className="cursor-pointer"
              onClick={() =>
                openDialog(
                  "Customer Data Processing",
                  "This option covers the processing of customer data, including contact information, order history, and payment details.",
                )
              }
            >
              <CardContent className="p-4">Customer Data Processing</CardContent>
            </Card>
            <Card
              className="cursor-pointer"
              onClick={() =>
                openDialog(
                  "Supplier/Employee Data Processing",
                  "This option covers the processing of supplier and employee data, including contact information, contracts, and payment details.",
                )
              }
            >
              <CardContent className="p-4">Supplier/Employee Data Processing</CardContent>
            </Card>
          </div>
        )}
      </div>

      <div className="space-y-4 bg-muted p-6 rounded-lg shadow">
        <Label className="text-lg font-semibold">
          Do you offer your goods or services through third-party marketplaces?
        </Label>
        <div className="flex gap-4">
          <Button
            variant={offerGoods === true ? "default" : "outline"}
            onClick={() => {
              setOfferGoods(true)
              openDialog(
                "Third-Party Marketplaces Enabled",
                "You've indicated that you offer goods or services through third-party marketplaces. Please select the specific marketplaces below.",
              )
            }}
          >
            Ja
          </Button>
          <Button
            variant={offerGoods === false ? "destructive" : "outline"}
            onClick={() => {
              setOfferGoods(false)
              openDialog(
                "Third-Party Marketplaces Disabled",
                "You've indicated that you don't offer goods or services through third-party marketplaces. This section will be excluded from your privacy policy.",
              )
            }}
          >
            Nein
          </Button>
        </div>

        {offerGoods && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-4">
            {marketplaces.map((marketplace) => (
              <Card
                key={marketplace}
                onClick={() => {
                  toggleSelection(marketplace, selectedMarketplaces, setSelectedMarketplaces)
                  openDialog(
                    "Marketplace Selected",
                    `You've ${selectedMarketplaces.includes(marketplace) ? "deselected" : "selected"} the marketplace: ${marketplace}`,
                  )
                }}
                className={
                  selectedMarketplaces.includes(marketplace) ? "border-primary cursor-pointer" : "cursor-pointer"
                }
              >
                <CardContent className="p-4">{marketplace}</CardContent>
              </Card>
            ))}
          </div>
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
