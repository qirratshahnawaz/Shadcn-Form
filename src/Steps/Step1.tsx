"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const Step1 = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogContent, setDialogContent] = useState({
    title: "",
    description: "",
  })

  const openDialog = (title: string, description: string) => {
    setDialogContent({ title, description })
    setDialogOpen(true)
  }

  return (
    <>
      <div className="bg-gray-100 p-8 mt-5">
        <div className="mb-10 text-left">
          <h2 className="text-2xl font-bold mb-2">Verwendungszwecke Ihrer Daten</h2>
          <p className="text-gray-700 max-w-3xl">
            Die Datenschutzerklärung wird aus einzelnen Modulen zusammengestellt, von denen Sie die wichtigsten in der folgenden Schnellauswahl wählen können. Die farbigen Module sind schon aktiv und entsprechen unserer Empfehlung.
            <br />
            Sie können die Vorauswahl entsprechend Ihren Wünschen anpassen, danach Ihre Daten eingeben sowie Ihre Auswahl weiter individualisieren.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { text: "Einholung Cookie-Opt-In", color: "green", icon: "👍" },
            { text: "Kontaktformular", color: "green", icon: "📧" },
            { text: "Versand von Newslettern", icon: "📨" },
            { text: "Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon", icon: "⬇️" },
            { text: "Verein, Partei, NGO", icon: "👥" },
            { text: "Kommerzielle Leistungen", icon: "💶" },
            { text: "Online-Shop", icon: "🛒" },
            { text: "Handwerker & Handwerksbetriebe", icon: "🛠️" },
            { text: "Blog", icon: "✏️" },
            { text: "Reichweitenmessung und A/B-Testing", icon: "📊" },
            { text: "Matomo", icon: "📈" },
            { text: "Onlinemarketing und Vermarktung", icon: "🪧" },
            { text: "Google Analytics", icon: "📊" },
            { text: "Social Media Profile", icon: "👍" },
            { text: "Facebook (Seite/Profil/Gruppe)", icon: "📘" },
            { text: "Instagram-Account", icon: "📷" },
            { text: "X (ehemals Twitter)-Account", icon: "🐦" },
            { text: "Pinterest-Account", icon: "📌" },
            { text: "LinkedIn-Profil oder -Seite", icon: "💼" },
            { text: "Xing-Profil", icon: "🔗" },
            { text: "Snapchat-Account", icon: "👻" },
            { text: "Einbindung von Plugins, Inhalten, Schriftarten, etc.", icon: "🧩" },
            { text: "Einbindung YouTube-Videos", icon: "🎥" },
            { text: "Google Maps", icon: "🗺️" },
            { text: "Google Fonts", icon: "🔤" },
            { text: "Podcasts, Musik – Hosting und Widgets", icon: "🎧" },
            { text: "Bewertungsplattformen und -Widgets", icon: "⭐" },
            { text: "Teilnahme an Affiliate-Programmen", icon: "💸" },
            { text: "Veranstaltung von Gewinnspielen", icon: "🏆" },
          ].map(({ text, color, icon }, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out rounded cursor-pointer"
              onClick={() =>
                openDialog(text, `This option configures your privacy policy to include provisions for: ${text}`)
              }
            >
              <div className="p-8 flex justify-center items-center h-32">
                <div className="text-5xl">{icon}</div>
              </div>
              <div
                className={`${color === "green" ? "bg-green-600 text-white" : "bg-gray-300 text-black"} text-center text-xs`}
                style={{ height: "6vh", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                {text}
              </div>
            </div>
          ))}

          <div className="col-span-full flex justify-center mt-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition duration-200"
              onClick={() =>
                openDialog("Close Overview", "You're about to close the quick overview. Your selections will be saved.")
              }
            >
              Schnellübersicht schließen
            </button>
          </div>
        </div>
      </div>

      {/* Global Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{dialogContent.title}</DialogTitle>
            <DialogDescription>{dialogContent.description}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Step1
