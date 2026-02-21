import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#09090B] pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#F4F4F5] mb-8">
          Datenschutzerklärung
        </h1>
        <div className="space-y-8 text-[#A1A1AA] text-base leading-relaxed">
          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und
              Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend
              kurz „Daten") innerhalb unseres Onlineangebotes und der mit ihm
              verbundenen Webseiten, Funktionen und Inhalte auf.
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              2. Verantwortliche Stelle
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              Spectra Media GmbH, Zürich, Schweiz
              <br />
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
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              3. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p>
              Beim Besuch unserer Website werden durch den auf Ihrem Endgerät
              zum Einsatz kommenden Browser automatisch Informationen an den
              Server unserer Website gesendet. Diese Informationen werden
              temporär in einem sogenannten Logfile gespeichert. Folgende
              Informationen werden dabei ohne Ihr Zutun erfasst und bis zur
              automatisierten Löschung gespeichert: IP-Adresse des anfragenden
              Rechners, Datum und Uhrzeit des Zugriffs, Name und URL der
              abgerufenen Datei, Website, von der aus der Zugriff erfolgt
              (Referrer-URL), verwendeter Browser und ggf. das Betriebssystem
              Ihres Rechners.
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              4. Weitergabe von Daten
            </h2>
            <p>
              Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen
              als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir
              geben Ihre persönlichen Daten nur an Dritte weiter, wenn Sie Ihre
              ausdrückliche Einwilligung dazu erteilt haben, die Weitergabe zur
              Erfüllung eines Vertrags erforderlich ist, oder wir gesetzlich
              hierzu verpflichtet sind.
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              5. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben ausserdem ein Recht,
              die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
              sich jederzeit unter der im Impressum angegebenen Adresse an uns
              wenden.
            </p>
          </div>

          <div>
            <h2 className="text-[#F4F4F5] text-xl font-semibold mb-3">
              6. Calendly
            </h2>
            <p>
              Auf unserer Website nutzen wir den Dienst Calendly für die
              Terminbuchung. Anbieter ist Calendly LLC, 271 17th St NW, 10th
              Floor, Atlanta, Georgia 30363, USA. Wenn Sie einen Termin über
              Calendly buchen, werden die von Ihnen eingegebenen Daten an
              Calendly übermittelt. Weitere Informationen finden Sie in der
              Datenschutzerklärung von Calendly unter: https://calendly.com/privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
