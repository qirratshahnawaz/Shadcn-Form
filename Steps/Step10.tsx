"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const services = [
  "Provision of online services via rented storage spaces (non-mail uses)",
  "Provision of online services on dedicated servers/ hardware",
  "Access data and files are processed",
  "Web hosting - inclusion external/legend hosting",
  "Use of content delivery network",
];

const hostingProviders = [
  "Alfahosting", "ALL-INKL", "Checkdomain", "DomainFactory", "Hetzner", "Host Europe",
  "Mittwald", "STRATO",
];

const websiteBuilders = [
  "1&1 (IONOS Hosting and/or Website Builder)", "Homepage-Baukasten.de",
  "Jimdo", "Squarespace", "Webnode", "Weebly", "Wix", "WordPress.com",
];

const cdnProviders = [
  "Init7 Content Delivery Network (CDN)", "netskope",
  "New Relic server monitoring and re-telemetry", "Stackpath Content Delivery Network (CDN)",
  "Sucuri", "Wordfence",
];

export default function Step10() {
  const [offerService, setOfferService] = useState<"yes" | "no" | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedHostingProviders, setSelectedHostingProviders] = useState<string[]>([]);
  const [selectedWebsiteBuilders, setSelectedWebsiteBuilders] = useState<string[]>([]);
  const [selectedCdnProviders, setSelectedCdnProviders] = useState<string[]>([]);

  const toggleSelection = (item: string, list: string[], setList: (items: string[]) => void) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8 mt-4">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-green-700">Provision of the online offer, hosting, homepage builders</h1>
        <p>Do you offer an online service that is accessed entirely or partially via a server (e.g. website, e-shop, app)?</p>
        <div className="flex gap-4">
          <Button variant={offerService === "yes" ? "default" : "outline"} onClick={() => setOfferService("yes")}>Ja</Button>
          <Button variant={offerService === "no" ? "default" : "outline"} onClick={() => setOfferService("no")}>Nein</Button>
        </div>
      </div>

      {offerService === "yes" && (
        <>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Please select, if applicable, which procedures and functions you use:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {services.map(service => (
                <Card
                  key={service}
                  className={`cursor-pointer ${selectedServices.includes(service) ? "border-green-500" : ""}`}
                  onClick={() => toggleSelection(service, selectedServices, setSelectedServices)}
                >
                  <CardContent className="p-4">
                    {service}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Please select the web hosting provider you use, if applicable:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {hostingProviders.map(provider => (
                <Card
                  key={provider}
                  className={`cursor-pointer ${selectedHostingProviders.includes(provider) ? "border-green-500" : ""}`}
                  onClick={() => toggleSelection(provider, selectedHostingProviders, setSelectedHostingProviders)}
                >
                  <CardContent className="p-4">
                    {provider}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Is your online offering hosted by a so-called website builder provider?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {websiteBuilders.map(builder => (
                <Card
                  key={builder}
                  className={`cursor-pointer ${selectedWebsiteBuilders.includes(builder) ? "border-green-500" : ""}`}
                  onClick={() => toggleSelection(builder, selectedWebsiteBuilders, setSelectedWebsiteBuilders)}
                >
                  <CardContent className="p-4">
                    {builder}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Please select, where applicable, content delivery networks, security and other service providers:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {cdnProviders.map(cdn => (
                <Card
                  key={cdn}
                  className={`cursor-pointer ${selectedCdnProviders.includes(cdn) ? "border-green-500" : ""}`}
                  onClick={() => toggleSelection(cdn, selectedCdnProviders, setSelectedCdnProviders)}
                >
                  <CardContent className="p-4">
                    {cdn}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-6">
            <Button>Show Preview</Button>
          </div>
        </>
      )}
    </div>
  );
}
