import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function Step6() {
  const [active, setActive] = useState<"ja" | "nein" | null>("ja");
  const [open, setOpen] = useState(false);

  const options = [
    "Mitgliederverwaltung",
    "Beitragsverwaltung",
    "Veranstaltungen und Organisationsbetrieb",
    "Satzungsgemäße Öffentlichkeitsarbeit",
    "Spendensammlung und Fundraising",
  ];

  return (
    <div className="m-5 p-6 space-y-9 bg-gray-100 rounded-xl shadow">
      <h2 className="text-lg font-semibold">
        Sind Sie nach einer Satzung oder einer Geschäftsordnung tätig?{" "}
        <span className="font-normal text-muted-foreground">
          (z. B. als Verein oder gemeinnützige Organisation)
        </span>
      </h2>
      <a href="#" className="text-blue-600 text-sm underline">
        (Erläuterungen anzeigen)
      </a>

      {/* Toggle Buttons */}
      <div className="flex gap-2">
        <Button
          variant={active === "ja" ? "default" : "outline"}
          className={`w-16 ${active === "ja" && "bg-green-600 hover:bg-green-700 text-white"}`}
          onClick={() => setActive("ja")}
        >
          ja
        </Button>
        <Button
          variant={active === "nein" ? "default" : "outline"}
          className={`w-16 ${active === "nein" && "bg-gray-400 hover:bg-gray-500 text-white"}`}
          onClick={() => setActive("nein")}
        >
          nein
        </Button>
      </div>

      {/* Option Cards */}
      {active === "ja" && (
        <>
          <p className="text-sm mt-4">
            Bitte wählen Sie, sofern zutreffend, aus den folgenden Optionen oder Eingabemöglichkeiten aus:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {options.map((opt, idx) => (
              <Card
                key={opt}
                className={`p-4 text-white text-center font-medium cursor-pointer ${
                  idx === 4 ? "bg-gray-300 text-black shadow-md" : "bg-green-600 hover:bg-green-700"
                }`}
              >
                <CardContent className="p-0">{opt}</CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      {/* Search Bar - Moved to New Line */}
      <div className="flex flex-col gap-2 mt-6">
        <span className="text-sm text-muted-foreground">
          Vorteil Premium: Aus über 2.300 weiteren Modulen auswählen
        </span>
        <div className="flex items-center gap-2">
          <Input className="w-64 h-8 px-2" placeholder="Suche" />
          <Search className="w-4 h-4 text-muted-foreground" />
          <a href="#" className="text-blue-600 text-sm underline ml-auto">
            Alle anzeigen
          </a>
        </div>
      </div>

      {/* Modal Trigger */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="mt-4" variant="outline">
            Vorschau anzeigen
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Vorschau Ihrer Auswahl</DialogTitle>
            <DialogDescription>
              Hier sehen Sie eine Vorschau Ihrer Eingaben.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">
              Ihre ausgewählten Optionen werden hier angezeigt.
            </p>
          </div>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>Schließen</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
