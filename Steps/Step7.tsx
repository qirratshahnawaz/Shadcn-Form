import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const services = [
  "Onlineshops, Bestellformulare, E-Commerce und Auslieferung",
  "Agenturdienstleistungen",
  "Bildungs- und Schulungsleistungen",
  "Handwerkliche Leistungen",
  "Projekt- und Entwicklungsleistungen (Software, Webdesign, etc.)",
  "Angebot von Software- und Plattformen (Cloud, Saas)",
  "Technische Dienstleistungen (Ingenieure, Techniker)",
  "Therapeutische Leistungen",
  "Veranstaltungen und Events"
];

const platforms = [
  "avocadostore", "eBay", "abely (ehemals elopage)", "Etsy", "Folksy", "hood.de",
  "ideeggo", "Kickstarter", "shopify", "Patreon", "Startnext", "Steady"
];

const Step7 = () => {
  const [q1, setQ1] = useState<string | null>(null);
  const [q2, setQ2] = useState<string | null>(null);
  const [q3, setQ3] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-10 text-black mt-4">
      {/* Box 1 */}
      <div className="bg-gray-100 p-6 rounded-lg shadow space-y-3">
        <p className="font-medium">
          Bieten Sie kommerzielle oder geschäftliche Leistungen an?
          <span className="ml-2 text-sm text-blue-600 cursor-pointer">(Erläuterungen anzeigen)</span>
        </p>
        <div className="flex gap-2">
          <Button
            className="bg-sky-500 text-white hover:bg-sky-600"
            variant={q1 === "ja" ? "default" : "outline"}
            onClick={() => setQ1("ja")}
          >
            ja
          </Button>
          <Button
            className="bg-sky-500 text-white hover:bg-sky-600"
            variant={q1 === "nein" ? "default" : "outline"}
            onClick={() => setQ1("nein")}
          >
            nein
          </Button>
        </div>
        {q1 === "ja" && (
          <>
            <p className="text-sm mt-4">Bitte wählen Sie, sofern zutreffend, die folgenden Optionen aus:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {services.map((item, idx) => (
                <Card key={idx} className="p-4 text-sm shadow cursor-pointer hover:shadow-md">
                  {item}
                </Card>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4">
              <p className="text-sm font-medium">Vorteil Premium: Aus über 2.300 weiteren Modulen auswählen</p>
              <ChevronDown className="w-4 h-4" />
              <span className="text-sm text-blue-600 cursor-pointer">Alle anzeigen</span>
            </div>
          </>
        )}
        <Button className="mt-4 bg-sky-500 text-white hover:bg-sky-600">Vorschau anzeigen</Button>
      </div>

      {/* Box 2 */}
      <div className="bg-white p-6 rounded-lg shadow space-y-3">
        <p className="font-medium">
          Verarbeiten Sie personenbezogene Daten, zum Beispiel von Kunden, Lieferanten, Dritten, Mitarbeitern oder
          sonstigen Dritten im Rahmen von Geschäftsprozessen und betriebswirtschaftlichen Verfahren?
          <span className="ml-2 text-sm text-blue-600 cursor-pointer">(Erläuterungen anzeigen)</span>
        </p>
        <div className="flex gap-2">
          <Button
            className="bg-sky-500 text-white hover:bg-sky-600"
            variant={q2 === "ja" ? "default" : "outline"}
            onClick={() => setQ2("ja")}
          >
            ja
          </Button>
          <Button
            className="bg-sky-500 text-white hover:bg-sky-600"
            variant={q2 === "nein" ? "default" : "outline"}
            onClick={() => setQ2("nein")}
          >
            nein
          </Button>
        </div>
        <Button className="mt-4 bg-sky-500 text-white hover:bg-sky-600">Vorschau anzeigen</Button>
      </div>

      {/* Box 3 */}
      <div className="bg-white p-6 rounded-lg shadow space-y-3">
        <p className="font-medium">
          Bieten Sie Ihre Waren oder Leistungen über oder mittels von Online-Marktplätzen und -Plattformen Dritter an?
          <span className="ml-2 text-sm text-blue-600 cursor-pointer">(Erläuterungen anzeigen)</span>
        </p>
        <div className="flex gap-2">
          <Button
            className="bg-sky-500 text-white hover:bg-sky-600"
            variant={q3 === "ja" ? "default" : "outline"}
            onClick={() => setQ3("ja")}
          >
            ja
          </Button>
          <Button
            className="bg-sky-500 text-white hover:bg-sky-600"
            variant={q3 === "nein" ? "default" : "outline"}
            onClick={() => setQ3("nein")}
          >
            nein
          </Button>
        </div>
        {q3 === "ja" && (
          <div className="mt-4">
            <p className="text-sm mb-2">Bitte wählen Sie die eingesetzten Anbieter:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {platforms.map((item, idx) => (
                <Card key={idx} className="p-4 text-sm text-center shadow cursor-pointer hover:shadow-md">
                  {item}
                </Card>
              ))}
            </div>
          </div>
        )}
        <Button className="mt-4 bg-sky-500 text-white hover:bg-sky-600">Vorschau anzeigen</Button>
      </div>
    </div>
  );
};

export default Step7;
