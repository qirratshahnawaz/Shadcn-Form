// ConsentsForm.tsx
'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { HelpCircle, Search } from 'lucide-react';

const ProviderBox = ({ 
  name, 
  isSelected, 
  onClick 
}: { 
  name: string; 
  isSelected?: boolean; 
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        h-20 
        flex items-center justify-center 
        text-center 
        p-2
        bg-gray-200 
        hover:bg-green-500 hover:text-white
        cursor-pointer 
        transition-colors
        overflow-hidden
        ${isSelected ? 'bg-green-500 text-white' : ''}
      `}
    >
      <span className="text-xs sm:text-sm break-words line-clamp-3">{name}</span>
    </div>
  );
};

export default function Step18() {
  const [contactConsent, setContactConsent] = useState<string | null>(null);
  const [messengerConsent, setMessengerConsent] = useState<string | null>(null);
  const [chatbotConsent, setChatbotConsent] = useState<string | null>(null);
  const [pushConsent, setPushConsent] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const [selectedContactProvider, setSelectedContactProvider] = useState<string>('Kontaktformular');
  const [selectedMessengerProvider, setSelectedMessengerProvider] = useState<string | null>(null);
  const [selectedChatbotProvider, setSelectedChatbotProvider] = useState<string | null>(null);
  
  const contactProviders = [
    'Kontaktformular',
    'Freshdesk',
    'HappyFox',
    'Hubspot CRM',
    'zendesk',
    'Zendesk'
  ];
  
  const chatbotProviders = [
    'Alexa (Amazon)',
    'collect.chat',
    'Converse',
    'ManyChat',
    'customersAI (ehemals ksblabla(today))',
    'SnatchBot'
  ];

  const toggleExplanation = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Contact Management Consent Section */}
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium">
                  Bieten Sie Möglichkeiten der Kontaktaufnahme und Kommunikation für Nutzer, Kunden oder andere
                  Kommunikationspartner sowie der Anfrageverwaltung (z. B. Customer Relationship Management (CRM) oder
                  Ticketing) an?
                </h3>
                <button 
                  onClick={() => toggleExplanation('contact-explanation')}
                  className="text-blue-500 text-sm hover:underline"
                >
                  [Erläuterungen anzeigen]
                </button>
                <div id="contact-explanation" className="mt-2 text-sm text-gray-600" style={{ display: 'none' }}>
                  Hier würden die Erläuterungen zum Thema Kontaktaufnahme erscheinen.
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <Button 
                variant={contactConsent === 'ja' ? 'default' : 'outline'}
                className={`w-16 ${contactConsent === 'ja' ? 'bg-green-500 hover:bg-green-600' : ''}`}
                onClick={() => setContactConsent('ja')}
              >
                ja
              </Button>
              <Button 
                variant={contactConsent === 'nein' ? 'default' : 'outline'}
                className={`w-16 ${contactConsent === 'nein' ? 'bg-gray-300 hover:bg-gray-400' : ''}`}
                onClick={() => setContactConsent('nein')}
              >
                nein
              </Button>
            </div>
          </div>

          {contactConsent === 'ja' && (
            <div className="mt-6">
              <p className="mb-2">Bitte wählen Sie einen der Anbieter von Kommunikations und CRM-Diensten aus:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {contactProviders.map((provider) => (
                  <ProviderBox
                    key={provider}
                    name={provider}
                    isSelected={selectedContactProvider === provider}
                    onClick={() => setSelectedContactProvider(provider)}
                  />
                ))}
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center">
                  <span className="text-sm">Vorteil Premium: Aus über 2.300 weiteren Modulen auswählen</span>
                  <Button variant="ghost" size="icon" className="ml-2">
                    <HelpCircle size={16} />
                  </Button>
                </div>
                <div className="relative w-full sm:w-auto flex items-center">
                  <div className="relative w-full sm:w-auto flex items-center">
                    <Input
                      type="text"
                      placeholder="Suchen..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pr-8 w-full"
                    />
                    <Search size={16} className="absolute right-2 text-gray-400" />
                  </div>
                  <Button variant="link" className="text-blue-500 ml-2 whitespace-nowrap">
                    Alle anzeigen
                  </Button>
                </div>
              </div>
              
              <div className="mt-4">
                <Button variant="outline" className="text-blue-500 bg-blue-50">
                  Vorschau anzeigen
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Messenger Consent Section */}
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium">
                  Setzen Sie Messenger zu Kommunikationszwecken (z. B. mit Kunden via WhatsApp) ein?
                </h3>
                <button 
                  onClick={() => toggleExplanation('messenger-explanation')}
                  className="text-blue-500 text-sm hover:underline"
                >
                  [Erläuterungen anzeigen]
                </button>
                <div id="messenger-explanation" className="mt-2 text-sm text-gray-600" style={{ display: 'none' }}>
                  Hier würden die Erläuterungen zum Thema Messenger erscheinen.
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <Button 
                variant={messengerConsent === 'ja' ? 'default' : 'outline'}
                className={`w-16 ${messengerConsent === 'ja' ? 'bg-green-500 hover:bg-green-600' : ''}`}
                onClick={() => setMessengerConsent('ja')}
              >
                ja
              </Button>
              <Button 
                variant={messengerConsent === 'nein' ? 'default' : 'outline'}
                className={`w-16 ${messengerConsent === 'nein' ? 'bg-gray-300 hover:bg-gray-400' : ''}`}
                onClick={() => setMessengerConsent('nein')}
              >
                nein
              </Button>
            </div>
          </div>

          {messengerConsent === 'ja' && (
            <div className="mt-6">
              <p className="mb-2">Bitte wählen Sie einen Messenger oder ChatAnbieter aus:</p>
              
              <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center">
                  <span className="text-sm">Vorteil Premium: Aus über 2.300 weiteren Modulen auswählen</span>
                  <Button variant="ghost" size="icon" className="ml-2">
                    <HelpCircle size={16} />
                  </Button>
                </div>
                <div className="relative w-full sm:w-auto flex items-center">
                  <div className="relative w-full sm:w-auto flex items-center">
                    <Input
                      type="text"
                      placeholder="Suchen..."
                      className="pr-8 w-full"
                    />
                    <Search size={16} className="absolute right-2 text-gray-400" />
                  </div>
                  <Button variant="link" className="text-blue-500 ml-2 whitespace-nowrap">
                    Alle anzeigen
                  </Button>
                </div>
              </div>
              
              <div className="mt-4">
                <Button variant="outline" className="text-blue-500 bg-blue-50">
                  Vorschau anzeigen
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Chatbot Consent Section */}
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium">
                  Setzen Sie Chatbots oder Chatfunktionen zu Kommunikationszwecken ein?
                </h3>
                <button 
                  onClick={() => toggleExplanation('chatbot-explanation')}
                  className="text-blue-500 text-sm hover:underline"
                >
                  [Erläuterungen anzeigen]
                </button>
                <div id="chatbot-explanation" className="mt-2 text-sm text-gray-600" style={{ display: 'none' }}>
                  Hier würden die Erläuterungen zum Thema Chatbots erscheinen.
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <Button 
                variant={chatbotConsent === 'ja' ? 'default' : 'outline'}
                className={`w-16 ${chatbotConsent === 'ja' ? 'bg-green-500 hover:bg-green-600' : ''}`}
                onClick={() => setChatbotConsent('ja')}
              >
                ja
              </Button>
              <Button 
                variant={chatbotConsent === 'nein' ? 'default' : 'outline'}
                className={`w-16 ${chatbotConsent === 'nein' ? 'bg-gray-300 hover:bg-gray-400' : ''}`}
                onClick={() => setChatbotConsent('nein')}
              >
                nein
              </Button>
            </div>
          </div>

          {chatbotConsent === 'ja' && (
            <div className="mt-6">
              <p className="mb-2">Bitte wählen Sie die eingesetzten Anbieter aus:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {chatbotProviders.map((provider) => (
                  <ProviderBox
                    key={provider}
                    name={provider}
                    isSelected={selectedChatbotProvider === provider}
                    onClick={() => setSelectedChatbotProvider(provider)}
                  />
                ))}
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center">
                  <span className="text-sm">Vorteil Premium: Aus über 2.300 weiteren Modulen auswählen</span>
                  <Button variant="ghost" size="icon" className="ml-2">
                    <HelpCircle size={16} />
                  </Button>
                </div>
                <div className="relative w-full sm:w-auto flex items-center">
                  <div className="relative w-full sm:w-auto flex items-center">
                    <Input
                      type="text"
                      placeholder="Suchen..."
                      className="pr-8 w-full"
                    />
                    <Search size={16} className="absolute right-2 text-gray-400" />
                  </div>
                  <Button variant="link" className="text-blue-500 ml-2 whitespace-nowrap">
                    Alle anzeigen
                  </Button>
                </div>
              </div>
              
              <div className="mt-4">
                <Button variant="outline" className="text-blue-500 bg-blue-50">
                  Vorschau anzeigen
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Push Notifications Consent Section */}
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium">
                  Können Nutzer dem Erhalt von Push-Nachrichten (z. B. im Browser oder in einer mobilen App) zustimmen?
                </h3>
                <button 
                  onClick={() => toggleExplanation('push-explanation')}
                  className="text-blue-500 text-sm hover:underline"
                >
                  [Erläuterungen anzeigen]
                </button>
                <div id="push-explanation" className="mt-2 text-sm text-gray-600" style={{ display: 'none' }}>
                  Hier würden die Erläuterungen zum Thema Push-Nachrichten erscheinen.
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <Button 
                variant={pushConsent === 'ja' ? 'default' : 'outline'}
                className={`w-16 ${pushConsent === 'ja' ? 'bg-green-500 hover:bg-green-600' : ''}`}
                onClick={() => setPushConsent('ja')}
              >
                ja
              </Button>
              <Button 
                variant={pushConsent === 'nein' ? 'default' : 'outline'}
                className={`w-16 ${pushConsent === 'nein' ? 'bg-gray-300 hover:bg-gray-400' : ''}`}
                onClick={() => setPushConsent('nein')}
              >
                nein
              </Button>
            </div>
          </div>

          {pushConsent === 'ja' && (
            <div className="mt-6 space-y-6">
              <div>
                <p className="mb-2">Bitte wählen Sie, sofern zutreffend, aus den folgenden Optionen oder Ergänzungsmöglichkeiten aus:</p>
                
                <div className="mt-4">
                  <p className="text-sm mb-2">Optional: Bitte geben Sie die Inhalte Ihrer Push-Nachrichten an:</p>
                  <Textarea 
                    className="min-h-[120px]"
                    placeholder="Zum Beispiel (die Beispiele finden Sie auch im Erläuterungsbereich des Moduls):
&quot;Informationen zu uns, unseren Leistungen, Aktionen und Angeboten.&quot;
&quot;Hinweise auf neueste Beiträge und Kommentare.&quot;
&quot;Technische Hinweise und Änderungen unserer Applikation sowie ihrer Funktionen.&quot;"
                  />
                </div>

                <div className="mt-6">
                  <p className="text-sm mb-2">Optional: Falls Sie eigene Möglichkeiten Push-Nachrichten abzubestellen oder zu ändern anbieten, beschreiben Sie diese oder/und geben eine URL ein:</p>
                  <Textarea 
                    className="min-h-[120px]"
                    placeholder="Zum Beispiel (die Beispiele finden Sie auch im Erläuterungsbereich des Moduls):
&quot;Unsere Push-Nachrichten können Sie mit den folgenden Einstellungen anpassen oder abbestellen: [Gebe der Optionen]&quot;
&quot;Unsere Push-Nachrichten können Sie auf der folgenden Webseite anpassen oder abbestellen: https://...&quot;
&quot;Unsere Push-Nachrichten können Sie in dem Bereich &quot;Einstellungen&quot; unserer App anpassen oder abbestellen.&quot;"
                  />
                </div>

                <div className="mt-6">
                  <p className="mb-2">Falls Sie einen Dienstleister, bzw. Service für den Versand von Push-Nachrichten einsetzen, wählen Sie ihn bitte aus:</p>
                  {/* Service provider selection would go here */}
                </div>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center">
                  <span className="text-sm">Vorteil Premium: Aus über 2.300 weiteren Modulen auswählen</span>
                  <Button variant="ghost" size="icon" className="ml-2">
                    <HelpCircle size={16} />
                  </Button>
                </div>
                <div className="relative w-full sm:w-auto flex items-center">
                  <div className="relative w-full sm:w-auto flex items-center">
                    <Input
                      type="text"
                      placeholder="Suchen..."
                      className="pr-8 w-full"
                    />
                    <Search size={16} className="absolute right-2 text-gray-400" />
                  </div>
                  <Button variant="link" className="text-blue-500 ml-2 whitespace-nowrap">
                    Alle anzeigen
                  </Button>
                </div>
              </div>
              
              <div className="mt-4">
                <Button variant="outline" className="text-blue-500 bg-blue-50">
                  Vorschau anzeigen
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}