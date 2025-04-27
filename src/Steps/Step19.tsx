'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function Step19() {
  // State for showing/hiding the text areas
  const [showFirstTextArea, setShowFirstTextArea] = useState(false);
  const [showSecondTextArea, setShowSecondTextArea] = useState(false);

  return (
    <div className="flex flex-col space-y-4 mt-4 max-w-2xl mx-auto">
      {/* First consent section */}
      <div className="bg-gray-100 p-6 rounded-md">
        <p className="text-sm font-normal mb-1">
          Soll die Datenschutzerklärung allumfassend für Ihre Webseite, Ihre Leistungen und falls vorhanden, Social Media
          und mobile Apps gelten?
        </p>
        <p className="text-xs text-blue-600 mb-2">[Erläuterung anzeigen]</p>
        
        <div className="flex space-x-2 mb-2">
          <Button 
            size="sm"
            variant="outline"
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-1 h-8"
            onClick={() => setShowFirstTextArea(true)}
          >
            ja
          </Button>
          <Button 
            size="sm"
            variant="outline"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 h-8"
            onClick={() => setShowFirstTextArea(false)}
          >
            nein
          </Button>
        </div>
        
        {showFirstTextArea && (
          <>
            <p className="text-xs mt-4 mb-1">Sie können die nachfolgenden Einstellungen verwenden oder Ihren Text eingeben:</p>
            
            <Textarea 
              className="w-full border border-gray-300 rounded-md p-2 mt-1 text-sm"
              rows={4}
          //     defaultValue="Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als ".
            />
            
            <p className="text-xs mt-1">Die verwendete Regelung sind nicht änderungsbedürftig.</p>
            
            <div className="flex justify-end mt-1">
              <button className="text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </button>
            </div>
            
            <Button 
              variant="ghost" 
              className="text-xs text-blue-600 mt-2 p-0 h-6"
            >
              Vorschau anzeigen
            </Button>
          </>
        )}
      </div>

      {/* Second consent section */}
      <div className="bg-gray-100 p-4 rounded-md">
        <p className="text-sm font-normal mb-1">
          Soll die Datenschutzerklärung nur für eine mobile App oder eine Web-App gelten?
        </p>
        <p className="text-xs text-blue-600 mb-2">[Erläuterung anzeigen]</p>
        
        <div className="flex space-x-2 mb-2">
          <Button 
            size="sm"
            variant="outline"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 h-8"
            onClick={() => setShowSecondTextArea(false)}
          >
            ja
          </Button>
          <Button 
            size="sm"
            variant="outline"
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-1 h-8"
            onClick={() => setShowSecondTextArea(true)}
          >
            nein
          </Button>
        </div>

        {showSecondTextArea && (
          <>
            <p className="text-xs mt-4 mb-1">Sie können die nachfolgenden Einstellungen verwenden oder Ihren Text eingeben:</p>
            
            <Textarea 
              className="w-full border border-gray-300 rounded-md p-2 mt-1 text-sm"
              rows={4}
              defaultValue="Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als 'Daten' bezeichnet) wir zu welchen Zwecken und in welchem Umfang im Rahmen der Bereitstellung unserer Applikation verarbeiten."
            />
            
            <p className="text-xs mt-1">Die verwendete Regelung sind nicht änderungsbedürftig.</p>
            
            <div className="flex justify-end mt-1">
              <button className="text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </button>
            </div>
            
            <Button 
              variant="ghost" 
              className="text-xs text-blue-600 mt-2 p-0 h-6"
            >
              Vorschau anzeigen
            </Button>
          </>
        )}
      </div>
    </div>
  );
}