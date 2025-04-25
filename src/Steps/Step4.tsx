"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

export default function Step4() {
  const [firstOption, setFirstOption] = useState(null)
  const [secondOption, setSecondOption] = useState(null)
  const [firstDialogOpen, setFirstDialogOpen] = useState(false)
  const [secondDialogOpen, setSecondDialogOpen] = useState(false)

  // New dialog states for buttons
  const [buttonDialogOpen, setButtonDialogOpen] = useState(false)
  const [buttonDialogContent, setButtonDialogContent] = useState({
    title: "",
    description: "",
  })

  const openButtonDialog = (title: string, description: string) => {
    setButtonDialogContent({ title, description })
    setButtonDialogOpen(true)
  }

  return (
    <div className="p-6 bg-gray-100 rounded-md space-y-10">
      <div>
        <p className="mb-2 font-semibold">
          Soll die Datenschutzerklärung allumfassend für Ihre Webseite, Ihre Leistungen (und falls vorhanden, Social
          Media und mobile Apps) gelten?
        </p>
        <p onClick={() => setFirstDialogOpen(true)} className="text-blue-500 underline mb-4 cursor-pointer">
          (Erläuterungen anzeigen)
        </p>
        <Dialog open={firstDialogOpen} onOpenChange={setFirstDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Erläuterungen</DialogTitle>
              <DialogDescription>
                Hier können Sie weitere Informationen oder Erläuterungen zur Datenschutzerklärung einfügen.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => setFirstDialogOpen(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => {
              setFirstOption("ja")
              openButtonDialog(
                "Option Selected",
                "You've selected 'ja'. This means your privacy policy will apply to your website, services, and social media if applicable.",
              )
            }}
            className={`px-6 py-1 ${firstOption === "ja" ? "bg-green-500 text-white" : "bg-gray-300"}`}
          >
            ja
          </button>
          <button
            onClick={() => {
              setFirstOption("nein")
              openButtonDialog(
                "Option Selected",
                "You've selected 'nein'. This means your privacy policy will have a more limited scope.",
              )
            }}
            className={`px-6 py-1 ${firstOption === "nein" ? "bg-orange-500 text-white" : "bg-gray-300"}`}
          >
            nein
          </button>
        </div>

        {firstOption === "ja" && (
          <Textarea
            className="h-40 mb-6"
            defaultValue={`Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als 'Daten' bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als 'Onlineangebot').
Die verwendeten Begriffe sind nicht geschlechtsspezifisch.`}
          />
        )}

        <Button
          className="bg-blue-200 hover:bg-blue-300 text-blue-800 mb-8"
          onClick={() =>
            openButtonDialog(
              "Preview",
              "This preview shows how your privacy policy will appear with the current settings.",
            )
          }
        >
          Vorschau anzeigen
        </Button>
      </div>

      <div className="pt-6 border-t border-gray-300">
        <p className="mb-2 font-semibold">
          Soll die Datenschutzerklärung nur für eine mobile App oder eine Web-App gelten?
        </p>
        <p onClick={() => setSecondDialogOpen(true)} className="text-blue-500 underline mb-4 cursor-pointer">
          (Erläuterungen anzeigen)
        </p>
        <Dialog open={secondDialogOpen} onOpenChange={setSecondDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Erläuterungen</DialogTitle>
              <DialogDescription>
                Hier können Sie weitere Informationen oder Erläuterungen zur Datenschutzerklärung einfügen.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => setSecondDialogOpen(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => {
              setSecondOption("ja")
              openButtonDialog(
                "Option Selected",
                "You've selected 'ja'. This means your privacy policy will only apply to a mobile app or web app.",
              )
            }}
            className={`px-6 py-1 ${secondOption === "ja" ? "bg-green-500 text-white" : "bg-gray-300"}`}
          >
            ja
          </button>
          <button
            onClick={() => {
              setSecondOption("nein")
              openButtonDialog(
                "Option Selected",
                "You've selected 'nein'. This means your privacy policy will have a broader scope.",
              )
            }}
            className={`px-6 py-1 ${secondOption === "nein" ? "bg-orange-500 text-white" : "bg-gray-300"}`}
          >
            nein
          </button>
        </div>

        {secondOption === "nein" && (
          <Textarea
            className="h-40 mb-6"
            defaultValue={`Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang im Rahmen der Bereitstellung unserer Applikation verarbeiten.

Die verwendeten Begriffe sind nicht geschlechtsspezifisch.`}
          />
        )}

        <Button
          className="bg-blue-200 hover:bg-blue-300 text-blue-800"
          onClick={() =>
            openButtonDialog(
              "Preview",
              "This preview shows how your privacy policy will appear with the current settings.",
            )
          }
        >
          Vorschau anzeigen
        </Button>
      </div>

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
