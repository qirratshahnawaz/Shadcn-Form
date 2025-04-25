// NewsletterForm.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Search } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

export default function Step16() {
  const [sendNewsletter, setSendNewsletter] = useState(false)
  const [sendAdvertising, setSendAdvertising] = useState(false)
  const [newsletterContent, setNewsletterContent] = useState("")

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogContent, setDialogContent] = useState({
    title: "",
    description: "",
  })

  const serviceProviders = [
    { name: "CleverReach", id: "cleverreach" },
    { name: "Facebook Messenger Broadcasts", id: "facebook" },
    { name: "GetResponse", id: "getresponse" },
    { name: "HubSpot Email Marketing", id: "hubspot" },
    { name: "CookiTip", id: "cookitip" },
    { name: "Mailchimp", id: "mailchimp" },
    { name: "Mailjet", id: "mailjet" },
    { name: "SendinBlue", id: "sendinblue" },
  ]

  const newsletterOptions = [
    { name: "Newsletter are prerequisite for free services", id: "prerequisite" },
    { name: "Sending status via SMS", id: "sms" },
  ]

  const openDialog = (title: string, description: string) => {
    setDialogContent({ title, description })
    setDialogOpen(true)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 bg-gray-50 p-4">
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-2">Do you send a newsletter or similar types of electronic messages?</p>
          <p
            className="text-xs text-blue-600 mb-2 cursor-pointer"
            onClick={() =>
              openDialog(
                "Newsletter Explanation",
                "Newsletters and similar electronic messages often involve collecting and processing personal data. This requires specific privacy policy provisions to comply with data protection regulations.",
              )
            }
          >
            [Show explanations]
          </p>

          <div className="flex space-x-2">
            <Button
              variant={sendNewsletter ? "default" : "outline"}
              className={`bg-${sendNewsletter ? "green-500" : "gray-200"} hover:bg-${sendNewsletter ? "green-600" : "gray-300"} text-${sendNewsletter ? "white" : "black"} w-16 h-8`}
              onClick={() => {
                setSendNewsletter(true)
                openDialog(
                  "Newsletter Enabled",
                  "You've indicated that you send newsletters or similar electronic messages. This will be included in your privacy policy.",
                )
              }}
            >
              ja
            </Button>
            <Button
              variant={!sendNewsletter ? "default" : "outline"}
              className={`bg-${!sendNewsletter ? "gray-200" : "gray-200"} hover:bg-${!sendNewsletter ? "gray-300" : "gray-300"} text-black w-16 h-8`}
              onClick={() => {
                setSendNewsletter(false)
                openDialog(
                  "Newsletter Disabled",
                  "You've indicated that you don't send newsletters or similar electronic messages. This section will be excluded from your privacy policy.",
                )
              }}
            >
              nein
            </Button>
          </div>
        </div>

        {sendNewsletter && (
          <>
            <div>
              <p className="text-xs mb-2">
                Please provide the content of your newsletter or other communications (or, if applicable, use our
                example):
              </p>
              <Textarea
                value={newsletterContent}
                onChange={(e) => setNewsletterContent(e.target.value)}
                placeholder="Informationen zu uns, unseren Leistungen, Aktionen und Angeboten."
                className="min-h-24 w-full border border-gray-300"
              />
            </div>

            <div>
              <p className="text-xs mb-4">Please select the following options if they apply to your newsletter:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {newsletterOptions.map((option) => (
                  <Card
                    key={option.id}
                    className="p-4 bg-gray-200 hover:bg-gray-300 cursor-pointer text-center flex items-center justify-center h-24"
                    onClick={() =>
                      openDialog(
                        "Option Selected",
                        `You've selected the option: ${option.name}. This will be included in your privacy policy.`,
                      )
                    }
                  >
                    <p className="text-xs">{option.name}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs mb-4">If you use a shipping service provider, please select it:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {serviceProviders.map((provider) => (
                  <Card
                    key={provider.id}
                    className="p-4 bg-gray-200 hover:bg-gray-300 cursor-pointer text-center flex items-center justify-center h-16"
                    onClick={() =>
                      openDialog(
                        "Provider Selected",
                        `You've selected the provider: ${provider.name}. This will be included in your privacy policy.`,
                      )
                    }
                  >
                    <p className="text-xs">{provider.name}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between bg-blue-50 p-2 rounded">
              <div className="text-xs">Vorrat Premium: Aus über 2.100 weiteren Modulen auswählen</div>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => openDialog("Search", "Search for specific modules to include in your privacy policy.")}
                >
                  <Search className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="link"
                  className="text-blue-600 text-xs"
                  onClick={() =>
                    openDialog(
                      "All Providers",
                      "View all available service providers. Premium users have access to over 2,100 additional modules.",
                    )
                  }
                >
                  Show all
                </Button>
              </div>
            </div>

            <div>
              <Button
                variant="link"
                className="text-blue-600 text-xs p-0"
                onClick={() =>
                  openDialog(
                    "Newsletter Preview",
                    "This preview shows how the newsletter section will appear in your privacy policy.",
                  )
                }
              >
                Show preview
              </Button>
            </div>
          </>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-2">
            Do you send advertising messages via email or post, or do you use the telephone or fax for these purposes?
          </p>
          <p
            className="text-xs text-blue-600 mb-2 cursor-pointer"
            onClick={() =>
              openDialog(
                "Advertising Messages Explanation",
                "Advertising messages via email, post, telephone, or fax often involve collecting and processing personal data. This requires specific privacy policy provisions to comply with data protection regulations.",
              )
            }
          >
            [Show explanations]
          </p>

          <div className="flex space-x-2">
            <Button
              variant={sendAdvertising ? "default" : "outline"}
              className={`bg-${sendAdvertising ? "green-500" : "gray-200"} hover:bg-${sendAdvertising ? "green-600" : "gray-300"} text-${sendAdvertising ? "white" : "black"} w-16 h-8`}
              onClick={() => {
                setSendAdvertising(true)
                openDialog(
                  "Advertising Enabled",
                  "You've indicated that you send advertising messages. This will be included in your privacy policy.",
                )
              }}
            >
              ja
            </Button>
            <Button
              variant={!sendAdvertising ? "default" : "outline"}
              className={`bg-${!sendAdvertising ? "gray-200" : "gray-200"} hover:bg-${!sendAdvertising ? "gray-300" : "gray-300"} text-black w-16 h-8`}
              onClick={() => {
                setSendAdvertising(false)
                openDialog(
                  "Advertising Disabled",
                  "You've indicated that you don't send advertising messages. This section will be excluded from your privacy policy.",
                )
              }}
            >
              nein
            </Button>
          </div>
        </div>

        {sendAdvertising && (
          <>
            <div className="flex items-center justify-between bg-blue-50 p-2 rounded">
              <div className="text-xs">Vorrat Premium: Aus über 2.100 weiteren Modulen auswählen</div>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => openDialog("Search", "Search for specific modules to include in your privacy policy.")}
                >
                  <Search className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="link"
                  className="text-blue-600 text-xs"
                  onClick={() =>
                    openDialog(
                      "All Options",
                      "View all available advertising options. Premium users have access to over 2,100 additional modules.",
                    )
                  }
                >
                  Show all
                </Button>
              </div>
            </div>

            <div>
              <Button
                variant="link"
                className="text-blue-600 text-xs p-0"
                onClick={() =>
                  openDialog(
                    "Advertising Preview",
                    "This preview shows how the advertising section will appear in your privacy policy.",
                  )
                }
              >
                Show preview
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
