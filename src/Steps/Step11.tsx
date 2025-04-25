"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Pencil } from "lucide-react";

export default function Step11() {
  const [showExplanations, setShowExplanations] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showCookieOptions, setShowCookieOptions] = useState(true);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (option === "nein") {
      setShowCookieOptions(false);
    } else {
      setShowCookieOptions(true);
    }
  };

  return (
    <div className="bg-gray-100 m-3 p-6 rounded-md max-w-2xl mx-auto">
      <div className="mb-4">
        <h2 className="text-base font-medium mb-1">
          Do you use cookies (or integrate tools or content into your online offering that use cookies)?
        </h2>
        <button
          onClick={() => setShowExplanations(!showExplanations)}
          className="text-blue-600 text-sm hover:underline flex items-center"
        >
          {showExplanations ? "Hide explanations" : "Show explanations"}
        </button>
      </div>

      {showExplanations && (
        <div className="bg-blue-50 p-3 mb-4 text-sm rounded">
          <p>
            Explanations about cookie usage and requirements would appear here...
          </p>
        </div>
      )}

      <div className="flex mb-6 gap-2">
        <Button
          variant={selectedOption === "ja" ? "default" : "outline"}
          className={`w-20 ${selectedOption === "ja" ? "bg-green-500 hover:bg-green-600" : "bg-gray-200"}`}
          onClick={() => handleOptionClick("ja")}
        >
          ja
        </Button>
        <Button
          variant={selectedOption === "nein" ? "default" : "outline"}
          className={`w-20 ${selectedOption === "nein" ? "" : "bg-gray-200"}`}
          onClick={() => handleOptionClick("nein")}
        >
          nein
        </Button>
      </div>

      {showCookieOptions && (
        <>
          <p className="text-sm mb-4">
            Please indicate whether you will obtain consent (option) before cookies are used and, if used, select the cookie management solution you use:
          </p>

          <div className="grid grid-cols-3 gap-2 mb-6">
            <Card 
              className={`p-4 flex items-center justify-center cursor-pointer text-center ${
                selectedOption === "banner" ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleOptionClick("banner")}
            >
              <span className="text-sm">
                Use of consent management ("cookie banner")
              </span>
            </Card>
            
            <Card 
              className={`p-4 flex items-center justify-center cursor-pointer text-center ${
                selectedOption === "borlabsCookie" ? "bg-gray-200" : "bg-gray-200"
              }`}
              onClick={() => handleOptionClick("borlabsCookie")}
            >
              <span className="text-sm">BorlabsCookie</span>
            </Card>
            
            <Card 
              className={`p-4 flex items-center justify-center cursor-pointer text-center ${
                selectedOption === "compliance" ? "bg-gray-200" : "bg-gray-200"
              }`}
              onClick={() => handleOptionClick("compliance")}
            >
              <span className="text-sm">Compliance</span>
            </Card>
          </div>

          <p className="text-sm mb-2">
            If you use a cookie management solution, you can enter a link to its settings and/or opt-out options here (e.g. URL or a so-called [shortcode] that is automatically converted into a button/link by your software):
          </p>

          <div className="relative mb-6">
            <Textarea className="min-h-24 resize-none pr-10" />
            <button className="absolute bottom-2 right-2 text-gray-500">
              <Pencil size={20} />
            </button>
          </div>

          <div className="bg-white p-3 border rounded-md mb-4 flex justify-between items-center">
            <div className="text-sm">
              Vorteil: Premium-Aus über 2.300 weiteren Modulen auswählen
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="text-blue-600">
                Show all
              </Button>
            </div>
          </div>
        </>
      )}

      <Button variant="outline" size="sm" className="bg-gray-200">
        Show preview
      </Button>
    </div>
  );
}