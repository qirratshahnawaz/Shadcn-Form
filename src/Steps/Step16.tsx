'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Tooltip } from '@/components/ui/tooltip';
import { 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';

export default function Step16() {
  const [newsletterConsent, setNewsletterConsent] = useState<boolean | null>(null);
  const [marketingConsent, setMarketingConsent] = useState<boolean | null>(null);
  const [newsletterContent, setNewsletterContent] = useState('');
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  const providers = [
    { id: 'cleverreach', name: 'CleverReach' },
    { id: 'facebook', name: 'Facebook-Messenger Broadcast' },
    { id: 'getresponse', name: 'GetResponse' },
    { id: 'hubspot', name: 'HubSpot E-Mail-Marketing' },
    { id: 'klicktipp', name: 'KlickTipp' },
    { id: 'mailchimp', name: 'MailChimp' },
    { id: 'mailjet', name: 'Mailjet' },
    { id: 'rapidmail', name: 'Rapidmail' },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100  mt-5 space-y-6">
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-medium">Versenden Sie einen Newsletter oder vergleichbare Arten von elektronischen Nachrichten?</h3>
            <button className="text-xs text-black-600 mb-2">(Erläuterungen anzeigen)</button>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant={newsletterConsent === true ? "default" : "outline"} 
            className={`w-16 ${newsletterConsent === true ? "bg-green-500 hover:bg-green-600" : ""}`}
            onClick={() => setNewsletterConsent(true)}
          >
            ja
          </Button>
          <Button 
            variant={newsletterConsent === false ? "default" : "outline"} 
            className={`w-16 ${newsletterConsent === false ? "bg-gray-300 hover:bg-gray-400 text-gray-800" : ""}`}
            onClick={() => setNewsletterConsent(false)}
          >
            nein
          </Button>
        </div>
      </div>

      {newsletterConsent === true && (
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm">Bitte geben Sie die Inhalte Ihrer Newsletter, bzw. übrigen Kommunikationen an (oder übernehmen, falls zutreffend, unser Beispiel):</p>
            <Textarea 
              placeholder="Informationen zu uns, unseren Leistungen, Aktionen und Angeboten."
              value={newsletterContent}
              onChange={(e) => setNewsletterContent(e.target.value)}
              className="min-h-24"
            />
          </div>

          <div className="space-y-2">
            <p className="text-sm">Bitte wählen Sie die folgenden Optionen aus, sofern diese auf Ihren Newsletter zutreffen:</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <Card className="p-4 flex flex-col items-center justify-center text-center aspect-square bg-gray-200">
                <p className="text-xs">Newsletter Ausspielung für Un­­terer­­ge­bnis­­se</p>
              </Card>
              <Card className="p-4 flex flex-col items-center justify-center text-center aspect-square bg-gray-200">
                <p className="text-xs">Versand (auch) via SMS</p>
              </Card>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm">Falls Sie einen Versanddienstleister einsetzen, wählen Sie ihn bitte aus:</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {providers.map((provider) => (
                <Card 
                  key={provider.id}
                  className={`p-4 flex flex-col items-center justify-center text-center aspect-square cursor-pointer hover:bg-gray-100 ${selectedProvider === provider.id ? 'ring-2 ring-blue-500' : 'bg-gray-200'}`}
                  onClick={() => setSelectedProvider(provider.id)}
                >
                  <p className="text-xs">{provider.name}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="text-sm text-black-600">
                    Vorteil Premium: Aus über 2.300 weiteren Modulen auswählen
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Premium-Funktion</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <button className="text-sm text-black-600">Alle anzeigen</button>
            </div>
          </div>

          <Button variant="outline" className="text-sm text-black-600">
            Vorschau anzeigen
          </Button>
        </div>
      )}

      <div className="space-y-3 pt-4 border-t border-gray-200">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-medium">Versenden Sie Werbenachrichten via E-Mail oder per Post oder nutzen zu diesen Zwecken das Telefon oder ein Fax?</h3>
            <button className="text-xs text-black-600 mb-2">(Erläuterungen anzeigen)</button>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant={marketingConsent === true ? "default" : "outline"} 
            className={`w-16 ${marketingConsent === true ? "bg-green-500 hover:bg-green-600" : ""}`}
            onClick={() => setMarketingConsent(true)}
          >
            ja
          </Button>
          <Button 
            variant={marketingConsent === false ? "default" : "outline"} 
            className={`w-16 ${marketingConsent === false ? "bg-gray-300 hover:bg-gray-400 text-gray-800" : ""}`}
            onClick={() => setMarketingConsent(false)}
          >
            nein
          </Button>
        </div>
      </div>

      {marketingConsent === true && (
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="text-sm text-blue-600">
                  Vorteil Premium: Aus über 2.300 weiteren Modulen auswählen
                </TooltipTrigger>
                <TooltipContent>
                  <p>Premium-Funktion</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <button className="text-sm text-blue-600">Alle anzeigen</button>
          </div>
        </div>
      )}
    </div>
  );
}