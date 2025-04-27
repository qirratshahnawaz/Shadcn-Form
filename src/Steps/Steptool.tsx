"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Steptool() {
  const [showSocialDetails, setShowSocialDetails] = useState(false);
  const [showServiceDetails, setShowServiceDetails] = useState(false);

  const socialServices = [
    { id: 1, name: "ShareThis und Cookie-Hinweis (3rd-Party)" },
    { id: 2, name: "Facebook Plugins und Inhalte" },
    { id: 3, name: "Google YouTube, Medieneinbindungen" },
    { id: 4, name: "Google Fonts (Keine Medieneinbindung)" },
    { id: 5, name: "Font Awesome (Keine Medieneinbindungen)" },
    { id: 6, name: "Google Maps" },
    { id: 7, name: "Instagram Plugins und Inhalte" },
    { id: 8, name: "LinkedIn Plugins und Inhalte" },
    { id: 9, name: "MyFonts" },
    { id: 10, name: "OpenStreetMap" },
    { id: 11, name: "Pinterest Plugins und Inhalte" },
    { id: 12, name: "Shariff" },
    { id: 13, name: "Tiktok/Musically/Twitter-Plugins und Inhalte" },
    { id: 14, name: "YouTube Videos" },
    { id: 15, name: "YouTube-Videos, Playlisten und iFrames" },
    { id: 16, name: "Prezi Plugins und Diashows" },
    { id: 17, name: "Vimeo Videoplayer" },
  ];

  const organizationServices = [
    { id: 1, name: "Basecamp" },
    { id: 2, name: "Doodle" },
    { id: 3, name: "GoFundMe" },
    { id: 4, name: "WeTransfer" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-8 bg-gray-100">
      {/* Social Media Section */}
      <div className="bg-white p-6 border rounded-md shadow-sm">
        <div className="mb-4">
          <h2 className="text-lg font-medium mb-1">
            Binden Sie fremde Inhalte, wie z.B. Social, Plugins, Youtube-Videos, Schriftarten, etc. in Ihr Onlineangebot ein?
          </h2>
          <p className="text-sm text-gray-500">Einstellungen anzeigen</p>
        </div>

        <div className="flex gap-2 mb-6">
          <Button 
            variant={showSocialDetails ? "default" : "outline"} 
            className={`${showSocialDetails ? "bg-green-500 hover:bg-green-600" : "bg-gray-200 hover:bg-gray-300"} text-white px-6`}
            onClick={() => setShowSocialDetails(true)}
          >
            ja
          </Button>
          <Button 
            variant={!showSocialDetails ? "default" : "outline"} 
            className="bg-orange-500 hover:bg-orange-400 text-white px-6"
            onClick={() => setShowSocialDetails(false)}
          >
            nein
          </Button>
        </div>

        {showSocialDetails && (
          <>
            <p className="text-sm text-gray-500 mb-4">Bitte wählen Sie die Art der fremden Inhalte aus:</p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {socialServices.map((service) => (
                <Card key={service.id} className="bg-gray-200 hover:bg-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <p className="text-xs text-center">{service.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-4 p-4 bg-gray-100 rounded flex items-center gap-2">
              <p className="text-sm mr-2">Vorsicht! Premium Auswahl in 0.000 weiteren Modulen ausschalten</p>
              <Search className="h-4 w-4 text-gray-500" />
              <Button variant="link" className="text-blue-500 ml-auto text-sm">Alle anzeigen</Button>
            </div>

            <Button className="w-full bg-blue-50 text-blue-500 hover:bg-blue-100">
              Vorschlag anzeigen
            </Button>
          </>
        )}
      </div>

      {/* Organization Services Section */}
      <div className="bg-white p-6 border rounded-md shadow-sm">
        <div className="mb-4">
          <h2 className="text-lg font-medium mb-1">
            Setzen Sie Dienstleistungen, Plattformen und Software anderer Anbieter zu Zwecken der Organisation, Verwaltung, Planung oder sonst als Hilfswerkzeuge ein?
          </h2>
          <p className="text-sm text-gray-500">Erläuterungen anzeigen</p>
        </div>

        <div className="flex gap-2 mb-6">
          <Button 
            variant={showServiceDetails ? "default" : "outline"} 
            className={`${showServiceDetails ? "bg-green-500 hover:bg-green-600" : "bg-gray-200 hover:bg-gray-300"} text-white px-6`}
            onClick={() => setShowServiceDetails(true)}
          >
            ja
          </Button>
          <Button 
            variant={!showServiceDetails ? "default" : "outline"} 
            className="bg-gray-300 hover:bg-gray-400 text-white px-6"
            onClick={() => setShowServiceDetails(false)}
          >
            nein
          </Button>
        </div>

        {showServiceDetails && (
          <>
            <p className="text-sm text-gray-500 mb-4">Bitte wählen Sie einen der Dienstleister, Plattformen oder Tools aus:</p>

            <div className="grid grid-cols-4 gap-4 mb-6">
              {organizationServices.map((service) => (
                <Card key={service.id} className="bg-gray-200 hover:bg-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <p className="text-xs text-center">{service.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-4 p-4 bg-gray-100 rounded flex items-center gap-2">
              <p className="text-sm mr-2">Vorteil Premium: Aus über 2.300 weiteren Modulen auswählen</p>
              <Search className="h-4 w-4 text-gray-500" />
              <Button variant="link" className="text-blue-500 ml-auto text-sm">Alle anzeigen</Button>
            </div>

            <Button className="w-full bg-blue-50 text-blue-500 hover:bg-blue-100">
              Vorschau anzeigen
            </Button>
          </>
        )}
      </div>
    </div>
  );
}