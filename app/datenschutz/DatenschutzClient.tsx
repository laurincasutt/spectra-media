"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function DatenschutzClient({ initialLang }: { initialLang?: "de" | "en" }) {
  const { lang, setLang } = useLanguage();
  // ?lang=en / ?lang=de: render that language on the server and on first paint,
  // then hand over to the normal DE/EN switcher (which then shows the same language).
  const [synced, setSynced] = useState(!initialLang);
  useEffect(() => {
    if (initialLang) {
      setLang(initialLang);
      setSynced(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isEn = (synced ? lang : initialLang) === "en";

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
            <p className="mt-3">
              {isEn
                ? "This privacy policy applies to our website www.spectramedia.ch, to our client portal Content Hub (contenthub.spectramedia.ch and the related client subdomains) and to our apps on the Meta and TikTok platforms."
                : "Diese Datenschutzerklärung gilt für unsere Website www.spectramedia.ch, für unser Kundenportal Content Hub (contenthub.spectramedia.ch und die zugehörigen Kunden-Subdomains) sowie für unsere Apps auf den Plattformen von Meta und TikTok."}
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
                  <li>If a person sends the account a direct message or replies to our message: the content of that message and any information they provide voluntarily (for example an email address to receive the requested material).</li>
                </>
              ) : (
                <>
                  <li>Vom verbundenen Konto: Kontoname, Konto-ID, die eigenen Beiträge (Bildtext, Link, Datum, Anzahl Kommentare) sowie ein Zugriffstoken, das wir verschlüsselt speichern.</li>
                  <li>Von Personen, die unter diesen Beiträgen kommentieren: Benutzername, die von Instagram vergebene Nutzer-ID, Text und Zeitpunkt des Kommentars.</li>
                  <li>Wenn eine Person ein von unserer Kundin oder unserem Kunden festgelegtes Schlagwort kommentiert: der Inhalt der Direktnachricht, die wir im Auftrag des Kontos senden, und ein Protokoll, wann welche Nachricht gesendet wurde.</li>
                  <li>Wenn eine Person dem Konto eine Direktnachricht schreibt oder auf unsere Nachricht antwortet: der Inhalt dieser Nachricht und Angaben, die sie dabei freiwillig macht (zum Beispiel eine E-Mail-Adresse, um das angefragte Material zu erhalten).</li>
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

            <p className="mt-4">
              <strong className="text-[#F4F4F5]">TikTok:</strong>{" "}
              {isEn
                ? "In the same way we reply to comments on our clients’ TikTok accounts through our own TikTok app (TikTok API for Business, “Spectra Content Hub”). We process the account name, the account’s videos, comments (username, text, time) and the replies sent. When a TikTok account is disconnected, we revoke access at TikTok and delete all data of that account."
                : "Auf dieselbe Weise beantworten wir Kommentare auf den TikTok-Konten unserer Kundinnen und Kunden über eine eigene App bei TikTok (TikTok API for Business, „Spectra Content Hub“). Bearbeitet werden Kontoname, Videos des Kontos, Kommentare (Benutzername, Text, Zeitpunkt) sowie die gesendeten Antworten. Wird ein TikTok-Konto getrennt, widerrufen wir den Zugriff bei TikTok und löschen alle Daten dieses Kontos."}
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
              {isEn ? "9. Client portal Content Hub" : "9. Kundenportal Content Hub"}
            </h2>
            <p>
              {isEn
                ? "To work with our clients we operate the portal Content Hub. Clients log in to see their content, appointments and metrics and to upload material. Our team uses the same application as its working tool."
                : "Für die Zusammenarbeit mit unseren Kundinnen und Kunden betreiben wir das Portal Content Hub. Kundinnen und Kunden melden sich dort an, sehen ihre Inhalte, Termine und Kennzahlen und laden Material hoch. Unser Team nutzt dieselbe Anwendung als Arbeitswerkzeug."}
            </p>

            <p className="mt-4">
              <strong className="text-[#F4F4F5]">{isEn ? "Data we process" : "Welche Daten wir bearbeiten"}</strong>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1.5">
              {isEn ? (
                <>
                  <li>Access: name, email address and password (stored only as an encrypted hash) of people with an account, i.e. clients, our team and freelancers (for example video editors).</li>
                  <li>Client data: company and contact details, onboarding information, contracts and signatures, brand documents and logos, goals, reports, tasks and the content plan.</li>
                  <li>Content: uploaded voice messages, videos and links, and the transcripts, scripts and captions created from them.</li>
                  <li>Calls: recordings, transcripts and summaries of video calls, where the call was recorded with Fathom, as well as booked appointments (Calendly, Google Calendar).</li>
                  <li>Metrics of our clients’ social media channels (reach, views, interactions per post) and the scheduling of posts.</li>
                  <li>Prospective clients: contact details, call notes and a summary to prepare for calls. Such summaries and assessments may be created with the help of AI. They are used for internal preparation only; we do not make automated individual decisions.</li>
                  <li>For research: publicly available posts of other social media accounts and newsletters we subscribe to, in order to find topics for our clients.</li>
                </>
              ) : (
                <>
                  <li>Zugang: Name, E-Mail-Adresse und Passwort (nur als verschlüsselter Hashwert gespeichert) der Personen mit einem Zugang, das heisst Kundinnen und Kunden, unser Team und freie Mitarbeitende (zum Beispiel Videoeditoren).</li>
                  <li>Kundendaten: Firmen- und Kontaktangaben, Angaben aus dem Onboarding, Verträge und Unterschriften, Markendokumente und Logos, Ziele, Berichte, Aufgaben und der Content-Plan.</li>
                  <li>Inhalte: hochgeladene Sprachnachrichten, Videos und Links, daraus erstellte Transkripte, Skripte und Bildunterschriften.</li>
                  <li>Gespräche: Aufzeichnungen, Transkripte und Zusammenfassungen von Videocalls, sofern das Gespräch mit Fathom aufgezeichnet wurde, sowie gebuchte Termine (Calendly, Google Kalender).</li>
                  <li>Kennzahlen der Social-Media-Kanäle unserer Kundinnen und Kunden (Reichweite, Aufrufe, Interaktionen je Beitrag) und die Planung von Beiträgen.</li>
                  <li>Interessentinnen und Interessenten: Kontaktangaben, Gesprächsnotizen und eine Zusammenfassung zur Vorbereitung von Gesprächen. Solche Zusammenfassungen und Einschätzungen können mit Unterstützung von KI erstellt werden. Sie dienen nur der internen Vorbereitung; wir treffen keine automatisierten Einzelentscheidungen.</li>
                  <li>Für die Recherche: öffentlich zugängliche Beiträge anderer Social-Media-Konten und Newsletter, die wir abonniert haben, um Themen für unsere Kundinnen und Kunden zu finden.</li>
                </>
              )}
            </ul>

            <p className="mt-4">
              <strong className="text-[#F4F4F5]">{isEn ? "Purposes" : "Wofür"}</strong>:{" "}
              {isEn
                ? "to provide our contractual services (strategy, scripts, editing, scheduling and publishing, community management, reporting), to communicate with our clients and to initiate new collaborations."
                : "zur Erbringung unserer vertraglichen Leistungen (Strategie, Skripte, Schnitt, Planung und Veröffentlichung, Community Management, Auswertung), zur Kommunikation mit unseren Kundinnen und Kunden sowie zur Anbahnung neuer Zusammenarbeit."}
            </p>

            <p className="mt-4">
              {isEn ? (
                <><strong className="text-[#F4F4F5]">Service providers</strong> (processors) to which we transmit data for this purpose:</>
              ) : (
                <><strong className="text-[#F4F4F5]">Dienstleister</strong> (Auftragsbearbeiter), an die wir dafür Daten übermitteln:</>
              )}
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1.5">
              {isEn ? (
                <>
                  <li>Supabase Inc. (database and file storage, stored in Switzerland)</li>
                  <li>Vercel Inc., USA (application hosting, data centre in Frankfurt)</li>
                  <li>Inngest Inc., USA (running background tasks)</li>
                  <li>Anthropic PBC, USA (AI model Claude: scripts, summaries, reply drafts)</li>
                  <li>OpenAI, L.L.C., USA (AI model for captions)</li>
                  <li>Groq Inc., USA (transcription of voice messages and videos)</li>
                  <li>Resend Inc., USA (sending emails)</li>
                  <li>Fathom Video Inc., USA (recording and transcription of video calls)</li>
                  <li>Calendly LLC, USA (appointment booking)</li>
                  <li>Google (Drive for client folders, Calendar)</li>
                  <li>Metricool (metrics and post scheduling)</li>
                  <li>Apify (retrieval of publicly available social media posts)</li>
                  <li>Meta Platforms Ireland Ltd. and TikTok (execution on their platforms)</li>
                </>
              ) : (
                <>
                  <li>Supabase Inc. (Datenbank und Dateiablage, Speicherort Schweiz)</li>
                  <li>Vercel Inc., USA (Hosting der Anwendung, Rechenzentrum in Frankfurt)</li>
                  <li>Inngest Inc., USA (Ausführung von Hintergrundaufgaben)</li>
                  <li>Anthropic PBC, USA (KI-Modell Claude: Skripte, Zusammenfassungen, Antwortentwürfe)</li>
                  <li>OpenAI, L.L.C., USA (KI-Modell für Bildunterschriften)</li>
                  <li>Groq Inc., USA (Transkription von Sprachnachrichten und Videos)</li>
                  <li>Resend Inc., USA (Versand von E-Mails)</li>
                  <li>Fathom Video Inc., USA (Aufzeichnung und Transkription von Videocalls)</li>
                  <li>Calendly LLC, USA (Terminbuchung)</li>
                  <li>Google (Drive für Kundenordner, Kalender)</li>
                  <li>Metricool (Kennzahlen und Planung von Beiträgen)</li>
                  <li>Apify (Abruf öffentlich zugänglicher Social-Media-Beiträge)</li>
                  <li>Meta Platforms Ireland Ltd. und TikTok (Ausführung auf den Plattformen)</li>
                </>
              )}
            </ul>

            <p className="mt-4">
              {isEn
                ? "For providers in the USA we rely on their contractual data protection safeguards (standard contractual clauses). Under the terms of the AI providers, data we transmit through their interfaces is not used to train their models."
                : "Bei Anbietern in den USA stützen wir uns auf deren vertragliche Datenschutzgarantien (Standardvertragsklauseln). Nach den Bedingungen der KI-Anbieter werden Daten, die wir über ihre Schnittstellen übermitteln, nicht zum Training ihrer Modelle verwendet."}
            </p>

            <p className="mt-4">
              <strong className="text-[#F4F4F5]">{isEn ? "Retention" : "Speicherdauer"}</strong>:{" "}
              {isEn
                ? "We store the data for the duration of the collaboration. Afterwards we deactivate the account and keep business records for as long as required by law (in Switzerland generally 10 years). Other data is deleted on request to "
                : "Wir speichern die Daten für die Dauer der Zusammenarbeit. Danach legen wir den Zugang still und bewahren Geschäftsunterlagen so lange auf, wie es gesetzlich vorgeschrieben ist (in der Schweiz in der Regel 10 Jahre). Übrige Daten löschen wir auf Anfrage an "}
              <a href="mailto:info@spectramedia.ch" className="text-[#0066FF] hover:text-[#3385FF]">info@spectramedia.ch</a>.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "10. Cookies and Tracking" : "10. Cookies und Tracking"}
            </h2>
            <p>
              {isEn
                ? "Our website uses only technically necessary cookies. In the client portal Content Hub we additionally use cookies required for logging in (the session of the logged-in person) and cookies for settings such as language and light or dark mode. These cookies serve operation only, not analysis. We do not use tracking or analytics cookies from third parties, neither on the website nor in the portal."
                : "Unsere Website verwendet nur technisch notwendige Cookies. Im Kundenportal Content Hub setzen wir zusätzlich Cookies, die für die Anmeldung nötig sind (Sitzung der angemeldeten Person), sowie Cookies für Einstellungen wie Sprache und helle oder dunkle Darstellung. Diese Cookies dienen nur dem Betrieb, nicht der Auswertung. Wir setzen weder auf der Website noch im Portal Tracking- oder Analyse-Cookies von Drittanbietern ein."}
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "11. Data Security" : "11. Datensicherheit"}
            </h2>
            <p>
              {isEn
                ? "We use technical and organisational security measures to protect your personal data against loss, destruction, unauthorised access, unauthorised modification, or unauthorised disclosure. Data transmission between your browser and our servers is encrypted via TLS/HTTPS."
                : "Wir setzen technische und organisatorische Sicherheitsmassnahmen ein, um Ihre personenbezogenen Daten gegen Verlust, Zerstörung, unberechtigten Zugriff, unberechtigte Änderung oder unberechtigte Weitergabe zu schützen. Die Übertragung von Daten zwischen Ihrem Browser und unseren Servern erfolgt verschlüsselt via TLS/HTTPS."}
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "12. Your Rights" : "12. Ihre Rechte"}
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

          {/* 13 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "13. Right to Lodge a Complaint with the Supervisory Authority" : "13. Beschwerderecht bei der Aufsichtsbehörde"}
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

          {/* 14 */}
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              {isEn ? "14. Changes to This Privacy Policy" : "14. Änderungen dieser Datenschutzerklärung"}
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
