"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function DatenschutzClient() {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <div className="min-h-screen bg-[#09090B] pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#F4F4F5] mb-2">
          {isEn ? "Privacy Policy" : "Datenschutzerklärung"}
        </h1>
        <p className="text-[#52525B] text-sm mb-10">
          {isEn ? "Last updated: March 2026" : "Stand: März 2026"}
        </p>

        <div className="space-y-10 text-[#A1A1AA] text-base leading-relaxed">

          {/* 1 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "1. Controller" : "1. Verantwortliche Stelle"}
            </h2>
            <p>
              {isEn
                ? "The controller responsible for processing your personal data on this website is:"
                : "Verantwortlich für die Bearbeitung Ihrer Personendaten auf dieser Website ist:"}
            </p>
            <p className="mt-3">
              <strong className="text-[#F4F4F5]">Spectra Media GmbH</strong><br />
              Gossau SG, {isEn ? "Switzerland" : "Schweiz"}<br />
              {isEn ? "Email" : "E-Mail"}:{" "}
              <a href="mailto:info@spectramedia.ch" className="text-[#0066FF] hover:text-[#3385FF]">
                info@spectramedia.ch
              </a><br />
              {isEn ? "Phone" : "Telefon"}:{" "}
              <a href="tel:+41795371839" className="text-[#0066FF] hover:text-[#3385FF]">
                +41 79 537 18 39
              </a>
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "2. Principles of Data Processing" : "2. Grundsätze der Datenbearbeitung"}
            </h2>
            <p>
              {isEn
                ? "We process personal data only to the extent necessary to provide our services or where you have explicitly authorised us to do so. The legal basis is the Swiss Federal Act on Data Protection (FADP) in its revised version (revFADP, in force since 1 September 2023)."
                : "Wir bearbeiten Personendaten nur, soweit dies zur Bereitstellung unserer Leistungen notwendig ist oder Sie uns ausdrücklich dazu berechtigt haben. Grundlage ist das schweizerische Datenschutzgesetz (DSG) in der revidierten Fassung (nDSG, in Kraft seit 1. September 2023)."}
            </p>
            <p className="mt-3">
              {isEn
                ? "We generally do not collect personal data beyond what is required for using this website. Data is only shared with third parties where contractually necessary, legally required, or with your consent."
                : "Wir erheben grundsätzlich keine Personendaten über den für die Nutzung dieser Website erforderlichen Umfang hinaus. Eine Weitergabe an Dritte findet nur statt, soweit dies vertraglich notwendig, gesetzlich vorgeschrieben oder mit Ihrer Einwilligung verbunden ist."}
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "3. Automatically Collected Data When Visiting the Website" : "3. Automatisch erhobene Daten beim Website-Besuch"}
            </h2>
            <p>
              {isEn
                ? "When you visit our website, your browser automatically transmits technical information to the web server. This access data is temporarily stored in the server log and includes:"
                : "Beim Aufruf unserer Website überträgt Ihr Browser automatisch technische Informationen an den Webserver. Diese Zugriffsdaten werden temporär im Server-Log gespeichert und umfassen:"}
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              {isEn ? (
                <>
                  <li>IP address of the requesting device</li>
                  <li>Date and time of access</li>
                  <li>Name and URL of the requested resource</li>
                  <li>Referrer URL (previously visited website)</li>
                  <li>Browser, operating system, and device type used</li>
                  <li>HTTP status code</li>
                </>
              ) : (
                <>
                  <li>IP-Adresse des anfragenden Geräts</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Ressource</li>
                  <li>Referrer-URL (die zuvor besuchte Website)</li>
                  <li>Verwendeter Browser, Betriebssystem und Gerätetyp</li>
                  <li>HTTP-Statuscode</li>
                </>
              )}
            </ul>
            <p className="mt-3">
              {isEn
                ? "Processing is carried out to ensure operation, for troubleshooting, and to secure our infrastructure. Log data is automatically deleted after a maximum of 30 days."
                : "Die Bearbeitung erfolgt zur Sicherstellung des Betriebs, zur Fehlerbehebung und zur Sicherheit unserer Infrastruktur. Log-Daten werden automatisch nach spätestens 30 Tagen gelöscht."}
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "4. Website Hosting" : "4. Website-Hosting"}
            </h2>
            <p>
              {isEn ? (
                <>
                  This website is hosted by{" "}
                  <strong className="text-[#F4F4F5]">Vercel Inc.</strong>, 340 Pine Street, Suite 701, San Francisco, CA 94104, USA. When you visit the website, connection data (incl. IP address) is transmitted to Vercel servers. Vercel processes this data solely for delivering the website and not for its own purposes.
                </>
              ) : (
                <>
                  Diese Website wird gehostet von{" "}
                  <strong className="text-[#F4F4F5]">Vercel Inc.</strong>, 340 Pine Street, Suite 701, San Francisco, CA 94104, USA. Beim Aufruf der Website werden Verbindungsdaten (inkl. IP-Adresse) an Vercel-Server übertragen. Vercel verarbeitet diese Daten ausschliesslich zur Auslieferung der Website und nicht für eigene Zwecke.
                </>
              )}
            </p>
            <p className="mt-3">
              {isEn ? (
                <>
                  As Vercel is based in the USA, data is transferred to a country without a comparable level of data protection. Vercel holds current ISO-27001 certification and has appropriate technical and organisational measures to protect data. More information:{" "}
                  <a href="https://vercel.com/legal/privacy-policy" className="text-[#0066FF] hover:text-[#3385FF]" target="_blank" rel="noopener noreferrer">
                    vercel.com/legal/privacy-policy
                  </a>
                </>
              ) : (
                <>
                  Da Vercel in den USA ansässig ist, findet ein Datentransfer in ein Land ohne vergleichbares Datenschutzniveau statt. Vercel verfügt über eine aktuelle ISO-27001-Zertifizierung und geeignete technische und organisatorische Massnahmen zum Schutz der Daten. Weitere Informationen:{" "}
                  <a href="https://vercel.com/legal/privacy-policy" className="text-[#0066FF] hover:text-[#3385FF]" target="_blank" rel="noopener noreferrer">
                    vercel.com/legal/privacy-policy
                  </a>
                </>
              )}
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "5. Contact Form and Direct Contact" : "5. Kontaktformular und direkte Kontaktaufnahme"}
            </h2>
            <p>
              {isEn
                ? "When you contact us by email or via a contact form, we store the submitted details (name, email address, message, and time of enquiry) in order to process your request. This data will not be passed on to third parties without your consent. We delete the data once the purpose of processing no longer applies and no statutory retention obligations exist."
                : "Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, speichern wir die übermittelten Angaben (Name, E-Mail-Adresse, Nachricht sowie Zeitpunkt der Anfrage) zur Bearbeitung Ihrer Anfrage. Diese Daten werden nicht ohne Ihre Einwilligung an Dritte weitergegeben. Wir löschen die Daten, sobald der Zweck der Bearbeitung entfällt und keine gesetzlichen Aufbewahrungspflichten bestehen."}
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "6. Appointment Booking via Calendly" : "6. Terminbuchung via Calendly"}
            </h2>
            <p>
              {isEn ? (
                <>
                  For online appointment booking, we use the service{" "}
                  <strong className="text-[#F4F4F5]">Calendly</strong> (Calendly LLC, 271 17th St NW, 10th Floor, Atlanta, Georgia 30363, USA). When you book an appointment via Calendly, your name, email address, appointment details, and any additional information you provide are transmitted to Calendly.
                </>
              ) : (
                <>
                  Für die Online-Terminbuchung verwenden wir den Dienst{" "}
                  <strong className="text-[#F4F4F5]">Calendly</strong> (Calendly LLC, 271 17th St NW, 10th Floor, Atlanta, Georgia 30363, USA). Wenn Sie über Calendly einen Termin vereinbaren, werden Name, E-Mail-Adresse, Termin und ggf. weitere von Ihnen eingegebene Angaben an Calendly übermittelt.
                </>
              )}
            </p>
            <p className="mt-3">
              {isEn ? (
                <>
                  As Calendly is based in the USA, data is transferred to the USA. Calendly uses Standard Contractual Clauses of the EU Commission as the basis for international data transfers. More information on data processing by Calendly:{" "}
                  <a href="https://calendly.com/privacy" className="text-[#0066FF] hover:text-[#3385FF]" target="_blank" rel="noopener noreferrer">
                    calendly.com/privacy
                  </a>
                </>
              ) : (
                <>
                  Da Calendly in den USA ansässig ist, findet ein Datentransfer in die USA statt. Calendly verwendet Standardvertragsklauseln der EU-Kommission als Grundlage für internationale Datenübermittlungen. Weitere Informationen zur Datenverarbeitung durch Calendly:{" "}
                  <a href="https://calendly.com/privacy" className="text-[#0066FF] hover:text-[#3385FF]" target="_blank" rel="noopener noreferrer">
                    calendly.com/privacy
                  </a>
                </>
              )}
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "7. WhatsApp Communication" : "7. WhatsApp-Kommunikation"}
            </h2>
            <p>
              {isEn ? (
                <>
                  Our website offers the option to contact us via{" "}
                  <strong className="text-[#F4F4F5]">WhatsApp</strong> (Meta Platforms Ireland Ltd.). When you use this link, data — in particular your phone number and message content — is transmitted to WhatsApp/Meta. The privacy policy of Meta applies to data processing by WhatsApp.
                </>
              ) : (
                <>
                  Auf unserer Website bieten wir die Möglichkeit, uns über{" "}
                  <strong className="text-[#F4F4F5]">WhatsApp</strong> (Meta Platforms Ireland Ltd.) zu kontaktieren. Wenn Sie diesen Link verwenden, werden Daten - insbesondere Ihre Telefonnummer und der Nachrichteninhalt - an WhatsApp/Meta übermittelt. Für die Datenverarbeitung durch WhatsApp gilt die Datenschutzrichtlinie von Meta.
                </>
              )}
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "8. Cookies and Tracking" : "8. Cookies und Tracking"}
            </h2>
            <p>
              {isEn
                ? "Our website uses technically necessary cookies required for the operation of the website. These cookies do not store personal data and are automatically deleted when the browser is closed. We do not use any tracking or analytics cookies from third-party providers."
                : "Unsere Website verwendet technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Diese Cookies speichern keine Personendaten und werden beim Schliessen des Browsers automatisch gelöscht. Wir setzen keine Tracking- oder Analyse-Cookies von Drittanbietern ein."}
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "9. Data Security" : "9. Datensicherheit"}
            </h2>
            <p>
              {isEn
                ? "We use technical and organisational security measures to protect your personal data against loss, destruction, unauthorised access, unauthorised modification, or unauthorised disclosure. Data transmission between your browser and our servers is encrypted via TLS/HTTPS."
                : "Wir setzen technische und organisatorische Sicherheitsmassnahmen ein, um Ihre personenbezogenen Daten gegen Verlust, Zerstörung, unberechtigten Zugriff, unberechtigte Änderung oder unberechtigte Weitergabe zu schützen. Die Übertragung von Daten zwischen Ihrem Browser und unseren Servern erfolgt verschlüsselt via TLS/HTTPS."}
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "10. Your Rights" : "10. Ihre Rechte"}
            </h2>
            <p>
              {isEn
                ? "Under the Swiss Federal Act on Data Protection (revFADP), you have the following rights:"
                : "Gestützt auf das schweizerische Datenschutzgesetz (nDSG) stehen Ihnen folgende Rechte zu:"}
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1.5">
              {isEn ? (
                <>
                  <li><strong className="text-[#F4F4F5]">Right of access:</strong> You may request information about the personal data stored about you at any time.</li>
                  <li><strong className="text-[#F4F4F5]">Right to rectification:</strong> You may request the correction of inaccurate data.</li>
                  <li><strong className="text-[#F4F4F5]">Right to erasure:</strong> You may request the deletion of your personal data, unless statutory retention obligations apply.</li>
                  <li><strong className="text-[#F4F4F5]">Right to restriction:</strong> You may request the restriction of the processing of your data.</li>
                  <li><strong className="text-[#F4F4F5]">Right to object:</strong> You may object to the processing of your data.</li>
                  <li><strong className="text-[#F4F4F5]">Data portability:</strong> You may request that your data be provided in a common electronic format.</li>
                </>
              ) : (
                <>
                  <li><strong className="text-[#F4F4F5]">Auskunftsrecht:</strong> Sie können jederzeit Auskunft über die bei uns gespeicherten Personendaten verlangen.</li>
                  <li><strong className="text-[#F4F4F5]">Berichtigungsrecht:</strong> Sie können die Berichtigung unrichtiger Daten verlangen.</li>
                  <li><strong className="text-[#F4F4F5]">Löschungsrecht:</strong> Sie können die Löschung Ihrer Personendaten verlangen, soweit keine gesetzliche Aufbewahrungspflicht besteht.</li>
                  <li><strong className="text-[#F4F4F5]">Einschränkungsrecht:</strong> Sie können die Einschränkung der Bearbeitung Ihrer Daten verlangen.</li>
                  <li><strong className="text-[#F4F4F5]">Widerspruchsrecht:</strong> Sie können der Bearbeitung Ihrer Daten widersprechen.</li>
                  <li><strong className="text-[#F4F4F5]">Datenportabilität:</strong> Sie können die Herausgabe Ihrer Daten in einem gängigen elektronischen Format verlangen.</li>
                </>
              )}
            </ul>
            <p className="mt-4">
              {isEn ? "To exercise your rights, please contact:" : "Zur Ausübung Ihrer Rechte wenden Sie sich an:"}{" "}
              <a href="mailto:info@spectramedia.ch" className="text-[#0066FF] hover:text-[#3385FF]">
                info@spectramedia.ch
              </a>
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "11. Right to Lodge a Complaint with the Supervisory Authority" : "11. Beschwerderecht bei der Aufsichtsbehörde"}
            </h2>
            <p>
              {isEn ? (
                <>
                  You have the right to lodge a complaint with the Federal Data Protection and Information Commissioner (FDPIC):{" "}
                  <a href="https://www.edoeb.admin.ch" className="text-[#0066FF] hover:text-[#3385FF]" target="_blank" rel="noopener noreferrer">
                    www.edoeb.admin.ch
                  </a>
                </>
              ) : (
                <>
                  Sie haben das Recht, eine Beschwerde beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) einzureichen:{" "}
                  <a href="https://www.edoeb.admin.ch" className="text-[#0066FF] hover:text-[#3385FF]" target="_blank" rel="noopener noreferrer">
                    www.edoeb.admin.ch
                  </a>
                </>
              )}
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "12. Changes to This Privacy Policy" : "12. Änderungen dieser Datenschutzerklärung"}
            </h2>
            <p>
              {isEn
                ? "We reserve the right to update this privacy policy at any time to reflect changes in legal requirements or changes to our services. The current version is available on this page."
                : "Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen, um sie an geänderte rechtliche Anforderungen oder an Änderungen unserer Dienstleistungen anzupassen. Die jeweils aktuelle Version ist auf dieser Seite abrufbar."}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
