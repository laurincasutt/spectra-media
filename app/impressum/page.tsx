import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#09090B] pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#F4F4F5] mb-2">Impressum</h1>
        <p className="text-[#52525B] text-sm mb-10">Angaben gemäss Art. 69 OR</p>

        <div className="space-y-8 text-[#A1A1AA] text-base leading-relaxed">

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              Unternehmensangaben
            </h2>
            <p>
              <strong className="text-[#F4F4F5]">Spectra Media GmbH</strong><br />
              Gossau SG, Schweiz
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              Kontakt
            </h2>
            <p>
              E-Mail:{" "}
              <a href="mailto:info@spectramedia.ch" className="text-[#0066FF] hover:text-[#3385FF]">
                info@spectramedia.ch
              </a>
              <br />
              Telefon:{" "}
              <a href="tel:+41795371839" className="text-[#0066FF] hover:text-[#3385FF]">
                +41 79 537 18 39
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              Vertretungsberechtigte Personen
            </h2>
            <p>
              Die Spectra Media GmbH wird durch ihre Geschäftsführung vertreten.
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              Inhaltlich Verantwortlicher
            </h2>
            <p>
              Verantwortlich für den Inhalt dieser Website im Sinne des anwendbaren Rechts ist die
              Spectra Media GmbH, Gossau SG, Schweiz.
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              Haftungsausschluss
            </h2>
            <p>
              Die Spectra Media GmbH übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit,
              Aktualität oder Zuverlässigkeit der auf dieser Website publizierten Informationen.
            </p>
            <p className="mt-3">
              Haftungsansprüche wegen Schäden materieller oder immaterieller Art, die aus dem
              Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen,
              durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind,
              werden ausgeschlossen, soweit kein nachweislich vorsätzliches oder grob fahrlässiges
              Verschulden seitens der Spectra Media GmbH vorliegt.
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              Haftung für Links
            </h2>
            <p>
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
              Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten
              abgelehnt. Der Zugriff auf und die Nutzung solcher Webseiten erfolgt auf eigene
              Gefahr des jeweiligen Nutzers.
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              Urheberrechte
            </h2>
            <p>
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen
              Dateien auf dieser Website gehören ausschliesslich der Spectra Media GmbH oder den
              speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die
              schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              Datenschutz
            </h2>
            <p>
              Informationen zur Bearbeitung von Personendaten finden Sie in unserer{" "}
              <a href="/datenschutz" className="text-[#0066FF] hover:text-[#3385FF]">
                Datenschutzerklärung
              </a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
