"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface OptionProps {
  title: string
  subtitle?: string
}

const OptionCard = ({ title, subtitle }: OptionProps) => {
  return (
    <Card className="h-32 cursor-pointer hover:border-green-500 transition-colors">
      <CardContent className="flex flex-col justify-center items-center h-full text-center p-4">
        <p className="font-medium text-sm break-words">{title}</p>
        {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
      </CardContent>
    </Card>
  )
}

const FormSection = ({ 
  title, 
  description, 
  options,
  showYesNo = true
}: { 
  title: string, 
  description: string,
  options: OptionProps[],
  showYesNo?: boolean
}) => {
  const [selectedValue, setSelectedValue] = useState<"yes" | "no" | null>(null)

  return (
    <div className="mb-10 p-6 bg-gray-100 rounded-lg shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-semibold text-blue-800">{title}</h3>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
        
        {showYesNo && (
          <div className="flex gap-2">
            <Button 
              variant={selectedValue === "yes" ? "default" : "outline"} 
              className={`h-8 w-12 ${selectedValue === "yes" ? "bg-green-500 hover:bg-green-600" : ""}`}
              onClick={() => setSelectedValue("yes")}
            >
              Yes
            </Button>
            <Button 
              variant={selectedValue === "no" ? "default" : "outline"} 
              className={`h-8 w-12 ${selectedValue === "no" ? "bg-gray-200 hover:bg-gray-300 text-gray-800" : ""}`}
              onClick={() => setSelectedValue("no")}
            >
              No
            </Button>
          </div>
        )}
      </div>

      <p className="text-sm mb-4">Bieten Sie einen Blog (oder ein vergleichbares Publikationsmedium) an?</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {options.map((option, index) => (
          <OptionCard key={index} title={option.title} subtitle={option.subtitle} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Label className="text-xs text-gray-500">Single Partner Output (max 2,500 character) included in quotation</Label>
          <div className="flex items-center ml-2">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">?</span>
            </div>
          </div>
        </div>
        <Button variant="outline" size="sm" className="text-blue-600 border-blue-600">
          Show preview
        </Button>
      </div>
    </div>
  )
}

export function Step12() {
  return (
    <div className="container mx-auto py-8 px-4">
      <FormSection
        title="Registration function"
        description="Do you offer a registration function (e.g. within a platform, app or online forum)?"
        options={[
          { title: "Registration with email verification" },
          { title: "Registration with phone verification" },
          { title: "Login and profile with avatar" },
          { title: "Login and profile with dashboard" },
          { title: "User badges, roles and levels" },
          { title: "Additional verification methods" },
          { title: "Additional registration methods" }
        ]}
      />

      <FormSection
        title="Community features"
        description="Do you provide community features?"
        options={[
          { title: "User-generated content" },
          { title: "Users can vote on other users' content" },
          { title: "Message mailbox" },
          { title: "Rights management" },
          { title: "Content moderation" },
          { title: "Social features" }
        ]}
      />

      <FormSection
        title="Single sign-on login procedures"
        description="Do you offer single sign-on login procedures?"
        options={[
          { title: "Apple" },
          { title: "Facebook Login" },
          { title: "Google Sign-In" },
          { title: "Instagram Sign-In" },
          { title: "Microsoft Azure AD" },
          { title: "Snapchat" }, 
          { title: "Twitter" },
          { title: "Yahoo! Sign-In" }
        ]}
        showYesNo={true}
      />
    </div>
  )
}