"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lock, Plus, Minus } from "lucide-react"
import Step1 from "./Steps/Step1"
import Step2 from "./Steps/Step2"
import Step3 from "./Steps/Step3"
import Image from "next/image"
import Step5 from "./Steps/Step5"
import icon from "@/public/i.png"
import calculator from "@/public/calculator.png"
import rank from "@/public/thumbs.png"
import headphone from "@/public/headphone (2).png"
import trophy from "@/public/trophy.png"
import profile from "@/public/profile.png"
import cookie from "@/public/cookie.png"
import credit from "@/public/credit.png"
import email from "@/public/email.png"
import euro from "@/public/euro.png"
import persons from "@/public/persons.png"
import Step8 from "./Steps/Step8"
import Step9 from "./Steps/Step9"
import Step10 from "./Steps/Step10"
import Step11 from "./Steps/Step11"
import { Step12 } from "./Steps/Step12"
import Ad from "@/public/Add.png"
import mouse from "@/public/mouse.png"
import dashboard from "@/public/dashboard.png"
import msg from "@/public/msg.png"
import wp from "@/public/wp.png"
import Step13 from "./Steps/Step13"
import Step14 from "./Steps/Steps14"
import Step15 from "./Steps/Step15"
import Step16 from "./Steps/Step16"
import Step17 from "./Steps/Step17"
import tool from "@/public/tool.png"
import drawer from "@/public/drawer.png"
import bars from "@/public/bars.png"
import welcome from "@/public/welcome.png"

interface ExpandedSections {
  quickSelection: boolean
  contactInfo: boolean
  countrySelection: boolean
  preamble: boolean
  inform: boolean
  persons: boolean
  euro: boolean
  calculator: boolean
  rank: boolean
  cookie: boolean
  credit: boolean
  headphone: boolean
  trophy: boolean
  msg: boolean
  profile: boolean
  mouse: boolean
  wp: boolean
  thumbs: boolean
  i: boolean
  Add: boolean
  dashboard: boolean
  email: boolean
  tool: boolean
  drawer: boolean
}

function App() {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    quickSelection: false,
    contactInfo: false,
    countrySelection: false,
    preamble: false,
    inform: false,
    persons: false,
    euro: false,
    calculator: false,
    rank: false,
    cookie: false,
    credit: false,
    headphone: false,
    trophy: false,
    msg: false,
    profile: false,
    mouse: false,
    wp: false,
    thumbs: false,
    i: false,
    Add: false,
    dashboard: false,
    email: false,
    tool: false,
    drawer: false,
  })

  const toggleSection = (section: keyof ExpandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 w-full">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-12 sm:h-16">
            <a href="#" className="flex items-center">
              <Lock className="h-8 w-8 text-yellow-400" />
              <div className="ml-2">
                <span className="font-bold text-gray-800">Shadcn</span>
                <span className="font-bold text-gray-800">Form</span>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content*/}
      <main className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-3xl">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Shadcn Form</h1>

        <div className="mb-6">
          <a href="#" className="text-blue-500 hover:underline flex items-center">
            Wünschen Sie eine Tour?
            <div className="ml-2 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-500">▶</span>
            </div>
          </a>
        </div>

        {/* Step 1 */}
        <div className="mb-6">
          <div className="bg-yellow-500 py-3 sm:py-4 px-4 sm:px-6 font-bold text-white">Schritt 1: Schnellauswahl</div>
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={bars || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Allgemeine Angaben: Betroffenenrechte, Rechtsgrundlagen, Datentransfers, Löschung, etc.</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("quickSelection")}
                >
                  {expandedSections.quickSelection ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.quickSelection && <Step1 />}
        </div>

        {/* Step 2 */}
        <div className="mb-6">
          <div className="bg-yellow-500 py-3 sm:py-4 px-4 sm:px-6 font-bold text-white">
            Schritt 2: Individualisierung und Feinauswahl
          </div>

          {/* Contact Information Section */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={welcome || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Allgemeine Angaben: Betroffenenrechte, Rechtsgrundlagen, Datentransfers, Löschung, etc.</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("contactInfo")}
                >
                  {expandedSections.contactInfo ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.contactInfo && <Step2 />}

          {/* Country Selection Section */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={icon || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Allgemeine Angaben: Betroffenenrechte, Rechtsgrundlagen, Datentransfers, Löschung, etc.</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("countrySelection")}
                >
                  {expandedSections.countrySelection ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.countrySelection && <Step3 />}

          {/* Preamble Section */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={icon || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Allgemeine Angaben: Betroffenenrechte, Rechtsgrundlagen, Datentransfers, Löschung, etc.</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("preamble")}
                >
                  {expandedSections.preamble ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.preamble && <Step5 />}

          {/* inform */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={icon || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Allgemeine Angaben: Betroffenenrechte, Rechtsgrundlagen, Datentransfers, Löschung, etc.</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("inform")}
                >
                  {expandedSections.inform ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.inform && <Step5 />}
          {/*persons  */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={persons || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Vereine, Parteien, NGOs (Verarbeitung nach Satzung/Geschäftsplan).</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("persons")}
                >
                  {expandedSections.persons ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.persons && <Step8 />}

          {/* euro */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={euro || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Vereine, Parteien, NGOs (Verarbeitung nach Satzung/Geschäftsplan).</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("euro")}
                >
                  {expandedSections.euro ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.euro && <Step9 />}

          {/* calculator  */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={calculator || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Vereine, Parteien, NGOs (Verarbeitung nach Satzung/Geschäftsplan).</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("calculator")}
                >
                  {expandedSections.calculator ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.calculator && <Step9 />}

          {/* thumbs */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={rank || "/placeholder.svg"}
                      width={30}
                      height={30}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Vereine, Parteien, NGOs (Verarbeitung nach Satzung/Geschäftsplan).</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("thumbs")}
                >
                  {expandedSections.thumbs ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.thumbs && <Step9 />}

          {/* cookie */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={cookie || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Vereine, Parteien, NGOs (Verarbeitung nach Satzung/Geschäftsplan).</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("cookie")}
                >
                  {expandedSections.cookie ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.cookie && <Step11 />}

          {/* credit */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={credit || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Vereine, Parteien, NGOs (Verarbeitung nach Satzung/Geschäftsplan).</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("credit")}
                >
                  {expandedSections.credit ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {expandedSections.credit && <Step10 />}

          {/* headphone */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={headphone || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Vereine, Parteien, NGOs (Verarbeitung nach Satzung/Geschäftsplan).</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("headphone")}
                >
                  {expandedSections.headphone ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.headphone && <Step13 />}

          {/* trophy */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={trophy || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Vereine, Parteien, NGOs (Verarbeitung nach Satzung/Geschäftsplan).</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("trophy")}
                >
                  {expandedSections.trophy ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.trophy && <Step14 />}

          {/* email */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={email || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Vereine, Parteien, NGOs (Verarbeitung nach Satzung/Geschäftsplan).</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("email")}
                >
                  {expandedSections.email ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.email && <Step16 />}
          {/*profile  */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={profile || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Vereine, Parteien, NGOs (Verarbeitung nach Satzung/Geschäftsplan).</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("profile")}
                >
                  {expandedSections.profile ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.profile && <Step15 />}

          {/* wp */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={wp || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Vereine, Parteien, NGOs (Verarbeitung nach Satzung/Geschäftsplan).</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("wp")}
                >
                  {expandedSections.wp ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.wp && <Step12 />}

          {/*   AD */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={Ad || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Vereine, Parteien, NGOs (Verarbeitung nach Satzung/Geschäftsplan).</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("Add")}
                >
                  {expandedSections.Add ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.Add && <Step17 />}

          {/* dashboard */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={dashboard || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Vereine, Parteien, NGOs (Verarbeitung nach Satzung/Geschäftsplan).</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("dashboard")}
                >
                  {expandedSections.dashboard ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.dashboard && <Step17 />}

          {/* mouse */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={mouse || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Vereine, Parteien, NGOs (Verarbeitung nach Satzung/Geschäftsplan).</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("mouse")}
                >
                  {expandedSections.mouse ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.mouse && <Step16 />}

          {/* msg */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={msg || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Vereine, Parteien, NGOs (Verarbeitung nach Satzung/Geschäftsplan).</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("msg")}
                >
                  {expandedSections.msg ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.msg && <Step12 />}

          {/* toool */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w-30 h-14 relative">
                    <Image
                      src={tool || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Vereine, Parteien, NGOs (Verarbeitung nach Satzung/Geschäftsplan).</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("tool")}
                >
                  {expandedSections.tool ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.tool && <Step12 />}

          {/* drawer */}
          <Card className="mt-4 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row h-auto sm:h-16">
                <div className="p-2 m-2 sm:m-4 bg-gray-100 flex items-center justify-center">
                  <div className="w- h-14 relative">
                    <Image
                      src={drawer || "/placeholder.svg"}
                      width={60}
                      height={60}
                      alt="Icon"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-grow bg-green-600 text-white flex items-center px-4 py-3 sm:py-0 text-sm sm:text-base">
                  <span>Vereine, Parteien, NGOs (Verarbeitung nach Satzung/Geschäftsplan).</span>
                </div>
                <Button
                  className="m-0 rounded-none bg-blue-600 hover:bg-green-700 text-white w-14 h-18 p-0 flex items-center justify-center"
                  onClick={() => toggleSection("drawer")}
                >
                  {expandedSections.drawer ? <Minus className="h-8 w-8" /> : <Plus className="h-6 w-6" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded preamble section */}
          {expandedSections.drawer && <Step10 />}
        </div>
      </main>
    </div>
  )
}

export default App
