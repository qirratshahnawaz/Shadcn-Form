// components/HostingConfigurationForm.tsx
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Search } from "lucide-react";

export default function Step10() {
  const [offerOnlineService, setOfferOnlineService] = useState<boolean | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto p-2 sm:p-4 md:p-6 space-y-4 sm:space-y-6 bg-slate-100 mt-5">
      <div className="space-y-2 sm:space-y-3">
        <p className="font-medium text-sm sm:text-base">
          Bieten Sie ein Onlineangebot an, das ganz oder teilweise über einen Server abgerufen wird (z. B. Website, E-Shop, App)?
        </p>
        <p className="text-xs sm:text-sm text-blue-600 underline cursor-pointer">
          [Erläuterungen anzeigen]
        </p>
        
        <div className="flex gap-2">
          <Button 
            variant={offerOnlineService === true ? "default" : "outline"}
            className={`min-w-16 h-8 sm:h-10 ${offerOnlineService === true ? "bg-green-500 hover:bg-green-600" : ""}`}
            onClick={() => setOfferOnlineService(true)}
          >
            ja
          </Button>
          <Button 
            variant={offerOnlineService === false ? "default" : "outline"}
            className={`min-w-16 h-8 sm:h-10 ${offerOnlineService === false ? "bg-gray-300 hover:bg-gray-400" : "bg-gray-300 hover:bg-gray-400"}`}
            onClick={() => setOfferOnlineService(false)}
          >
            nein
          </Button>
        </div>
      </div>

      {offerOnlineService && (
        <>
          <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
            <p className="font-medium text-sm sm:text-base">Bitte wählen Sie, sofern zutreffend, welche Verfahren und Funktionen Sie nutzen:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3">
              <Card className="p-3 bg-gray-100 flex items-center justify-center text-center h-24 sm:h-32">
                <p className="text-xs sm:text-sm">Bereitstellung On-Premises (eigene Installation/eigener Speicherplatz (Hosting))</p>
              </Card>
              <Card className="p-3 bg-gray-100 flex items-center justify-center text-center h-24 sm:h-32">
                <p className="text-xs sm:text-sm">Bereitstellung On-Demand-Dienst (dedizierter Serverstandort)</p>
              </Card>
              <Card className="p-3 bg-green-500 text-white flex items-center justify-center text-center h-24 sm:h-32">
                <p className="text-xs sm:text-sm">Es werden Zugriffsdaten und LogFiles verwendet</p>
              </Card>
              <Card className="p-3 bg-gray-100 flex items-center justify-center text-center h-24 sm:h-32">
                <p className="text-xs sm:text-sm">Webhosting umfasst E-Mail-Versand und Hosting</p>
              </Card>
              <Card className="p-3 bg-gray-100 flex items-center justify-center text-center h-24 sm:h-32">
                <p className="text-xs sm:text-sm">Einsatz eines Content-Delivery-Networks</p>
              </Card>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
            <p className="font-medium text-sm sm:text-base">Bitte wählen Sie, sofern zutreffend, eingesetzte Webhosting-Anbieter aus:</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
              {['Alfahosting', 'ALL-INKL', 'Checkdomain', 'DomainFactory', 'Hetzner', 'Host Europe', 
                'Mittwald', 'STRATO'].map((provider) => (
                <Card key={provider} className="p-2 sm:p-3 bg-gray-100 flex items-center justify-center text-center h-16 sm:h-20">
                  <p className="text-xs sm:text-sm">{provider}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
            <p className="font-medium text-sm sm:text-base">Wird Ihr Onlineangebot bei einem sog. Homepage-Baukästen-Anbieter gehostet?</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
              {[
                { name: '1&1 IONOS (Hosting und/oder Websitebaukasten)', short: '1&1 IONOS' },
                { name: 'Homepage-Baukasten.de', short: 'Homepage-Baukasten.de' },
                { name: 'Jimdo', short: 'Jimdo' },
                { name: 'Squarespace', short: 'Squarespace' },
                { name: 'Webnode', short: 'Webnode' },
                { name: 'Weebly', short: 'Weebly' },
                { name: 'Wix', short: 'Wix' },
                { name: 'WordPress.com', short: 'WordPress.com' }
              ].map((provider) => (
                <Card key={provider.name} className="p-2 sm:p-3 bg-gray-100 flex items-center justify-center text-center h-16 sm:h-20">
                  <p className="text-xs sm:text-sm">
                    <span className="block sm:hidden">{provider.short}</span>
                    <span className="hidden sm:block">{provider.name}</span>
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
            <p className="font-medium text-sm sm:text-base">Bitte wählen Sie, sofern zutreffend, Content-Delivery-Networks, Sicherheits- und andere Dienstleister aus:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
              {[
                { name: 'Instant Content-Delivery-Network (CDN)', short: 'Instant CDN' },
                { name: 'Netlify', short: 'Netlify' },
                { name: 'New Relic Servermonitoring und Fehlererkennung', short: 'New Relic' },
                { name: 'Stackpath Content-Delivery-Network (CDN)', short: 'Stackpath CDN' },
                { name: 'Sucuri', short: 'Sucuri' },
                { name: 'Wordfence', short: 'Wordfence' }
              ].map((service) => (
                <Card key={service.name} className="p-2 sm:p-3 bg-gray-100 flex items-center justify-center text-center h-16 sm:h-20">
                  <p className="text-xs sm:text-sm">
                    <span className="block sm:hidden md:block lg:hidden">{service.short}</span>
                    <span className="hidden sm:block md:hidden lg:block">{service.name}</span>
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 sm:p-4 bg-gray-50 border rounded-md mt-4 sm:mt-6">
            <p className="text-xs sm:text-sm mb-2 sm:mb-0">Vorteil Premium: Aus über 2.300 weiteren Modulen auswählen</p>
            <div className="flex gap-2 w-full sm:w-auto justify-end">
              <Button variant="outline" size="sm" className="bg-blue-500 text-white h-8 sm:h-10 px-2 sm:px-3">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="link" size="sm" className="text-blue-600 h-8 sm:h-10 px-2 sm:px-3">
                Alle anzeigen
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}