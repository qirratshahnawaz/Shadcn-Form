"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

const Step18: React.FC = () => {
  const [useThirdPartyContent, setUseThirdPartyContent] = useState<boolean>(false)
  const [useThirdPartyServices, setUseThirdPartyServices] = useState<boolean>(false)
  const [selectedContentProviders, setSelectedContentProviders] = useState<string[]>([])
  const [selectedServiceProviders, setSelectedServiceProviders] = useState<string[]>([])
  const [searchTerm1, setSearchTerm1] = useState<string>("")
  const [searchTerm2, setSearchTerm2] = useState<string>("")

  // Dialog states
  const [dialogContent, setDialogContent] = useState<{
    title: string
    description: string
  }>({ title: "", description: "" })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const contentProviders = [
    { id: "scripts", name: "Integration of third-party software, scripts or iframe snippets (e.g. Clarity)" },
    { id: "facebook", name: "Facebook plugins and content" },
    { id: "google-fonts-domain", name: "Google Fonts (domain and cdn server)" },
    { id: "google-fonts-local", name: "Google Fonts (loaded from Google server)" },
    { id: "font-awesome", name: "Font Awesome (domain and cdn server)" },
    { id: "google-maps", name: "Google Maps" },
    { id: "instagram", name: "Instagram plugins and content" },
    { id: "linkedin", name: "LinkedIn plugins and content" },
    { id: "myfonts", name: "MyFonts" },
    { id: "openstreetmap", name: "OpenStreetMap" },
    { id: "pinterest", name: "Pinterest plugins and content" },
    { id: "spotify", name: "Spotify" },
    { id: "twitter", name: "X (formerly Twitter) plugins and content" },
    { id: "youtube-videos", name: "YouTube videos" },
    { id: "youtube-no-cookie", name: 'YouTube videos ("no-cookie")' },
    { id: "vimeo", name: "Vimeo plugins and buttons" },
    { id: "vimeo-player", name: "Vimeo video player" },
  ]

  const serviceProviders = [
    { id: "easyname", name: "Easyname" },
    { id: "doodle", name: "Doodle" },
    { id: "getnotify", name: "GetNotify" },
    { id: "wetransfer", name: "WeTransfer" },
  ]

  const toggleContentProvider = (providerId: string) => {
    if (selectedContentProviders.includes(providerId)) {
      setSelectedContentProviders(selectedContentProviders.filter((id) => id !== providerId))
    } else {
      setSelectedContentProviders([...selectedContentProviders, providerId])
    }
  }

  const toggleServiceProvider = (providerId: string) => {
    if (selectedServiceProviders.includes(providerId)) {
      setSelectedServiceProviders(selectedServiceProviders.filter((id) => id !== providerId))
    } else {
      setSelectedServiceProviders([...selectedServiceProviders, providerId])
    }
  }

  const filteredContentProviders = contentProviders.filter((provider) =>
    provider.name.toLowerCase().includes(searchTerm1.toLowerCase()),
  )

  const filteredServiceProviders = serviceProviders.filter((provider) =>
    provider.name.toLowerCase().includes(searchTerm2.toLowerCase()),
  )

  const selectAllContentProviders = () => {
    setSelectedContentProviders(contentProviders.map((provider) => provider.id))
    openDialog(
      "All Content Providers Selected",
      "You have selected all available content providers. You can deselect individual providers if needed.",
    )
  }

  const selectAllServiceProviders = () => {
    setSelectedServiceProviders(serviceProviders.map((provider) => provider.id))
    openDialog(
      "All Service Providers Selected",
      "You have selected all available service providers. You can deselect individual providers if needed.",
    )
  }

  const openDialog = (title: string, description: string) => {
    setDialogContent({ title, description })
    setIsDialogOpen(true)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-8 bg-gray-200 mt-4">
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">
            Do you integrate third-party content, such as social media, plugins, YouTube videos, fonts, etc., into your
            online offering?
          </h2>
          <p
            className="text-sm text-gray-500 cursor-pointer"
            onClick={() =>
              openDialog(
                "Third-Party Content Explanation",
                "Third-party content includes elements like social media plugins, embedded videos, fonts, maps, and other content that is loaded from external servers. This can have privacy implications as user data might be shared with these third parties.",
              )
            }
          >
            (Show explanation)
          </p>
        </div>

        <div className="flex items-center mb-6 gap-4">
          <Button
            variant={useThirdPartyContent ? "default" : "outline"}
            className="w-20"
            onClick={() => {
              setUseThirdPartyContent(true)
              openDialog(
                "Third-Party Content Enabled",
                "You've enabled third-party content integration. Please select the specific providers below.",
              )
            }}
          >
            ja
          </Button>
          <Button
            variant={!useThirdPartyContent ? "default" : "outline"}
            className="w-20"
            onClick={() => {
              setUseThirdPartyContent(false)
              openDialog(
                "Third-Party Content Disabled",
                "You've disabled third-party content integration. This section will be excluded from your privacy policy.",
              )
            }}
          >
            nein
          </Button>
        </div>

        {useThirdPartyContent && (
          <>
            <p className="mb-4">Please select the providers of the external content:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {filteredContentProviders.map((provider) => (
                <Card
                  key={provider.id}
                  className={`p-4 cursor-pointer hover:bg-gray-100 transition-colors ${
                    selectedContentProviders.includes(provider.id) ? "bg-gray-200" : "bg-gray-100"
                  }`}
                  onClick={() => toggleContentProvider(provider.id)}
                >
                  <div className="text-xs text-center h-full flex items-center justify-center">{provider.name}</div>
                </Card>
              ))}
            </div>

            <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-1/2 flex items-center gap-2">
                <Label>Vorteil Premium: Aus über 2.000 weiteren Modulen auswählen</Label>
                <Switch
                  checked={false}
                  onCheckedChange={() => {
                    openDialog(
                      "Premium Feature",
                      "This premium feature allows you to access over 2,000 additional modules. Please upgrade your plan to use this feature.",
                    )
                  }}
                />
              </div>
              <Button
                variant="link"
                onClick={() => {
                  selectAllContentProviders()
                }}
                className="text-blue-600"
              >
                Show all
              </Button>
            </div>

            <div className="mt-4">
              <Button
                variant="outline"
                className="bg-blue-50 text-blue-600 hover:bg-blue-100"
                onClick={() =>
                  openDialog(
                    "Content Provider Preview",
                    "This preview shows how the selected content providers will appear in your privacy policy.",
                  )
                }
              >
                Show preview
              </Button>
            </div>
          </>
        )}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">
            Do you use third-party services, platforms, and software for organizational, administrative, planning, or
            other support tools?
          </h2>
          <p
            className="text-sm text-gray-500 cursor-pointer"
            onClick={() =>
              openDialog(
                "Third-Party Services Explanation",
                "Third-party services include tools and platforms used for organizational, administrative, or planning purposes. These services may process user data according to their own privacy policies.",
              )
            }
          >
            (Show explanation)
          </p>
        </div>

        <div className="flex items-center mb-6 gap-4">
          <Button
            variant={useThirdPartyServices ? "default" : "outline"}
            className="w-20"
            onClick={() => {
              setUseThirdPartyServices(true)
              openDialog(
                "Third-Party Services Enabled",
                "You've enabled third-party services. Please select the specific service providers below.",
              )
            }}
          >
            ja
          </Button>
          <Button
            variant={!useThirdPartyServices ? "default" : "outline"}
            className="w-20"
            onClick={() => {
              setUseThirdPartyServices(false)
              openDialog(
                "Third-Party Services Disabled",
                "You've disabled third-party services. This section will be excluded from your privacy policy.",
              )
            }}
          >
            nein
          </Button>
        </div>

        {useThirdPartyServices && (
          <>
            <p className="mb-4">Please select one of the service providers, platforms or tools:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredServiceProviders.map((provider) => (
                <Card
                  key={provider.id}
                  className={`p-4 cursor-pointer hover:bg-gray-100 transition-colors ${
                    selectedServiceProviders.includes(provider.id) ? "bg-gray-200" : "bg-gray-100"
                  }`}
                  onClick={() => toggleServiceProvider(provider.id)}
                >
                  <div className="text-xs text-center h-full flex items-center justify-center">{provider.name}</div>
                </Card>
              ))}
            </div>

            <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-1/2 flex items-center gap-2">
                <Label>Vorteil Premium: Aus über 2.000 weiteren Modulen auswählen</Label>
                <Switch
                  checked={false}
                  onCheckedChange={() => {
                    openDialog(
                      "Premium Feature",
                      "This premium feature allows you to access over 2,000 additional modules. Please upgrade your plan to use this feature.",
                    )
                  }}
                />
              </div>
              <Button
                variant="link"
                onClick={() => {
                  selectAllServiceProviders()
                }}
                className="text-blue-600"
              >
                Show all
              </Button>
            </div>

            <div className="mt-4">
              <Button
                variant="outline"
                className="bg-blue-50 text-blue-600 hover:bg-blue-100"
                onClick={() =>
                  openDialog(
                    "Service Provider Preview",
                    "This preview shows how the selected service providers will appear in your privacy policy.",
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
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogContent.title}</DialogTitle>
            <DialogDescription>{dialogContent.description}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Step18
