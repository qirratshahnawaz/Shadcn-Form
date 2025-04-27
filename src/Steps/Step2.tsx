import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Step2: React.FC = () => {
  const [selected, setSelected] = useState<"ja" | "nein" | null>(null);
  const [answerSelected, setAnswerSelected] = useState<"ja" | "nein" | null>(null);
  const [isTextareaVisible, setIsTextareaVisible] = useState(false);

  const handleClick = (value: "ja" | "nein") => {
    setSelected(value);
    if (value === "nein") {
      setIsTextareaVisible(true); // Show Textarea when "nein" is clicked
    } else {
      setIsTextareaVisible(false); // Hide Textarea when "ja" is clicked
    }

    const audio = new Audio("/click.mp3");
    audio.play().catch((err) => console.error("Sound failed:", err));
  };

  const handleAnswerClick = (value: "ja" | "nein") => {
    setAnswerSelected(value);

    if (value === "nein") {
      setIsTextareaVisible(true); // Show Textarea when "nein" is clicked
    } else {
      setIsTextareaVisible(false); // Hide Textarea when "ja" is clicked
    }
  };

  return (
    <>
      <div className="mt-4 bg-gray-100 p-6 rounded-md max-w-3xl mx-auto">
        <h3 className="font-bold mb-2">
          Bitte geben Sie die Grund- und Kontaktangaben zu datenschutzrechtlich Verantwortlichen ein:
        </h3>
        <p className="text-blue-500 underline mb-6 cursor-pointer">(Erläuterungen anzeigen)</p>

        <div className="space-y-6">
          <div>
            <Label htmlFor="responsible-person" className="block mb-2">
              Angaben zum Verantwortlichen: <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="responsible-person"
              placeholder="Vorname, Name / Firma&#10;Straße, Hausnr.&#10;PLZ, Ort, Land"
              className="h-24"
            />
          </div>

          <div>
            <Label htmlFor="representatives" className="block mb-2">
              Vertretungsberechtigte Personen (z. B. Geschäftsführer)
            </Label>
            <Input id="representatives" />
          </div>

          <div>
            <Label htmlFor="email" className="block mb-2">
              Ihre E-Mail-Adresse: <span className="text-red-500">*</span>
            </Label>
            <Input id="email" placeholder="vorname.name@beispieldomain.eu" />
          </div>

          <div>
            <Label htmlFor="phone" className="block mb-2">Telefonnummer (optional):</Label>
            <Input id="phone" />
          </div>

          <div>
            <Label htmlFor="url" className="block mb-2">URL Ihres Impressums (optional):</Label>
            <Input id="url" />
          </div>

          <Button className="bg-blue-200 hover:bg-blue-300 text-blue-800">Vorschau anzeigen</Button>

          <div className="mt-8 pt-6 border-t border-gray-300">
            <h3 className="font-bold mb-2">Verfügen Sie über eine(n) Datenschutzbeauftragte(n)?</h3>
            <p className="text-blue-500 underline mb-4 cursor-pointer">(Erläuterungen anzeigen)</p>

            <div className="flex gap-4 mb-4 m-4">
              <button
                onClick={() => handleClick("ja")}
                className={`px-6 py-1 rounded transition-all duration-200 ${
                  selected === "ja"
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                ja
              </button>
              <button
                onClick={() => handleClick("nein")}
                className={`px-6 py-1 rounded transition-all duration-200 ${
                  selected === "nein"
                    ? "bg-orange-500 text-white"
                    : "bg-orange-300 text-white"
                }`}
              >
                nein
              </button>
            </div>

            {isTextareaVisible && (
              <Textarea
                placeholder="Bitte geben Sie zusätzliche Informationen an..."
                className="w-full h-24"
              />
            )}

            <div className="mt-6">
              <Button className="bg-blue-200 hover:bg-blue-300 text-blue-800">Vorschau anzeigen</Button>
            </div>
          </div>

          {/* Additional Section */}
          <div className="mt-8 pt-6 border-t border-gray-300">
            <h3 className="font-bold mb-2">Nur für ausländische Verarbeiter mit risikoreichen Datenverarbeitungen von EU- oder Schweizer Bürgern: Haben Sie einen Vertreter in der EU, bzw. der Schweiz?</h3>
            <p className="text-blue-500 underline mb-4 cursor-pointer">(Erläuterungen anzeigen)</p>

            <div className="flex gap-4 mb-4 m-4">
              <button
                onClick={() => handleAnswerClick("ja")}
                className={`px-6 py-1 rounded transition-all duration-200 ${
                  answerSelected === "ja"
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                ja
              </button>
              <button
                onClick={() => handleAnswerClick("nein")}
                className={`px-6 py-1 rounded transition-all duration-200 ${
                  answerSelected === "nein"
                    ? "bg-orange-500 text-white"
                    : "bg-orange-300 text-white"
                }`}
              >
                nein
              </button>
            </div>

            {isTextareaVisible && (
              <Textarea
                placeholder="Bitte geben Sie zusätzliche Informationen an..."
                className="w-full h-24"
              />
            )}

            <div className="mt-6">
              <Button className="bg-blue-200 hover:bg-blue-300 text-blue-800">Vorschau anzeigen</Button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Step2;
