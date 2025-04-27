// GermanBusinessForm.tsx
"use client";

import React, { useState } from 'react';

export default function Step9() {
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen font-sans">
      {/* First Form Section */}
      <FormSection 
        title="Bieten Sie kommerzielle oder geschäftliche Leistungen an?"
        options={[
          { text: 'Onlineshop, Bestell-formulare, E-Com-merce und Auslieferung', active: true },
          { text: 'Agenturdienstleis-tungen', active: true },
          { text: 'Bildungs- und Schulungsleistun-gen', active: true },
          { text: 'Handwerkliche Leistungen', active: true },
          { text: 'Projekt- und Ent-wicklungsleistungen (Software, Webde-sign, etc.)', active: true },
          { text: 'Angebot von Soft-ware- und Plattfor-men (Cloud, SaaS)', active: false },
          { text: 'Technische Dienst-leistungen (Inge-nieure, Techniker)', active: true },
          { text: 'Therapeutische Leistungen', active: false },
          { text: 'Veranstaltungen und Events', active: true },
        ]}
      />
      
      {/* Second Form Section */}
      <FormSection 
        title="Bieten Sie Ihre Waren oder Leistungen über oder mittels von Online-Marktplätzen und -Plattformen Dritter an?"
        options={[
          { text: 'avocadostore', active: false },
          { text: 'eBay', active: false },
          { text: 'ablefy (ehemals elopage)', active: false },
          { text: 'Etsy', active: false },
          { text: 'Folksy', active: false },
          { text: 'hood.de', active: false },
          { text: 'Indiegogo', active: false },
          { text: 'Kickstarter', active: false },
          { text: 'shopify', active: false },
          { text: 'Patreon', active: false },
          { text: 'Startnext', active: false },
          { text: 'Steady', active: false },
          { text: 'yatego', active: false },
        ]}
      />
      
      {/* Third Form Section */}
      <FormSection 
        title="Verarbeiten Sie personenbezogene Daten, zum Beispiel von Kunden, Lieferanten, Dritten, Mitarbeitern oder sonstigen Dritten im Rahmen von Geschäftsprozessen und betriebswirtschaftlichen Verfahren?"
        options={[
          { text: 'Kunden können ein Kundenkonto anlegen', active: false },
          { text: 'Wirtschaftliche Ana-lysen und Marktforschung', active: true },
        ]}
      />
    </div>
  );
}

// FormSection component defined in the same file
function FormSection({ 
  title, 
  options = [] 
}: { 
  title: string; 
  options: { text: string; active?: boolean }[];
}) {
  const [selected, setSelected] = useState<'ja' | 'nein'>('ja');

  return (
    <div className="mb-6 bg-gray-100 p-6 border border-gray-200 rounded-md shadow-sm">
      <h2 className="text-base font-bold text-gray-800 mb-1">{title}</h2>
      <button className="text-blue-600 text-sm mb-4">(Erläuterungen anzeigen)</button>

      <div className="flex mb-6">
        <button
          onClick={() => setSelected('ja')}
          className={`px-5 py-2 border-0 text-white font-normal rounded-l-md ${
            selected === 'ja' ? 'bg-green-500' : 'bg-gray-300 text-gray-700'
          }`}
        >
          ja
        </button>
        <button
          onClick={() => setSelected('nein')}
          className={`px-5 py-2 border-0 text-white font-normal rounded-r-md ${
            selected === 'nein' ? 'bg-green-500' : 'bg-gray-300 text-gray-700'
          }`}
        >
          nein
        </button>
      </div>

      {options.length > 0 && (
        <>
          <p className="text-sm mb-4">Bitte wählen Sie, sofern zutreffend, die folgenden Optionen aus:</p>
          
          {/* Updated Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mb-6">
            {options.map((option, index) => (
              <div
                key={index}
                className={`
                  bg-gray-200 text-gray-800
                  ${option.active !== false ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white transition-colors duration-200'}
                  p-3 rounded flex items-center justify-center text-center text-sm cursor-pointer aspect-square
                `}
              >
                {option.text}
              </div>
            ))}
          </div>
        </>
      )}

      <div className="flex items-center justify-between bg-white p-4 rounded mb-4">
        <span className="text-sm">
          Vorteil <span className="text-amber-600 font-bold">Premium:</span> Aus über 2.300 weiteren Modulen auswählen
        </span>
        <div className="flex items-center">
          <svg 
            className="h-5 w-5 text-green-500 mr-2" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <a href="#" className="text-blue-600 text-sm ml-6">
            Alle anzeigen
          </a>
        </div>
      </div>

      <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 border-0">
        Vorschau anzeigen
      </button>
    </div>
  );
}
