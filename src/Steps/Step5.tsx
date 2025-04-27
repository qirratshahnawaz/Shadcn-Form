"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function Step5r() {
  const [showPreview, setShowPreview] = useState(false);

  const [options, setOptions] = useState({
    updateNotifications: false,
    informRights: false,
    includeGlossary: false,
    securityMeasures: false,
    dataSharing: false,
    onlineMarketplaces: false,
  });

  const toggleOption = (option: string) => {
    setOptions((prev) => ({
      ...prev,
      [option]: !prev[option as keyof typeof prev],
    }));
  };

  const marketplaces = [
    "avocadostore", "eBay", "ablefy (ehemals elopage)",
    "Etsy", "Folksy", "hood.de", "Indiegogo", "Kickstarter",
    "shopify", "Patreon", "Startnext", "Steady", "yatego"
  ];

  const securityOptions = [
    { id: "ip-anonymization", title: "Kürzung von IP-Adressen" },
    { id: "ssl-encryption", title: "Browser-Verschlüs-selung mittels TLS/SSL (https)" },
  ];

  const sharingOptions = [
    { id: "internal-sharing", title: "Datenaustausch innerhalb einer Organisation" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 mt-5 space-y-6">
      {/* Sections start here */}
      
      {/* General reusable block */}
      {[
        {
          label: "Möchten Sie auf mögliche Aktualisierungen der Datenschutzerklärung hinweisen?",
          optionKey: "updateNotifications",
        },
        {
          label: "Sollen die von der Verarbeitung betroffenen Personen über ihre Rechte belehrt werden?",
          optionKey: "informRights",
        },
        {
          label: "Soll die Datenschutzerklärung am Ende ein Glossar mit Begriffsdefinitionen enthalten?",
          optionKey: "includeGlossary",
        },
        {
          label: "Möchten Sie auf eingesetzte Sicherheitsmaßnahmen hinweisen?",
          optionKey: "securityMeasures",
        },
        {
          label: "Übermitteln Sie personenbezogene Daten an andere Unternehmen, Personen oder andere Empfänger?",
          optionKey: "dataSharing",
        },
        {
          label: "Bieten Sie Ihre Waren oder Leistungen über oder mittels von Online-Marktplätzen und -Plattformen Dritter an?",
          optionKey: "onlineMarketplaces",
        }
      ].map(({ label, optionKey }, idx) => (
        <Card key={idx} className="bg-gray-100">
          <CardContent className="p-6">
            <div className="mb-3">
              <p className="font-medium text-base sm:text-lg">{label}</p>
              <p className="text-sm text-blue-600 hover:underline cursor-pointer">
                (Erläuterungen anzeigen)
              </p>
            </div>

            {/* Responsive button group */}
            <div className="flex flex-wrap gap-2 mt-4">
              <Button
                className={`w-24 sm:w-28 ${options[optionKey as keyof typeof options] ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300 hover:bg-gray-400'}`}
                onClick={() => toggleOption(optionKey)}
              >
                ja
              </Button>
              <Button
                className={`w-24 sm:w-28 ${!options[optionKey as keyof typeof options] ? 'bg-gray-300 hover:bg-gray-400' : 'bg-gray-300 hover:bg-gray-400 text-gray-700'}`}
                onClick={() => toggleOption(optionKey)}
              >
                nein
              </Button>
            </div>

            {/* Specific extra content */}
            {optionKey === "informRights" && options.informRights && (
              <>
                <Button className="mt-4 bg-green-500 hover:bg-green-600 text-xs p-4 h-auto w-full sm:w-auto">
                  <div className="text-center">
                    <div>Rechte der betroffenen</div>
                    <div>Personen aus der DSGVO</div>
                  </div>
                </Button>

                <div className="mt-6">
                  <p className="text-sm mb-2">
                    Adresse der für Sie zuständigen Aufsichtsbehörde (optional):
                  </p>
                  <Textarea className="w-full h-24 border border-gray-300" />
                </div>
              </>
            )}

            {optionKey === "securityMeasures" && options.securityMeasures && (
              <div className="mt-4">
                <p className="text-sm mb-4">Wählen Sie Optionen:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {securityOptions.map((option) => (
                    <div
                      key={option.id}
                      className="p-4 flex items-center justify-center bg-gray-200 text-center h-24 cursor-pointer hover:bg-gray-300"
                    >
                      <span className="text-sm">{option.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {optionKey === "dataSharing" && options.dataSharing && (
              <div className="mt-4">
                <p className="text-sm mb-4">Wählen Sie Optionen:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {sharingOptions.map((option) => (
                    <div
                      key={option.id}
                      className="p-4 flex items-center justify-center bg-gray-200 text-center h-24 cursor-pointer hover:bg-gray-300"
                    >
                      <span className="text-sm">{option.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {optionKey === "onlineMarketplaces" && options.onlineMarketplaces && (
              <div className="mt-4">
                <p className="text-sm mb-4">Wählen Sie Anbieter:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {marketplaces.map((marketplace) => (
                    <div
                      key={marketplace}
                      className="p-4 flex items-center justify-center bg-gray-200 text-center h-24 cursor-pointer hover:bg-gray-300"
                    >
                      <span className="text-sm">{marketplace}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <Button
                    variant="outline"
                    className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center gap-2 w-full sm:w-auto"
                  >
                    <span>Vorteil Premium: 2.300 weitere Module</span>
                    <span className="text-lg">🔍</span>
                  </Button>
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-800 w-full sm:w-auto"
                  >
                    Alle anzeigen
                  </Button>
                </div>
              </div>
            )}

            {/* Preview button */}
            <Button
              variant="outline"
              className="mt-6 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 w-full sm:w-auto"
              onClick={() => setShowPreview(!showPreview)}
            >
              Vorschau anzeigen
            </Button>
          </CardContent>
        </Card>
      ))}

    </div>
  );
}
