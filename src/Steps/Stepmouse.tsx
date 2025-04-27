"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const affiliatePrograms = [
  { name: "Agoda.com-Partnerprogramm", id: "agoda" },
  { name: "Amazon-Partnerprogramm", id: "amazon" },
  { name: "Belboon-Partnerprogramm", id: "belboon" },
  { name: "Booking.com-Partnerprogramm", id: "booking" },
  { name: "Digistore24-Partnerprogramm", id: "digistore" },
  { name: "eBay Partner Network", id: "ebay" },
  { name: "TARIFUXX-Partnerprogramm", id: "tarifuxx" },
  { name: "WEBGAINS-Partnerprogramm", id: "webgains" }
];

export default function Stepmouse() {
  const [participateInAffiliatePrograms, setParticipateInAffiliatePrograms] = useState(false);
  const [offerOwnAffiliateProgram, setOfferOwnAffiliateProgram] = useState(false);
  
  return (
    <div className="p-6 mt-5 bg-gray-100 rounded-md space-y-8">
      <div>
        <div className="mb-2 font-medium">
          Nehmen Sie an Affiliate-Programmen teil?
          <span className="text-blue-600 text-sm cursor-pointer ml-1">(Erläuterungen anzeigen)</span>
        </div>
        
        <div className="flex">
          <Button
            onClick={() => setParticipateInAffiliatePrograms(true)}
            className={cn(
              "rounded-none text-white h-8 px-4",
              participateInAffiliatePrograms ? "bg-green-500 hover:bg-green-600" : "bg-green-500 hover:bg-green-600"
            )}
          >
            ja
          </Button>
          
          <Button
            onClick={() => setParticipateInAffiliatePrograms(false)}
            className={cn(
              "rounded-none text-white h-8 px-4",
              !participateInAffiliatePrograms ? "bg-gray-400 hover:bg-gray-500" : "bg-gray-400 hover:bg-gray-500"
            )}
          >
            nein
          </Button>
        </div>
        
        <Collapsible open={participateInAffiliatePrograms}>
          <CollapsibleContent>
            <div className="mt-3">
              <p className="text-sm mb-3">Bitte wählen Sie, sofern zutreffend, aus den folgenden Optionen oder Eingabemöglichkeiten aus:</p>
              
              <div className="grid grid-cols-4 gap-3">
                {affiliatePrograms.map((program) => (
                  <Card 
                    key={program.id} 
                    className="flex items-center justify-center p-4 bg-gray-200 hover:bg-gray-300 cursor-pointer h-24 text-center"
                  >
                    <span className="text-sm">{program.name}</span>
                  </Card>
                ))}
              </div>
              
              <div className="mt-4 flex justify-between">
                <div className="border p-2 rounded-md bg-white flex items-center">
                  <span className="text-sm">Vorteil Premium: Aus über 2.300 weiteren Modulen auswählen</span>
                  <span className="ml-2 rounded-full bg-blue-600 p-1 text-white">🔍</span>
                </div>
                
                <Button variant="link" className="text-blue-600">
                  Alle anzeigen
                </Button>
              </div>
              
              <Button variant="outline" className="mt-4 bg-blue-50 text-blue-800">
                Vorschau anzeigen
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
      
      <div>
        <div className="mb-2 font-medium">
          Bieten Sie ein eigenes Affiliate-Programm an?
        </div>
        
        <div className="flex">
          <Button
            onClick={() => setOfferOwnAffiliateProgram(true)}
            className={cn(
              "rounded-none text-white h-8 px-4",
              offerOwnAffiliateProgram ? "bg-green-500 hover:bg-green-600" : "bg-green-500 hover:bg-green-600"
            )}
          >
            ja
          </Button>
          
          <Button
            onClick={() => setOfferOwnAffiliateProgram(false)}
            className={cn(
              "rounded-none text-white h-8 px-4",
              !offerOwnAffiliateProgram ? "bg-gray-400 hover:bg-gray-500" : "bg-gray-400 hover:bg-gray-500"
            )}
          >
            nein
          </Button>
        </div>
        
        <Collapsible open={offerOwnAffiliateProgram}>
          <CollapsibleContent>
            <div className="mt-4 flex justify-between">
              <div className="border p-2 rounded-md bg-white flex items-center">
                <span className="text-sm">Vorteil Premium: Aus über 2.300 weiteren Modulen auswählen</span>
                <span className="ml-2 rounded-full bg-blue-600 p-1 text-white">🔍</span>
              </div>
              
              <Button variant="link" className="text-blue-600">
                Alle anzeigen
              </Button>
            </div>
            
            <Button variant="outline" className="mt-4 bg-blue-50 text-blue-800">
              Vorschau anzeigen
            </Button>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}