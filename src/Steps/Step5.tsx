"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

export default function Step5() {
  const [showUpdatesBox, setShowUpdatesBox] = useState(false)
  const [showRightsBox, setShowRightsBox] = useState(false)
  const [showGlossaryBox, setShowGlossaryBox] = useState(false)
  const [isOpenSection1, setIsOpenSection1] = useState(false)
  const [isOpenSection2, setIsOpenSection2] = useState(false)
  const [isOpenSection3, setIsOpenSection3] = useState(false)

  // New dialog state for buttons
  const [buttonDialogOpen, setButtonDialogOpen] = useState(false)
  const [buttonDialogContent, setButtonDialogContent] = useState({
    title: "",
    description: "",
  })

  const previewText = Array.from({ length: 40 }, (_, i) => `Beschreibung Zeile ${i + 1}`).join("\n")

  const openButtonDialog = (title: string, description: string) => {
    setButtonDialogContent({ title, description })
    setButtonDialogOpen(true)
  }

  return (
    <div className="space-y-10 p-6 max-w-4xl mx-auto">
      <section className="space-y-4 bg-gray-100 p-6 rounded-lg">
        <h3 className="font-semibold">Möchten Sie auf mögliche Aktualisierungen der Datenschutzerklärung hinweisen?</h3>

        <Dialog open={isOpenSection1} onOpenChange={setIsOpenSection1}>
          <DialogTrigger asChild>
            <a href="#" className="text-xs text-blue-600 underline">
              [Erläuterungen anzeigen]
            </a>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Erläuterungen zu Aktualisierungen</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Die Datenschutzerklärung sollte einen Hinweis enthalten, dass sie regelmäßig aktualisiert werden kann und
              wie Benutzer über solche Änderungen informiert werden. Dies ist eine gute Praxis, um Transparenz zu
              gewährleisten und den rechtlichen Anforderungen zu entsprechen.
            </DialogDescription>
            <DialogFooter>
              <Button onClick={() => setIsOpenSection1(false)}>Schließen</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="flex items-center gap-4">
          <Button
            className="bg-gray-300 text-black hover:bg-gray-400"
            onClick={() => {
              setShowUpdatesBox(true)
              openButtonDialog(
                "Updates Enabled",
                "You've enabled the updates section in your privacy policy. This informs users about potential future updates to the policy.",
              )
            }}
          >
            ja
          </Button>
          <Button
            className="bg-gray-300 text-black hover:bg-gray-400"
            onClick={() => {
              setShowUpdatesBox(false)
              openButtonDialog(
                "Updates Disabled",
                "You've disabled the updates section in your privacy policy. Users won't be explicitly informed about potential future updates.",
              )
            }}
          >
            nein
          </Button>
        </div>

        {showUpdatesBox && (
          <div className="flex gap-4">
            <Card className="w-40 h-25 bg-green-100 text-green-900">
              <CardContent className="p-4 text-center">Hinweis zur IP-Adresse</CardContent>
            </Card>
            <Card className="w-40 h-25 bg-green-100 text-green-900">
              <CardContent className="p-4 text-center">Verschlüsselung mittels TLS/SSL (https)</CardContent>
            </Card>
          </div>
        )}

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="mt-2 hover:bg-blue-700"
              onClick={() =>
                openButtonDialog(
                  "Updates Preview",
                  "This preview shows how the updates section will appear in your privacy policy.",
                )
              }
            >
              Vorschau anzeigen
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Vorschau – Aktualisierungen</DialogTitle>
            </DialogHeader>
            <pre className="whitespace-pre-wrap text-green-700">{previewText}</pre>
          </DialogContent>
        </Dialog>
      </section>

      <section className="space-y-4 bg-gray-100 p-6 rounded-lg">
        <h3 className="font-semibold">
          Sollen die von der Verarbeitung betroffenen Personen über ihre Rechte belehrt werden?
        </h3>

        <Dialog open={isOpenSection2} onOpenChange={setIsOpenSection2}>
          <DialogTrigger asChild>
            <a href="#" className="text-xs text-blue-600 underline">
              [Erläuterungen anzeigen]
            </a>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Erläuterungen zu Rechtebelehrung</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Nach der Datenschutz-Grundverordnung (DSGVO) haben betroffene Personen verschiedene Rechte wie das Recht
              auf Auskunft, Berichtigung, Löschung und Widerspruch. Eine umfassende Rechtebelehrung informiert Ihre
              Websitebesucher über diese Rechte und wie sie diese ausüben können.
            </DialogDescription>
            <DialogFooter>
              <Button onClick={() => setIsOpenSection2(false)}>Schließen</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="flex items-center gap-4">
          <Button
            className="bg-gray-300 text-black hover:bg-gray-400"
            onClick={() => {
              setShowRightsBox(true)
              openButtonDialog(
                "Rights Information Enabled",
                "You've enabled the rights information section in your privacy policy. This informs users about their rights under GDPR.",
              )
            }}
          >
            ja
          </Button>
          <Button
            className="bg-gray-300 text-black hover:bg-gray-400"
            onClick={() => {
              setShowRightsBox(false)
              openButtonDialog(
                "Rights Information Disabled",
                "You've disabled the rights information section in your privacy policy. Users won't be explicitly informed about their rights under GDPR.",
              )
            }}
          >
            nein
          </Button>
        </div>

        {showRightsBox && (
          <Card className="w-40 h-40 bg-green-200 text-green-900">
            <CardContent className="p-4 text-center">Rechte der betroffenen Personen aus der DSGVO</CardContent>
          </Card>
        )}

        <Textarea rows={4} placeholder="Adresse der zuständigen Aufsichtsbehörde" className="w-full" />

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="mt-2 hover:bg-blue-700"
              onClick={() =>
                openButtonDialog(
                  "Rights Preview",
                  "This preview shows how the rights information section will appear in your privacy policy.",
                )
              }
            >
              Vorschau anzeigen
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Vorschau – Rechtebelehrung</DialogTitle>
            </DialogHeader>
            <pre className="whitespace-pre-wrap text-green-700">{previewText}</pre>
          </DialogContent>
        </Dialog>
      </section>

      <section className="space-y-4 bg-gray-100 p-6 rounded-lg">
        <h3 className="font-semibold">
          Soll die Datenschutzerklärung am Ende ein Glossar mit Begriffsdefinitionen enthalten?
        </h3>

        <Dialog open={isOpenSection3} onOpenChange={setIsOpenSection3}>
          <DialogTrigger asChild>
            <a href="#" className="text-xs text-blue-600 underline">
              [Erläuterungen anzeigen]
            </a>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Erläuterungen zum Glossar</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Ein Glossar in der Datenschutzerklärung hilft Benutzern, technische und rechtliche Begriffe besser zu
              verstehen. Es erklärt Fachbegriffe wie "Cookies", "personenbezogene Daten", "Auftragsverarbeiter" und
              andere relevante DSGVO-Begriffe in verständlicher Sprache.
            </DialogDescription>
            <DialogFooter>
              <Button onClick={() => setIsOpenSection3(false)}>Schließen</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="flex items-center gap-4">
          <Button
            className="bg-gray-300 text-black hover:bg-gray-400"
            onClick={() => {
              setShowGlossaryBox(true)
              openButtonDialog(
                "Glossary Enabled",
                "You've enabled the glossary section in your privacy policy. This helps users understand technical and legal terms.",
              )
            }}
          >
            ja
          </Button>
          <Button
            className="bg-gray-300 text-black hover:bg-gray-400"
            onClick={() => {
              setShowGlossaryBox(false)
              openButtonDialog(
                "Glossary Disabled",
                "You've disabled the glossary section in your privacy policy. Users won't have access to definitions of technical and legal terms.",
              )
            }}
          >
            nein
          </Button>
        </div>

        {showGlossaryBox && (
          <Card className="w-40 h-40 bg-blue-100 text-blue-900">
            <CardContent className="p-4 text-center">Hinweise entsprechend der DSGVO</CardContent>
          </Card>
        )}

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="mt-2 hover:bg-blue-700"
              onClick={() =>
                openButtonDialog(
                  "Glossary Preview",
                  "This preview shows how the glossary section will appear in your privacy policy.",
                )
              }
            >
              Vorschau anzeigen
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Vorschau – Glossar</DialogTitle>
            </DialogHeader>
            <pre className="whitespace-pre-wrap text-green-700">{previewText}</pre>
          </DialogContent>
        </Dialog>
      </section>

      {/* New dialog for button actions */}
      <Dialog open={buttonDialogOpen} onOpenChange={setButtonDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{buttonDialogContent.title}</DialogTitle>
            <DialogDescription>{buttonDialogContent.description}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setButtonDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
