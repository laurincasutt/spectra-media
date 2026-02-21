import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#09090B] pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#F4F4F5] mb-8">Impressum</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-[#A1A1AA] text-base leading-relaxed">
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-2">
              Angaben gemäss Art. 69 OR
            </h2>
            <p>
              Spectra Media GmbH
              <br />
              Zürich, Schweiz
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-2">
              Kontakt
            </h2>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:info@spectra-media.ch"
                className="text-[#0066FF] hover:text-[#3385FF]"
              >
                info@spectra-media.ch
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-2">
              Haftungsausschluss
            </h2>
            <p>
              Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen
              Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
              Vollständigkeit der Informationen. Haftungsansprüche gegen den
              Autor wegen Schäden materieller oder immaterieller Art, welche aus
              dem Zugriff oder der Nutzung bzw. Nichtnutzung der
              veröffentlichten Informationen, durch Missbrauch der Verbindung
              oder durch technische Störungen entstanden sind, werden
              ausgeschlossen.
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-2">
              Urheberrechte
            </h2>
            <p>
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
              oder anderen Dateien auf dieser Website gehören ausschliesslich
              Spectra Media GmbH oder den speziell genannten Rechtsinhabern.
              Für die Reproduktion jeglicher Elemente ist die schriftliche
              Zustimmung der Urheberrechtsträger im Voraus einzuholen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
