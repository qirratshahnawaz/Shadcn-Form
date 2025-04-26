import { useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button"; // assuming you're using shadcn/ui
import { Input } from "@/components/ui/input";

export default function Step3() {
  const [showModal, setShowModal] = useState(false);

  const descriptionText = `Diese Vorschau zeigt Ihnen, wie Ihre Datenschutzerklärung aussehen könnte. Bitte beachten Sie, dass dies nur ein Entwurf ist und noch angepasst werden sollte.`;

  return (
    <div className="mt-4 bg-gray-100 p-6 rounded-md">
      <p className="mb-4">
        Bitte teilen Sie uns das Land mit, in dem der Sitz Ihres Unternehmens oder einer anderen Organisation,
        für die diese Datenschutzerklärung gelten soll, liegt. Bei natürlichen Personen bitten wir um die Angabe
        des Wohnsitzlandes:
      </p>
      <p className="text-blue-500 underline mb-6 cursor-pointer">(Erläuterungen anzeigen)</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
        {[
          "Deutschland",
          "Liechtenstein",
          "Luxemburg",
          "Niederlande",
          "Österreich",
          "Polen",
          "Ein anderes Mitgliedsland der EU/EWR",
          "Schweiz",
          "Drittland (außerhalb  und der Schweiz)",
        ].map((country, index) => (
          <div
            key={index}
            className={`${
              country.includes("Drittland") ? "bg-green-500 text-white" : "bg-gray-300"
            } aspect-square p-4 flex items-center justify-center text-center text-sm rounded-md`}
          >
            <span className="break-words leading-tight">{country}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-6">
        <div className="relative w-full sm:w-auto flex-grow">
          <Input placeholder="Weitere Länder auswählen" />
          <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
        </div>
        <Button variant="link" className="text-blue-500">
          Alle anzeigen
        </Button>
      </div>

      <Button
        className="bg-blue-200 hover:bg-blue-300 text-blue-800"
        onClick={() => setShowModal(true)}
      >
        Vorschau anzeigen
      </Button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setShowModal(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold mb-2">Datenschutzerklärung Vorschau</h2>
            <p className="text-gray-700 text-sm">{descriptionText}</p>
          </div>
        </div>
      )}
    </div>
  );
}
