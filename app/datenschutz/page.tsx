import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#09090B] pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#F4F4F5] mb-2">
          Datenschutzerklärung
        </h1>
        <p className="text-[#52525B] text-sm mb-10">Stand: März 2026</p>

        <div className="space-y-10 text-[#A1A1AA] text-base leading-relaxed">

          {/* 1 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              1. Verantwortliche Stelle
            </h2>
            <p>
              Verantwortlich für die Bearbeitung Ihrer Personendaten auf dieser Website ist:
            </p>
            <p className="mt-3">
              <strong className="text-[#F4F4F5]">Spectra Media GmbH</strong><br />
              St. Gallen, Schweiz<br />
              E-Mail:{" "}
              <a href="mailto:info@spectra-media.ch" className="text-[#0066FF] hover:text-[#3385FF]">
                info@spectra-media.ch
              </a><br />
              Telefon:{" "}
              <a href="tel:+41795371839" className="text-[#0066FF] hover:text-[#3385FF]">
                +41 79 537 18 39
              </a>
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              2. Grundsätze der Datenbearbeitung
            </h2>
            <p>
              Wir bearbeiten Personendaten nur, soweit dies zur Bereitstellung unserer Leistungen
              notwendig ist oder Sie uns ausdrücklich dazu berechtigt haben. Grundlage ist das
              schweizerische Datenschutzgesetz (DSG) in der revidierten Fassung (nDSG, in Kraft
              seit 1. September 2023).
            </p>
            <p className="mt-3">
              Wir erheben grundsätzlich keine Personendaten über den für die Nutzung dieser Website
              erforderlichen Umfang hinaus. Eine Weitergabe an Dritte findet nur statt, soweit dies
              vertraglich notwendig, gesetzlich vorgeschrieben oder mit Ihrer Einwilligung
              verbunden ist.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              3. Automatisch erhobene Daten beim Website-Besuch
            </h2>
            <p>
              Beim Aufruf unserer Website überträgt Ihr Browser automatisch technische Informationen
              an den Webserver. Diese Zugriffsdaten werden temporär im Server-Log gespeichert und
              umfassen:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>IP-Adresse des anfragenden Geräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Ressource</li>
              <li>Referrer-URL (die zuvor besuchte Website)</li>
              <li>Verwendeter Browser, Betriebssystem und Gerätetyp</li>
              <li>HTTP-Statuscode</li>
            </ul>
            <p className="mt-3">
              Die Bearbeitung erfolgt zur Sicherstellung des Betriebs, zur Fehlerbehebung und zur
              Sicherheit unserer Infrastruktur. Log-Daten werden automatisch nach spätestens 30
              Tagen gelöscht.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              4. Website-Hosting
            </h2>
            <p>
              Diese Website wird gehostet von{" "}
              <strong className="text-[#F4F4F5]">Vercel Inc.</strong>, 340 Pine Street, Suite 701,
              San Francisco, CA 94104, USA. Beim Aufruf der Website werden Verbindungsdaten
              (inkl. IP-Adresse) an Vercel-Server übertragen. Vercel verarbeitet diese Daten
              ausschliesslich zur Auslieferung der Website und nicht für eigene Zwecke.
            </p>
            <p className="mt-3">
              Da Vercel in den USA ansässig ist, findet ein Datentransfer in ein Land ohne
              vergleichbares Datenschutzniveau statt. Vercel verfügt über eine aktuelle
              ISO-27001-Zertifizierung und geeignete technische und organisatorische Massnahmen
              zum Schutz der Daten. Weitere Informationen:{" "}
              <a href="https://vercel.com/legal/privacy-policy" className="text-[#0066FF] hover:text-[#3385FF]" target="_blank" rel="noopener noreferrer">
                vercel.com/legal/privacy-policy
              </a>
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              5. Kontaktformular und direkte Kontaktaufnahme
            </h2>
            <p>
              Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, speichern wir
              die übermittelten Angaben (Name, E-Mail-Adresse, Nachricht sowie Zeitpunkt der
              Anfrage) zur Bearbeitung Ihrer Anfrage. Diese Daten werden nicht ohne Ihre
              Einwilligung an Dritte weitergegeben. Wir löschen die Daten, sobald der Zweck
              der Bearbeitung entfällt und keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              6. Terminbuchung via Calendly
            </h2>
            <p>
              Für die Online-Terminbuchung verwenden wir den Dienst{" "}
              <strong className="text-[#F4F4F5]">Calendly</strong> (Calendly LLC, 271 17th St NW,
              10th Floor, Atlanta, Georgia 30363, USA). Wenn Sie über Calendly einen Termin
              vereinbaren, werden Name, E-Mail-Adresse, Termin und ggf. weitere von Ihnen
              eingegebene Angaben an Calendly übermittelt.
            </p>
            <p className="mt-3">
              Da Calendly in den USA ansässig ist, findet ein Datentransfer in die USA statt.
              Calendly verwendet Standardvertragsklauseln der EU-Kommission als Grundlage für
              internationale Datenübermittlungen. Weitere Informationen zur Datenverarbeitung
              durch Calendly:{" "}
              <a href="https://calendly.com/privacy" className="text-[#0066FF] hover:text-[#3385FF]" target="_blank" rel="noopener noreferrer">
                calendly.com/privacy
              </a>
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              7. WhatsApp-Kommunikation
            </h2>
            <p>
              Auf unserer Website bieten wir die Möglichkeit, uns über{" "}
              <strong className="text-[#F4F4F5]">WhatsApp</strong> (Meta Platforms Ireland Ltd.) zu
              kontaktieren. Wenn Sie diesen Link verwenden, werden Daten - insbesondere Ihre
              Telefonnummer und der Nachrichteninhalt - an WhatsApp/Meta übermittelt. Für die
              Datenverarbeitung durch WhatsApp gilt die Datenschutzrichtlinie von Meta.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              8. Cookies und Tracking
            </h2>
            <p>
              Unsere Website verwendet technisch notwendige Cookies, die für den Betrieb der
              Website erforderlich sind. Diese Cookies speichern keine Personendaten und werden
              beim Schliessen des Browsers automatisch gelöscht. Wir setzen keine Tracking- oder
              Analyse-Cookies von Drittanbietern ein.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              9. Datensicherheit
            </h2>
            <p>
              Wir setzen technische und organisatorische Sicherheitsmassnahmen ein, um Ihre
              personenbezogenen Daten gegen Verlust, Zerstörung, unberechtigten Zugriff,
              unberechtigte Änderung oder unberechtigte Weitergabe zu schützen. Die Übertragung
              von Daten zwischen Ihrem Browser und unseren Servern erfolgt verschlüsselt via
              TLS/HTTPS.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              10. Ihre Rechte
            </h2>
            <p>
              Gestützt auf das schweizerische Datenschutzgesetz (nDSG) stehen Ihnen folgende
              Rechte zu:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1.5">
              <li><strong className="text-[#F4F4F5]">Auskunftsrecht:</strong> Sie können jederzeit Auskunft über die bei uns gespeicherten Personendaten verlangen.</li>
              <li><strong className="text-[#F4F4F5]">Berichtigungsrecht:</strong> Sie können die Berichtigung unrichtiger Daten verlangen.</li>
              <li><strong className="text-[#F4F4F5]">Löschungsrecht:</strong> Sie können die Löschung Ihrer Personendaten verlangen, soweit keine gesetzliche Aufbewahrungspflicht besteht.</li>
              <li><strong className="text-[#F4F4F5]">Einschränkungsrecht:</strong> Sie können die Einschränkung der Bearbeitung Ihrer Daten verlangen.</li>
              <li><strong className="text-[#F4F4F5]">Widerspruchsrecht:</strong> Sie können der Bearbeitung Ihrer Daten widersprechen.</li>
              <li><strong className="text-[#F4F4F5]">Datenportabilität:</strong> Sie können die Herausgabe Ihrer Daten in einem gängigen elektronischen Format verlangen.</li>
            </ul>
            <p className="mt-4">
              Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
              <a href="mailto:info@spectra-media.ch" className="text-[#0066FF] hover:text-[#3385FF]">
                info@spectra-media.ch
              </a>
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              11. Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p>
              Sie haben das Recht, eine Beschwerde beim Eidgenössischen Datenschutz- und
              Öffentlichkeitsbeauftragten (EDÖB) einzureichen:{" "}
              <a href="https://www.edoeb.admin.ch" className="text-[#0066FF] hover:text-[#3385FF]" target="_blank" rel="noopener noreferrer">
                www.edoeb.admin.ch
              </a>
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              12. Änderungen dieser Datenschutzerklärung
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen, um sie an
              geänderte rechtliche Anforderungen oder an Änderungen unserer Dienstleistungen
              anzupassen. Die jeweils aktuelle Version ist auf dieser Seite abrufbar.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
