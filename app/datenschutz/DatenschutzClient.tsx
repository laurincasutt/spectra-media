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
          {isEn ? "Last updated: November 2026" : "Stand: November 2026"}
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
                  <strong className="text-[#F4F4F5]">WhatsApp</strong> (Meta Platforms Ireland Ltd.). When you use this link, data, in particular your phone number and message content, is transmitted to WhatsApp/Meta. The privacy policy of Meta applies to data processing by WhatsApp.
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
              {isEn
                ? "8. Instagram app “Spectra Kommentare” (comments and direct messages)"
                : "8. Instagram-App „Spectra Kommentare“ (Kommentare und Direktnachrichten)"}
            </h2>
            <p>
              {isEn
                ? "We manage Instagram accounts on behalf of our clients. For this we operate our own app on the platform of Meta Platforms Ireland Ltd. (“Spectra Kommentare”). Our clients connect their Instagram account to this app themselves through Meta’s login and decide which Instagram accounts and Facebook Pages we may access. The app is operated by our team only."
                : "Für unsere Kundinnen und Kunden betreuen wir deren Instagram-Konten. Dafür betreiben wir eine eigene App auf der Plattform von Meta Platforms Ireland Ltd. („Spectra Kommentare“). Unsere Kundinnen und Kunden verbinden ihr Instagram-Konto über die Anmeldung von Meta selbst mit dieser App und bestimmen dabei, auf welche Instagram-Konten und Facebook-Seiten wir zugreifen dürfen. Die App wird nur von unserem Team bedient."}
            </p>

            <p className="mt-4">
              <strong className="text-[#F4F4F5]">{isEn ? "Data we process" : "Welche Daten wir bearbeiten"}</strong>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1.5">
              {isEn ? (
                <>
                  <li>From the connected account: account name, account ID, its own posts (caption, link, date, comment count) and an access token, which we store encrypted.</li>
                  <li>From people who comment on these posts: username, the user ID assigned by Instagram, text and time of the comment.</li>
                  <li>If a person comments a keyword defined by our client: the content of the direct message we send on behalf of the account, and a log of which message was sent when.</li>
                </>
              ) : (
                <>
                  <li>Vom verbundenen Konto: Kontoname, Konto-ID, die eigenen Beiträge (Bildtext, Link, Datum, Anzahl Kommentare) sowie ein Zugriffstoken, das wir verschlüsselt speichern.</li>
                  <li>Von Personen, die unter diesen Beiträgen kommentieren: Benutzername, die von Instagram vergebene Nutzer-ID, Text und Zeitpunkt des Kommentars.</li>
                  <li>Wenn eine Person ein von unserer Kundin oder unserem Kunden festgelegtes Schlagwort kommentiert: der Inhalt der Direktnachricht, die wir im Auftrag des Kontos senden, und ein Protokoll, wann welche Nachricht gesendet wurde.</li>
                </>
              )}
            </ul>

            <p className="mt-4">
              <strong className="text-[#F4F4F5]">{isEn ? "Purposes" : "Wofür"}</strong>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1.5">
              {isEn ? (
                <>
                  <li>To reply to comments on behalf of our clients. An AI model (Claude by Anthropic PBC, USA) creates a draft reply; the comment text, username and the post caption are transmitted for this purpose.</li>
                  <li>To automatically send a direct message with the requested content to people who comment a defined keyword (for example “Freebie”). At most one message is sent per comment, and only within 7 days of the comment.</li>
                </>
              ) : (
                <>
                  <li>Um Kommentare im Namen unserer Kundinnen und Kunden zu beantworten. Einen Entwurf der Antwort erstellt ein KI-Modell (Claude von Anthropic PBC, USA). Dabei werden Kommentartext, Benutzername und der Bildtext des Beitrags übermittelt.</li>
                  <li>Um Personen, die ein festgelegtes Schlagwort kommentieren (zum Beispiel „Freebie“), automatisch eine Direktnachricht mit dem angefragten Inhalt zu senden. Je Kommentar geht höchstens eine Nachricht raus, und nur innert 7 Tagen nach dem Kommentar.</li>
                </>
              )}
            </ul>

            <p className="mt-4">
              {isEn
                ? "We do not use this data for advertising, do not build profiles and do not sell it. It is shared only with the service providers we need for this: Meta (execution on Instagram), Anthropic (reply drafts), Vercel Inc. (application hosting) and Supabase Inc. (database, stored in Switzerland). With Anthropic and Vercel, data may be transferred to the USA; we rely on the contractual data protection safeguards of these providers (standard contractual clauses)."
                : "Wir verwenden diese Daten nicht für Werbung, erstellen keine Profile und verkaufen sie nicht. Weitergegeben werden sie nur an die Dienstleister, die wir dafür brauchen: Meta (Ausführung auf Instagram), Anthropic (Antwortentwürfe), Vercel Inc. (Hosting der Anwendung) und Supabase Inc. (Datenbank, Speicherort Schweiz). Bei Anthropic und Vercel können Daten in die USA übermittelt werden; wir stützen uns dabei auf die vertraglichen Datenschutzgarantien dieser Anbieter (Standardvertragsklauseln)."}
            </p>

            <p className="mt-4">
              <strong className="text-[#F4F4F5]">{isEn ? "Retention" : "Speicherdauer"}</strong>:{" "}
              {isEn
                ? "An account’s data is kept as long as the account is connected to the app. When it is disconnected, we fully delete the access token, comments, drafts and send logs of that account."
                : "Die Daten eines Kontos bleiben gespeichert, solange das Konto mit der App verbunden ist. Wird es getrennt, löschen wir Zugriffstoken, Kommentare, Entwürfe und Versandprotokolle dieses Kontos vollständig."}
            </p>

            <h3 id="datenloeschung" className="text-[#F4F4F5] text-lg font-semibold mt-6 mb-3 scroll-mt-32">
              {isEn ? "Deletion of your Instagram data" : "Löschung Ihrer Instagram-Daten"}
            </h3>
            <ul className="list-disc list-inside space-y-1.5">
              {isEn ? (
                <>
                  <li>
                    <strong className="text-[#F4F4F5]">Connected account:</strong> email{" "}
                    <a href="mailto:info@spectramedia.ch" className="text-[#0066FF] hover:text-[#3385FF]">info@spectramedia.ch</a>.
                    {" "}We disconnect the account within 30 days and delete all of the data listed above for that account. You can also revoke access yourself at any time in Facebook (Settings › Business integrations) or in Instagram (Settings › Website permissions › Apps and websites).
                  </li>
                  <li>
                    <strong className="text-[#F4F4F5]">People who commented or received a message:</strong> email{" "}
                    <a href="mailto:info@spectramedia.ch" className="text-[#0066FF] hover:text-[#3385FF]">info@spectramedia.ch</a>
                    {" "}with your Instagram username. We delete all records for that username within 30 days and confirm the deletion by email.
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <strong className="text-[#F4F4F5]">Als verbundenes Konto:</strong> Schreiben Sie an{" "}
                    <a href="mailto:info@spectramedia.ch" className="text-[#0066FF] hover:text-[#3385FF]">info@spectramedia.ch</a>.
                    {" "}Wir trennen das Konto innert 30 Tagen und löschen dabei alle oben genannten Daten dieses Kontos. Zusätzlich können Sie den Zugriff jederzeit selbst entziehen: in Facebook unter Einstellungen › Business-Integrationen, in Instagram unter Einstellungen › Website-Berechtigungen › Apps und Websites.
                  </li>
                  <li>
                    <strong className="text-[#F4F4F5]">Als Person, die kommentiert oder eine Nachricht erhalten hat:</strong> Schreiben Sie an{" "}
                    <a href="mailto:info@spectramedia.ch" className="text-[#0066FF] hover:text-[#3385FF]">info@spectramedia.ch</a>
                    {" "}und nennen Sie Ihren Instagram-Benutzernamen. Wir löschen alle Einträge zu diesem Benutzernamen innert 30 Tagen und bestätigen die Löschung per E-Mail.
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "9. Cookies and Tracking" : "9. Cookies und Tracking"}
            </h2>
            <p>
              {isEn
                ? "Our website uses technically necessary cookies required for the operation of the website. These cookies do not store personal data and are automatically deleted when the browser is closed. We do not use any tracking or analytics cookies from third-party providers."
                : "Unsere Website verwendet technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Diese Cookies speichern keine Personendaten und werden beim Schliessen des Browsers automatisch gelöscht. Wir setzen keine Tracking- oder Analyse-Cookies von Drittanbietern ein."}
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "10. Data Security" : "10. Datensicherheit"}
            </h2>
            <p>
              {isEn
                ? "We use technical and organisational security measures to protect your personal data against loss, destruction, unauthorised access, unauthorised modification, or unauthorised disclosure. Data transmission between your browser and our servers is encrypted via TLS/HTTPS."
                : "Wir setzen technische und organisatorische Sicherheitsmassnahmen ein, um Ihre personenbezogenen Daten gegen Verlust, Zerstörung, unberechtigten Zugriff, unberechtigte Änderung oder unberechtigte Weitergabe zu schützen. Die Übertragung von Daten zwischen Ihrem Browser und unseren Servern erfolgt verschlüsselt via TLS/HTTPS."}
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "11. Your Rights" : "11. Ihre Rechte"}
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
            <p className="mt-3">
              {isEn ? (
                <>For deleting data from our Instagram app, see <a href="#datenloeschung" className="text-[#0066FF] hover:text-[#3385FF]">section 8</a>.</>
              ) : (
                <>Zur Löschung von Daten aus unserer Instagram-App siehe <a href="#datenloeschung" className="text-[#0066FF] hover:text-[#3385FF]">Abschnitt 8</a>.</>
              )}
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "12. Right to Lodge a Complaint with the Supervisory Authority" : "12. Beschwerderecht bei der Aufsichtsbehörde"}
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

          {/* 13 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "13. Changes to This Privacy Policy" : "13. Änderungen dieser Datenschutzerklärung"}
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
