import Page from "@/components/Page.tsx";
import PageTitle from "@/components/PageTitle.tsx";


const LegalPage = () => {
    return (
        <>
            <PageTitle value={'Impressum'}/>

            <Page className={'pt-16 md:pt-[20px]'}>
                <h1 className={'leading-[24px] md:leading-[108px] text-primary'}>Impressum</h1>
            </Page>

            <div className={'mt-[20px] md:mt-[44px] relative mb-[30px] md:mb-[100px]'}>
                <Page>
                    <div
                        className={'relative z-[9] bg-white px-[20px] md:px-[105px] py-[15px] md:py-[68px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 rounded-3xl text-sm leading-[18px] md:leading-[29px]'}
                        style={{boxShadow: '0px 0px 22.6px 0px #00000029'}}>
                        <div>
                            <p className={'font-bold'}>Adresse</p>

                            <ul className={'list-disc pl-8 text-[#717171] md:text-black'}>
                                <li>GeoAnalysis-Engineering GmbH</li>
                                <li>Schauenburgerstrasse 116</li>
                                <li>24118 Kiel, Deutschland</li>
                            </ul>
                        </div>

                        <div>
                            <p className={'font-bold'}>Kontakt</p>

                            <ul className={'list-disc pl-8 text-[#717171] md:text-black'}>
                                <li>Telefon: +49 431 53032960</li>
                                <li>E-Mail: info@geoanalysis-engineering.de</li>
                            </ul>
                        </div>

                        <div>
                            <p className={'font-bold'}>Vertretungsberechtigter Geschäftsführer:</p>

                            <p>Dr.-Ing. Zarghaam Haider Rizvi</p>
                        </div>

                        <div>
                            <p className={'font-bold'}>Rechtliche Hinweise</p>

                            <ul className={'list-disc pl-8 text-[#717171] md:text-black'}>
                                <li>Registergericht: Amtsgericht Kiel Registernummer: HRB 21359 KI</li>
                                <li>Umsatzsteuer-Identifikationsnummer: DE328789954</li>
                                <li>Plattform der EU-Kommission zur Online-Streitbeilegung: <a
                                    href="https://ec.europa.eu/odr">https://ec.europa.eu/odr</a></li>
                                <li>Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
                                    Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
                                </li>
                            </ul>
                        </div>
                    </div>
                </Page>

                <div className={'absolute w-full bg-primary h-[80%] top-[50%] -translate-y-[50%]'}></div>
            </div>

            <Page className='mb-[30px] md:mb-[110px]'>
                <h3>Datenschutzerklärung</h3>
                <hr className='my-[10px] md:my-[22px] border-[1px] md:border-[4px] border-primary w-[125px]'/>

                <h5 className="text-sm md:text-[18px] md:font-[700] leading-24 leading-[27px]">1) Einleitung und
                    Kontaktdaten des Verantwortlichen</h5>

                <ul className={'text-[#717171] md:text-black list-disc pl-10 pt-2 md:pt-5 pr-4 pb-2 md:pb-0 md:pr-0 text-sm leading-[18px] md:leading-[24px]'}>
                    <li>1.1 Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns für Ihr Interesse. Im
                        Folgenden informieren wir Sie über den Umgang mit Ihren personenbezogenen Daten bei der Nutzung
                        unserer Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie persönlich
                        identifiziert werden können.
                    </li>
                    <li>1 1.2 Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der
                        Datenschutz-Grundverordnung (DSGVO) ist GeoAnalysis-Engineering GmbH, Schauenburgerstrasse 116,
                        24118 Kiel, Deutschland, Tel.: +49431-53032960, E-Mail: info@geoanalysis-engineering.de. Der für
                        die Verarbeitung von personenbezogenen Daten Verantwortliche ist diejenige natürliche oder
                        juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
                        Verarbeitung von personenbezogenen Daten entscheidet.
                    </li>
                    <li>1 1.3 Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                        personenbezogener Daten und anderer vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an
                        den Verantwortlichen) eine SSL-bzw. TLS-Verschlüsselung. Sie können eine verschlüsselte
                        Verbindung an der Zeichenfolge „https://“ und dem Schloss-Symbol in Ihrer Browserzeile erkennen.
                    </li>
                </ul>
                {/*second*/}
                <h5 className="text-sm md:text-[18px] md:font-[700] leading-24 leading-[27px] mt-4">2) Datenerfassung
                    beim Besuch unserer Website</h5>

                <ul className={'text-[#717171] md:text-black list-disc pl-10 pt-2 md:pt-5 pr-4 pb-2 md:pb-0 md:pr-0 text-sm leading-[18px] md:leading-[24px]'}>
                    <li>Bei der bloß informatorischen Nutzung unserer Website, also wenn Sie sich nicht registrieren
                        oder uns anderweitig Informationen übermitteln, erheben wir nur solche Daten, die Ihr Browser an
                        unseren Server übermittelt (sog. „Server-Logfiles“). Wenn Sie unsere Website aufrufen, erheben
                        wir die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen die Website
                        anzuzeigen:
                    </li>
                    <li>Unsere besuchte Website</li>
                    <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
                    <li>Menge der gesendeten Daten in Byte</li>
                    <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
                    <li>Verwendeter Browser</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
                    <li>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten
                        Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website. Eine
                        Weitergabe oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten uns
                        allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete Anhaltspunkte
                        auf eine rechtswidrige Nutzung hinweisen.
                    </li>
                </ul>
                {/*second*/}
                <h5 className="text-sm md:text-[18px] md:font-[700] leading-24 leading-[27px] mt-4">3) Cookies</h5>

                <ul className={'text-[#717171] md:text-black list-disc pl-10 pt-2 md:pt-5 pr-4 pb-2 md:pb-0 md:pr-0 text-sm leading-[18px] md:leading-[24px]'}>
                    <li>Sofern durch einzelne von uns implementierte Cookies auch personenbezogene Daten verarbeitet
                        werden, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchführung des
                        Vertrages oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen an
                        der bestmöglichen Funktionalität der Website sowie einer kundenfreundlichen und effektiven
                        Ausgestaltung des Seitenbesuchs.
                    </li>
                    <li>Wir arbeiten unter Umständen mit Werbepartnern zusammen, die uns helfen, unser Internetangebot
                        für Sie interessanter zu gestalten. Zu diesem Zweck werden für diesen Fall bei Ihrem Besuch
                        unserer Website auch Cookies von Partnerunternehmen auf Ihrer Festplatte gespeichert (Cookies
                        von Drittanbietern). Wenn wir mit vorbenannten Werbepartnern zusammenarbeiten, werden Sie über
                        den Einsatz derartiger Cookies und den Umfang der jeweils erhobenen Informationen innerhalb der
                        nachstehenden Absätze individuell und gesondert informiert.
                    </li>
                    <li>Bitte beachten Sie, dass Sie Ihren Browser so einstellen können, dass Sie über das Setzen von
                        Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme von
                        Cookies für bestimmte Fälle oder generell ausschließen können. Jeder Browser unterscheidet sich
                        in der Art, wie er die Cookie-Einstellungen verwaltet. Diese ist in dem Hilfemenü jedes Browsers
                        beschrieben, welches Ihnen erläutert, wie Sie Ihre Cookie-Einstellungen ändern können. Diese
                        finden Sie für die jeweiligen Browser unter den folgenden Links:
                    </li>
                    <li>Microsoft
                        Edge:https://support.microsoft.com/de-de/microsoft-edge/temporäres-zulassen-von-cookies-u
                        nd-website-daten-in-microsoft-edge-597f04f2-c0ce-f08c-7c2b-541086362bd2 Firefox:
                        https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen
                    </li>
                    <li>Chrome:http://support.google.com/chrome/bin/answer.py?hl=de&hlrm=en&answer=95647Safari:
                        https://support.apple.com/de-de/guide/safari/sfri11471/macOpera:
                        http://help.opera.com/Windows/10.20/de/cookies.html
                    </li>
                    <li>Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalität unserer Website
                        eingeschränkt sein kann.
                    </li>
                </ul>
                {/*second*/}
                <h5 className="text-sm md:text-[18px] md:font-[700] leading-24 leading-[27px] mt-4">4)
                    Kontaktaufnahme</h5>

                <ul className={'text-[#717171] md:text-black list-disc pl-10 pt-2 md:pt-5 pr-4 pb-2 md:pb-0 md:pr-0 text-sm leading-[18px] md:leading-[24px]'}>
                    <li>Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden
                        personenbezogene Daten erhoben. Welche Daten im Falle der Nutzung eines Kontaktformulars erhoben
                        werden, ist aus dem jeweiligen Kontaktformular ersichtlich. Diese Daten werden ausschließlich
                        zum Zweck der Beantwortung Ihres Anliegens bzw. für die Kontaktaufnahme und die damit verbundene
                        technische Administration gespeichert und verwendet. Rechtsgrundlage für die Verarbeitung dieser
                        Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1
                        lit. f DSGVO. Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab, so ist zusätzliche
                        Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden nach
                        abschließender Bearbeitung Ihrer Anfrage gelöscht. Dies ist der Fall, wenn sich aus den
                        Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist und sofern
                        keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                    </li>
                </ul>
                {/*second*/}
                <h5 className="text-sm md:text-[18px] md:font-[700] leading-24 leading-[27px] mt-4">5) Rechte des
                    Betroffenen</h5>

                <ul className={'text-[#717171] md:text-black list-disc pl-10 pt-2 md:pt-5 pr-4 pb-2 md:pb-0 md:pr-0 text-sm leading-[18px] md:leading-[24px]'}>
                    <p className='-ml-[38px]'>5.1 Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem
                        Verantwortlichen hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten die nachstehenden
                        Betroffenenrechte (Auskunfts- und Interventionsrechte), wobei für die jeweiligen
                        Ausübungsvoraussetzungen auf die angeführte Rechtsgrundlage verwiesen wird:</p>
                    <li>Recht auf Berichtigung gemäß Art. 16 DSGVO;</li>
                    <li>Recht auf Löschung gemäß Art. 17 DSGVO;</li>
                    <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO;</li>
                    <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO;</li>
                    <li>Recht auf Unterrichtung gemäß Art. 19 DSGVO;</li>
                    <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO;</li>
                    <li>Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO;</li>
                    <li>Recht auf Beschwerde gemäß Art. 77 DSGVO.</li>
                    <p className='-ml-[38px]'>5.2 WIDERSPRUCHSRECHT</p>
                    <p className='-ml-[38px]'>WENN WIR IM RAHMEN EINER INTERESSENABWÄGUNG IHRE PERSONENBEZOGENEN DATEN
                        AUFGRUND UNSERES ÜBERWIEGENDEN BERECHTIGTEN INTERESSES VERARBEITEN, HABEN SIE DAS JEDERZEITIGE
                        RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG
                        WIDERSPRUCH MIT WIRKUNG FÜR DIE ZUKUNFT EINZULEGEN.MACHEN SIE VON IHREM WIDERSPRUCHSRECHT
                        GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN. EINE WEITERVERARBEITUNG BLEIBT
                        ABER VORBEHALTEN, WENN WIR ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN
                        KÖNNEN, DIE IHRE INTERESSEN, GRUNDRECHTE UND GRUNDFREIHEITEN ÜBERWIEGEN, ODER WENN DIE
                        VERARBEITUNG DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN DIENT. WERDEN
                        IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS
                        RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM
                        ZWECKE DERARTIGER WERBUNG EINZULEGEN. SIE KÖNNEN DEN WIDERSPRUCH WIE OBEN BESCHRIEBEN AUSÜBEN.
                        MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN
                        DATEN ZU DIREKTWERBEZWECKEN.</p>
                </ul>
                {/*second*/}
                <h5 className="text-sm md:text-[18px] md:font-[700] leading-24 leading-[27px] mt-4">6) Dauer der
                    Speicherung personenbezogener Daten</h5>

                <ul className={'text-[#717171] md:text-black list-disc pl-10 pt-2 md:pt-5 pr-4 pb-2 md:pb-0 md:pr-0 text-sm leading-[18px] md:leading-[24px]'}>
                    <p className='-ml-[38px]'>Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand
                        der jeweiligen Rechtsgrundlage, am Verarbeitungszweck und – sofern einschlägig – zusätzlich
                        anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels- und steuerrechtliche
                        Aufbewahrungsfristen). Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer
                        ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO werden diese Daten so lange
                        gespeichert, bis der Betroffene seine Einwilligung widerruft.</p>
                    <p className='-ml-[38px]'>Existieren gesetzliche Aufbewahrungsfristen für Daten, die im Rahmen
                        rechtsgeschäftlicher bzw. rechtsgeschäftsähnlicher Verpflichtungen auf der Grundlage von Art. 6
                        Abs. 1 lit. b DSGVO verarbeitet werden, werden diese Daten nach Ablauf der Aufbewahrungsfristen
                        routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung
                        erforderlich sind und/oder unsererseits kein berechtigtes Interesse an der Weiterspeicherung
                        fortbesteht.</p>
                    <p className='-ml-[38px]'>Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6
                        Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis der Betroffene sein
                        Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO ausübt, es sei denn, wir können zwingende
                        schutzwürdige Gründe für die Verarbeitung nachweisen, die die Interessen, Rechte und Freiheiten
                        der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder
                        Verteidigung von Rechtsansprüchen. Bei der Verarbeitung von personenbezogenen Daten zum Zwecke
                        der Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange
                        gespeichert, bis der Betroffene sein Widerspruchsrecht nach Art. 21 Abs. 2 DSGVO ausübt.</p>
                    <p className='-ml-[38px]'>Sofern sich aus den sonstigen Informationen dieser Erklärung über spezifische
                    Verarbeitungssituationen nichts anderes ergibt, werden gespeicherte personenbezogene Daten im
                    Übrigen dann gelöscht, wenn sie für die Zwecke, für die sie erhoben oder auf sonstige Weise
                        verarbeitet wurden, nicht mehr notwendig sind.</p>
                </ul>
            </Page>
        </>
    );
}

export default LegalPage;