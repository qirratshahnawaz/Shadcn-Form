"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Stepcredit() {
  // State for tracking answers to questions
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
  });

  // Function to handle radio button changes
  const handleRadioChange = (question: string, value: string) => {
    setAnswers({
      ...answers,
      [question]: value,
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      {/* Question 1 */}
      <div className="space-y-2 bg-gray-100 p-4 rounded-md">
        <p className="text-sm font-medium text-blue-700">
          Möchten Sie eine angemessene Sicherheitseinschätzung vornehmen?
        </p>
        <p className="text-xs text-gray-500">Einstellungen zeigen</p>
        
        <div className="flex space-x-2 mt-1">
          <RadioGroup
            className="flex space-x-2"
            value={answers.question1}
            onValueChange={(value) => handleRadioChange("question1", value)}
          >
            <div className="flex items-center">
              <RadioGroupItem value="ja" id="q1-ja" className="bg-green-500 border-green-500 text-white" />
              <Label htmlFor="q1-ja" className="ml-1 mr-2 text-xs">JA</Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="nein" id="q1-nein" className="bg-gray-300 border-gray-300" />
              <Label htmlFor="q1-nein" className="ml-1 text-xs">NEIN</Label>
            </div>
          </RadioGroup>
        </div>
        
        {answers.question1 === "ja" && (
          <div className="pl-4 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="p-4 bg-gray-200 hover:bg-green-100 transition-colors duration-200 h-32 w-full flex items-center justify-center">
              <p className="text-xs font-medium text-center">Überprüfung der Person</p>
            </Card>
            <Card className="p-4 bg-gray-200 hover:bg-green-100 transition-colors duration-200 h-32 w-full flex items-center justify-center">
              <div className="text-center">
                <p className="text-xs font-medium">Sicherheitsrisiken</p>
                <p className="text-xs">Evtl. PEP, Treffer...</p>
              </div>
            </Card>
          </div>
        )}
        
        <Button variant="ghost" className="text-blue-500 text-xs mt-4">
          Fortfahren zeigen
        </Button>
      </div>

      {/* Question 2 - From the new image */}
      <div className="space-y-2 bg-gray-100 p-4 rounded-md">
        <p className="text-sm font-medium text-blue-700">
          Übermitteln Sie personenbezogene Daten an andere Unternehmen, Personen oder andere Empfänger?
        </p>
        <p className="text-xs text-gray-500">Einstellungen zeigen</p>
        
        <div className="flex space-x-2 mt-1">
          <RadioGroup
            className="flex space-x-2"
            value={answers.question2}
            onValueChange={(value) => handleRadioChange("question2", value)}
          >
            <div className="flex items-center">
              <RadioGroupItem value="ja" id="q2-ja" className="bg-green-500 border-green-500 text-white" />
              <Label htmlFor="q2-ja" className="ml-1 mr-2 text-xs">ja</Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="nein" id="q2-nein" className="bg-gray-300 border-gray-300" />
              <Label htmlFor="q2-nein" className="ml-1 text-xs">nein</Label>
            </div>
          </RadioGroup>
        </div>
        
        {answers.question2 === "ja" && (
          <>
            <p className="text-xs mt-4">Bitte wählen Sie die folgende Option, falls Sie personenbezogene Daten innerhalb einer Unternehmensgruppe oder Organisation übermitteln:</p>
            <div className="pl-4 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 bg-gray-200 hover:bg-green-100 transition-colors duration-200 h-32 w-full flex items-center justify-center">
                <p className="text-xs font-medium text-center">Datenübertragung innerhalb einer Organisation</p>
              </Card>
            </div>
          </>
        )}
        
        <Button variant="ghost" className="text-blue-500 text-xs mt-4 bg-blue-50 p-2 rounded">
          Vorschau anzeigen
        </Button>
      </div>

      {/* Question 3 - From the new image */}
      <div className="space-y-2 bg-gray-100 p-4 rounded-md">
        <p className="text-sm font-medium text-blue-700">
          Übermitteln Sie personenbezogene Daten außerhalb der EU/EWR (bzw. für Schweizer außerhalb der Schweiz), z. B. in die USA?
        </p>
        <p className="text-xs text-gray-500">Einstellungen zeigen</p>
        
        <div className="flex space-x-2 mt-1">
          <RadioGroup
            className="flex space-x-2"
            value={answers.question3}
            onValueChange={(value) => handleRadioChange("question3", value)}
          >
            <div className="flex items-center">
              <RadioGroupItem value="ja" id="q3-ja" className="bg-green-500 border-green-500 text-white" />
              <Label htmlFor="q3-ja" className="ml-1 mr-2 text-xs">ja</Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="nein" id="q3-nein" className="bg-gray-300 border-gray-300" />
              <Label htmlFor="q3-nein" className="ml-1 text-xs">nein</Label>
            </div>
          </RadioGroup>
        </div>
        
        {answers.question3 === "ja" && (
          <>
            <p className="text-xs mt-4">Bitte wählen Sie, sofern zutreffend, aus den folgenden Optionen oder Einwilligungsmöglichkeiten aus:</p>
            <div className="pl-4 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 bg-gray-200 hover:bg-green-100 transition-colors duration-200 h-32 w-full flex items-center justify-center">
                <p className="text-xs font-medium text-center text-green-800">Hinweise ergeben sich aus der DSGVO</p>
              </Card>
            </div>
          </>
        )}
        
        <Button variant="ghost" className="text-blue-500 text-xs mt-4 bg-blue-50 p-2 rounded">
          Vorschau anzeigen
        </Button>
      </div>

      {/* Question 4 */}
      <div className="space-y-2 bg-gray-100 p-4 rounded-md">
        <p className="text-sm font-medium text-blue-700">
          Möchten Sie Verträge elektronisch mit Unterschrift und Leistung anbinden?
        </p>
        <p className="text-xs text-gray-500">Einstellungen zeigen</p>
        
        <div className="flex space-x-2 mt-1">
          <RadioGroup
            className="flex space-x-2"
            value={answers.question4}
            onValueChange={(value) => handleRadioChange("question4", value)}
          >
            <div className="flex items-center">
              <RadioGroupItem value="ja" id="q4-ja" className="bg-green-500 border-green-500 text-white" />
              <Label htmlFor="q4-ja" className="ml-1 mr-2 text-xs">JA</Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="nein" id="q4-nein" className="bg-gray-300 border-gray-300" />
              <Label htmlFor="q4-nein" className="ml-1 text-xs">NEIN</Label>
            </div>
          </RadioGroup>
        </div>
        
        {answers.question4 === "ja" && (
          <div className="pl-4 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="p-4 bg-gray-200 hover:bg-green-100 transition-colors duration-200 h-32 w-full flex items-center justify-center">
              <p className="text-xs font-medium text-center">Anforderungen an den Lieferant</p>
            </Card>
            <Card className="p-4 bg-gray-200 hover:bg-green-100 transition-colors duration-200 h-32 w-full flex items-center justify-center">
              <p className="text-xs font-medium text-center">Anforderungen an die Leistung</p>
            </Card>
          </div>
        )}
        
        <Button variant="ghost" className="text-blue-500 text-xs mt-4">
          Fortfahren zeigen
        </Button>
      </div>

      {/* Question 5 */}
      <div className="space-y-2 bg-gray-100 p-4 rounded-md">
        <p className="text-sm font-medium text-blue-700">
          Möchten Sie mögliche Anforderungen der Datenschutzbehörde hinweisen?
        </p>
        <p className="text-xs text-gray-500">Einstellungen zeigen</p>
        
        <div className="flex space-x-2 mt-1">
          <RadioGroup
            className="flex space-x-2"
            value={answers.question5}
            onValueChange={(value) => handleRadioChange("question5", value)}
          >
            <div className="flex items-center">
              <RadioGroupItem value="ja" id="q5-ja" className="bg-green-500 border-green-500 text-white" />
              <Label htmlFor="q5-ja" className="ml-1 mr-2 text-xs">JA</Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="nein" id="q5-nein" className="bg-gray-300 border-gray-300" />
              <Label htmlFor="q5-nein" className="ml-1 text-xs">NEIN</Label>
            </div>
          </RadioGroup>
        </div>
        
        <Button variant="ghost" className="text-blue-500 text-xs mt-4">
          Fortfahren zeigen
        </Button>
      </div>

      {/* Question 6 */}
      <div className="space-y-2 bg-gray-100 p-4 rounded-md">
        <p className="text-sm font-medium text-blue-700">
          Sollten Sie von Verhandlung betroffenen Personen oder ihre Rechte haben warten?
        </p>
        <p className="text-xs text-gray-500">Einstellungen zeigen</p>
        
        <div className="flex space-x-2 mt-1">
          <RadioGroup
            className="flex space-x-2"
            value={answers.question6}
            onValueChange={(value) => handleRadioChange("question6", value)}
          >
            <div className="flex items-center">
              <RadioGroupItem value="ja" id="q6-ja" className="bg-green-500 border-green-500 text-white" />
              <Label htmlFor="q6-ja" className="ml-1 mr-2 text-xs">JA</Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="nein" id="q6-nein" className="bg-gray-300 border-gray-300" />
              <Label htmlFor="q6-nein" className="ml-1 text-xs">NEIN</Label>
            </div>
          </RadioGroup>
        </div>
        
        {answers.question6 === "ja" && (
          <div className="pl-4 mt-4">
            <Card className="p-4 bg-gray-200 hover:bg-green-100 transition-colors duration-200 h-32 w-full flex items-center justify-center">
              <p className="text-xs font-medium text-center">Datenschutzrechtliche Information</p>
            </Card>
          </div>
        )}
        
        <Button variant="ghost" className="text-blue-500 text-xs mt-4">
          Fortfahren zeigen
        </Button>
      </div>
    </div>
  );
}