"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ImpressumClient() {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <div className="min-h-screen bg-[#09090B] pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#F4F4F5] mb-2">
          {isEn ? "Legal Notice" : "Impressum"}
        </h1>
        <p className="text-[#52525B] text-sm mb-10">
          {isEn ? "Information pursuant to Art. 69 CO" : "Angaben gemäss Art. 69 OR"}
        </p>

        <div className="space-y-8 text-[#A1A1AA] text-base leading-relaxed">

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "Company Information" : "Unternehmensangaben"}
            </h2>
            <p>
              <strong className="text-[#F4F4F5]">Spectra Media GmbH</strong><br />
              Gossau SG, {isEn ? "Switzerland" : "Schweiz"}
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "Contact" : "Kontakt"}
            </h2>
            <p>
              {isEn ? "Email" : "E-Mail"}:{" "}
              <a href="mailto:info@spectramedia.ch" className="text-[#0066FF] hover:text-[#3385FF]">
                info@spectramedia.ch
              </a>
              <br />
              {isEn ? "Phone" : "Telefon"}:{" "}
              <a href="tel:+41795371839" className="text-[#0066FF] hover:text-[#3385FF]">
                +41 79 537 18 39
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "Authorised Representatives" : "Vertretungsberechtigte Personen"}
            </h2>
            <p>
              {isEn
                ? "Spectra Media GmbH is represented by its management."
                : "Die Spectra Media GmbH wird durch ihre Geschäftsführung vertreten."}
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "Person Responsible for Content" : "Inhaltlich Verantwortlicher"}
            </h2>
            <p>
              {isEn
                ? "The person responsible for the content of this website within the meaning of applicable law is Spectra Media GmbH, Gossau SG, Switzerland."
                : "Verantwortlich für den Inhalt dieser Website im Sinne des anwendbaren Rechts ist die Spectra Media GmbH, Gossau SG, Schweiz."}
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "Disclaimer" : "Haftungsausschluss"}
            </h2>
            <p>
              {isEn
                ? "Spectra Media GmbH makes no warranty for the accuracy, completeness, timeliness, or reliability of the information published on this website."
                : "Die Spectra Media GmbH übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit, Aktualität oder Zuverlässigkeit der auf dieser Website publizierten Informationen."}
            </p>
            <p className="mt-3">
              {isEn
                ? "Liability claims for material or immaterial damages arising from access to or use or non-use of the published information, through misuse of the connection or through technical faults, are excluded to the extent that no demonstrably intentional or grossly negligent fault on the part of Spectra Media GmbH is present."
                : "Haftungsansprüche wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen, soweit kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden seitens der Spectra Media GmbH vorliegt."}
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "Liability for Links" : "Haftung für Links"}
            </h2>
            <p>
              {isEn
                ? "References and links to third-party websites are outside our area of responsibility. Any responsibility for such websites is disclaimed. Access to and use of such websites is at the user's own risk."
                : "Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff auf und die Nutzung solcher Webseiten erfolgt auf eigene Gefahr des jeweiligen Nutzers."}
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "Copyright" : "Urheberrechte"}
            </h2>
            <p>
              {isEn
                ? "The copyright and all other rights to content, images, photos, or other files on this website belong exclusively to Spectra Media GmbH or the specifically named rights holders. Written consent from the copyright holders must be obtained in advance for the reproduction of any elements."
                : "Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website gehören ausschliesslich der Spectra Media GmbH oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen."}
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "Privacy" : "Datenschutz"}
            </h2>
            <p>
              {isEn ? (
                <>
                  Information on the processing of personal data can be found in our{" "}
                  <a href="/datenschutz" className="text-[#0066FF] hover:text-[#3385FF]">
                    Privacy Policy
                  </a>.
                </>
              ) : (
                <>
                  Informationen zur Bearbeitung von Personendaten finden Sie in unserer{" "}
                  <a href="/datenschutz" className="text-[#0066FF] hover:text-[#3385FF]">
                    Datenschutzerklärung
                  </a>.
                </>
              )}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
