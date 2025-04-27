"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SurveyOption {
  id: string;
  name: string;
}

const surveyOptions: SurveyOption[] = [
  { id: "civey", name: "Civey" },
  { id: "crowdsignal", name: "Crowdsignal (ehemals Polldaddy)" },
  { id: "google-formular", name: "Google-Formular" },
  { id: "limesurvey", name: "LimeSurvey" },
];

export default function Step14() {
  const [contestsAnswer, setContestsAnswer] = useState<string | null>(null);
  const [surveysAnswer, setSurveysAnswer] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="flex flex-col space-y-4 sm:space-y-8 mt-4 sm:mt-6 w-full max-w-4xl px-2 sm:px-4 mx-auto">
      {/* Contests Question */}
      <Card className="bg-gray-100">
        <CardContent className="p-3 sm:p-6">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                Veranstalten Sie Gewinnspiele oder Wettbewerbe?
              </h2>
              <button className="text-xs sm:text-sm text-blue-500 hover:underline mt-1">
                (Erläuterungen anzeigen)
              </button>
            </div>

            <div className="flex space-x-2">
              <Button
                className={`w-16 sm:w-20 ${
                  contestsAnswer === "ja"
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gray-300 hover:bg-gray-400 text-gray-700"
                }`}
                onClick={() => setContestsAnswer("ja")}
              >
                ja
              </Button>
              <Button
                className={`w-16 sm:w-20 ${
                  contestsAnswer === "nein"
                    ? "bg-gray-400 hover:bg-gray-500"
                    : "bg-gray-300 hover:bg-gray-400 text-gray-700"
                }`}
                onClick={() => setContestsAnswer("nein")}
              >
                nein
              </Button>
            </div>

            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:gap-3">
              <div className="flex items-center border bg-white rounded p-2 sm:p-3 flex-grow min-w-0 overflow-hidden">
                <span className="text-xs sm:text-sm text-gray-700 mr-2 break-words">
                  Vorteil Premium: Aus über 2.300 weiteren Modulen auswählen
                </span>
                <Search className="text-gray-500 flex-shrink-0" size={16} />
              </div>
              <button className="text-xs sm:text-sm text-blue-500 hover:underline self-start sm:self-auto whitespace-nowrap">
                Alle anzeigen
              </button>
            </div>

            <div>
              <Button
                className="bg-blue-100 hover:bg-blue-200 text-blue-800 w-full sm:w-auto text-sm"
                variant="outline"
              >
                Vorschau anzeigen
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Surveys Question */}
      <Card className="bg-gray-100">
        <CardContent className="p-3 sm:p-6">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                Führen Sie Umfragen oder Befragungen durch?
              </h2>
              <button className="text-xs sm:text-sm text-blue-500 hover:underline mt-1">
                (Erläuterungen anzeigen)
              </button>
            </div>

            <div className="flex space-x-2">
              <Button
                className={`w-16 sm:w-20 ${
                  surveysAnswer === "ja"
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gray-300 hover:bg-gray-400 text-gray-700"
                }`}
                onClick={() => setSurveysAnswer("ja")}
              >
                ja
              </Button>
              <Button
                className={`w-16 sm:w-20 ${
                  surveysAnswer === "nein"
                    ? "bg-gray-400 hover:bg-gray-500"
                    : "bg-gray-300 hover:bg-gray-400 text-gray-700"
                }`}
                onClick={() => setSurveysAnswer("nein")}
              >
                nein
              </Button>
            </div>

            {surveysAnswer === "ja" && (
              <>
                <div className="text-xs sm:text-sm text-gray-700">
                  Bitte wählen Sie, sofern zutreffend, einen verwendeten Anbieter aus.
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {surveyOptions.map((option) => (
                    <Button
                      key={option.id}
                      variant="outline"
                      className={`h-16 sm:h-24 p-2 sm:p-3 flex items-center justify-center text-center text-xs sm:text-sm break-words ${
                        selectedOption === option.id
                          ? "border-blue-500 bg-blue-50"
                          : "bg-gray-200"
                      }`}
                      onClick={() => setSelectedOption(option.id)}
                    >
                      {option.name}
                    </Button>
                  ))}
                </div>

                <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:gap-3">
                  <div className="flex items-center border bg-white rounded p-2 sm:p-3 flex-grow min-w-0 overflow-hidden">
                    <span className="text-xs sm:text-sm text-gray-700 mr-2 break-words">
                      Vorteil Premium: Aus über 2.300 weiteren Modulen auswählen
                    </span>
                    <Search className="text-gray-500 flex-shrink-0" size={16} />
                  </div>
                  <button className="text-xs sm:text-sm text-blue-500 hover:underline self-start sm:self-auto whitespace-nowrap">
                    Alle anzeigen
                  </button>
                </div>

                <div>
                  <Button
                    className="bg-blue-100 hover:bg-blue-200 text-blue-800 w-full sm:w-auto text-sm"
                    variant="outline"
                  >
                    Vorschau anzeigen
                  </Button>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}