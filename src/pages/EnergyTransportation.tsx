import heroImage from "@/assets/images/energy-transportation/hero.png";
import Page from "@/components/Page.tsx";
import model1Image1 from "@/assets/images/energy-transportation/models/1/model1.png";
import model1Image2 from "@/assets/images/energy-transportation/models/1/model2.png";
import model1Image3 from "@/assets/images/energy-transportation/models/1/model3.png";
import model1Image4 from "@/assets/images/energy-transportation/models/1/model4.png";
import model2Image1 from "@/assets/images/energy-transportation/models/2/model1.png";
import model2Image2 from "@/assets/images/energy-transportation/models/2/model2.png";
import model2Image3 from "@/assets/images/energy-transportation/models/2/model3.png";
import model2Image4 from "@/assets/images/energy-transportation/models/2/model4.png";
import PageTitle from "@/components/PageTitle.tsx";


const EnergyTransportation = () => {

    const models1 = [model1Image1, model1Image2, model1Image3, model1Image4];
    const models2 = [model2Image1, model2Image2, model2Image3, model2Image4];

    return (
        <>
            <PageTitle value={'Energy Transportation'}/>

            <div className={'bg-no-repeat bg-cover bg-center w-full h-[433px] md:h-[600px]'}
                 style={{backgroundImage: `url(${heroImage})`}}>
            </div>
            <div className={'bg-secondary py-[20px] md:py-[58px]'}>
                <h1 className={'text-white text-center leading-[24px] md:leading-[82px]'}>Hoch-und
                    Höchstspannungskabel</h1>
            </div>

            <div className={'mt-[30px] md:mt-[100px]'}>
                <Page>
                    <div className={'py-[20px] md:py-10 px-[54px] md:px-[30px] rounded-[55px]'}
                         style={{boxShadow: '0px 0px 22.6px 0px #00000029'}}>
                        <h3 className={'leading-[24px] md:leading-[51px]'}>Unsere Dienstleistungen</h3>

                        <div className={'mt-[15px] md:mt-[22px] flex flex-col lg:flex-row gap-[10px]'}>
                            <div className={'flex flex-col md:flex-row  max-w-[549px]'}>
                                <ul className={'list-disc space-y-8 pl-5 pr-4 pb-3 md:pb-0 md:pr-0 text-sm text-[#717171] md:text-black leading-[18px] md:leading-[24px]'}>
                                    <li>Thermisch, hydraulisch, diffusiv und elektrotechnisch gekoppelte
                                        Wärmetransportberechnungen für statische und dynamische Lastszenarien von HDÜ-,
                                        HWÜ- und HGÜ-Erdkabelbauvorhaben sowie den Mittelspannungskabelbereich in
                                        geschlossener und offener Bauweise
                                    </li>
                                    <li>Geotechnische, bodenkundliche und thermische Erkundung,
                                        Wärmeleitfähigkeitsmessungen und thermische Clusterung unterschiedlich
                                        textuierter Böden/Bodenprofile von HDÜ-, HWÜ- und HGÜ-Erdkabelbauvorhaben
                                    </li>
                                    <li>Gutachterliche Leistungen für die Planung und ingenieurtechnische Bewertung von
                                        HDÜ-, HWÜ- und HGÜ-Erdkabelbauvorhaben sowie den Mittelspannungskabelbereich
                                    </li>
                                    <li>Geotechnische und Bodenkundliche Baubegleitung von HDÜ-, HWÜ- und HGÜ-
                                        Erdkabelbauvorhaben sowie den Mittelspannungskabelbereich
                                    </li>
                                    <li>Umweltimmissionsbewertung zu HDÜ-, HWÜ- und HGÜ-Erdkabelbauvorhaben im Hinblick
                                        auf die UVPG-Schutzgüter und landwirtschaftliche Belange (Ertragsprognosen,
                                        mikrobiologische Aktivität und Nitratfällung)
                                    </li>
                                </ul>
                            </div>

                            <div className='my-auto mx-auto'>
                                <hr className='border-primary lg:min-h-[571px] w-[250px] md:w-[500px] lg:w-0 border-[1px] lg:border-[4px]'/>
                            </div>

                            <div className='max-w-[549px]'>
                                <ul className={'list-disc space-y-8 pl-5 pr-4 pb-3 md:pb-0 md:pr-0 text-sm text-[#717171] md:text-black leading-[18px] md:leading-[24px]'}>
                                    <li>In situ-Optimierung und thermische Aufbereitung von Bettungsmaterialien
                                        (Simulation, Design und Auswahl) und Hotspot-Analysen durch experimentelle und
                                        numerisch vollständig gekoppelte elektro-thermisch-hydraulische Simulation
                                        statischer und dynamischer Netzauslastungen
                                    </li>
                                    <li>Bodenmanagementkonzepte und Bodenschutzkonzepte für HDÜ-, HWÜ- und
                                        HGÜ-Erdkabelbauvorhaben sowie den Mittelspannungskabelbereich
                                    </li>
                                    <li>In situ Umweltmonitoring und Monitoring von HDÜ-, HWÜ- und
                                        HGÜ-Erdkabelbauvorhaben Mittelspannungskabel mit prozessoptimierter Sensorik
                                    </li>
                                    <li>KI-basierte und drohnengestützte Trassierung von HDÜ-, HWÜ- und
                                        HGÜ-Erdkabelbauvorhaben sowie den Mittelspannungskabelbereich
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Page>
            </div>

            <div className={'bg-white md:bg-[#FFF0F0]'}>
                <Page className={'mt-[30px] md:mt-[82px] pb-[20px] md:pb-[42px]'}>
                    <h3 className={'leading-[24px] md:leading-[51px] text-primary'}>GAE-MODEL I</h3>

                    <div
                        className={'mt-[20px] md:mt-[42px] w-[125px] border-[1px] md:border-[4px] border-primary'}></div>
                </Page>
            </div>

            <div className={'bg-white md:bg-[#FFF0F0] flex'}>
                <div className={'flex-grow bg-primary'}></div>
                <div className={'max-w-page w-full'}>
                    <div
                        className={'py-[20px] md:py-[32px] pl-[20px] md:pl-[72px] pr-[147px] bg-primary w-fit text-white rounded-r-full'}>
                        <p className={'text-[18px] md:text-[22px] leading-[18px] md:leading-[33px]'}>Kopplung von Poro-Thermo-Hydro-Diffusion-Klima- Pflanzen</p>

                        <p className={'text-sm mt-[15px] md:mt[22px]'}>Wärmetransportberechnungen für Umweltemissionen</p>
                        <p className={'text-sm'}>mit unterschiedlichen Szenarien in geschlossener und offener Bauweise:</p>

                        <ul className={'list-disc text-sm pl-5 mt-8 md:mt-10'}>
                            <li>konstante oder dynamische Auslastungsspannung und Verlustleistung</li>
                            <li>Direktverlegung ohne Kabelschutz und Verlegung im Schutzrohr</li>
                            <li>Einsatz unterschiedlicher Bettungsmaterialien</li>
                            <li>Oberflächen- und Fließgewässerquerung</li>
                        </ul>
                    </div>
                </div>
                <div className={'flex-grow'}></div>
            </div>

            <div className={'bg-white md:bg-[#FFF0F0] flex justify-center'}>
                <Page className={'py-[20px] md:py-[42px] grid grid-cols-1 md:grid-cols-2 gap-[20px]'}>
                    {models1.map((model, index) => (
                        <div key={index} className={'max-w-[658px] h-[331px] rounded-[40px] overflow-hidden'}>
                            <img src={model} className={'object-cover object-center w-full h-full'} alt=""/>
                        </div>
                    ))}
                </Page>
            </div>

            <div className={'mt-[30px] md:mt-[100px]'}>
                <Page className={'mt-[30px] md:mt-[82px] pb-[20px] md:pb-[42px]'}>
                    <h3 className={'leading-[24px] md:leading-[51px] text-secondary'}>GAE-MODEL II</h3>

                    <div
                        className={'mt-[20px] md:mt-[42px] w-[125px] border-[1px] md:border-[4px] border-secondary'}></div>
                </Page>
            </div>

            <div className={'flex'}>
                <div className={'flex-grow bg-secondary'}></div>
                <div className={'max-w-page w-full'}>
                    <div
                        className={'py-[20px] md:py-[32px] pl-[20px] md:pl-[72px] pr-[147px] bg-secondary w-fit text-white rounded-r-full'}>
                        <p className={'text-[18px] md:text-[22px] leading-[18px] md:leading-[33px]'}>Kopplung von Elektro-Magnetik-Poro-Thermo-Hydro-Diffusion-Klima-Pflanzen</p>

                        <p className={'text-sm mt-[15px] md:mt[22px]'}>Gekoppelte elektromagnetisch- thermo-hydro-diffusive Wärmetransportberechnungen für die Kabelbemessung, - abstände und Umweltemissionen mit unterschiedlichen Szenarien in geschlossener und offener Bauweise:</p>

                        <ul className={'list-disc text-sm pl-5 mt-8 md:mt-10'}>
                            <li>konstante oder dynamische Auslastungsspannung und Verlustleistung</li>
                            <li>Direktverlegung ohne Kabelschutz und Verlegung im Schutzrohr</li>
                        </ul>
                    </div>
                </div>
                <div className={'flex-grow'}></div>
            </div>

            <div className={'bg-white md:bg-[#FFF0F0] flex justify-center'}>
                <Page className={'py-[20px] md:py-[42px] grid grid-cols-1 md:grid-cols-2 gap-[20px]'}>
                    {models2.map((model, index) => (
                        <div key={index} className={'max-w-[658px] h-[331px] rounded-[40px] overflow-hidden'}>
                            <img src={model} className={'object-cover object-center w-full h-full'} alt=""/>
                        </div>
                    ))}
                </Page>
            </div>

            <Page className='mt-[30px] md:mt-[100px] mb-[20px] md:mb-[50px]'>
                <h3 className='text-[#FF0000] mb-[10px] md:mb-[40px]'>Unsere Referenzen</h3>

                <hr className='mt-[10px] md:mt-[70px] border-[1px] md:border-[4px] border-[#FF0000] w-[50%]'/>
                <div
                    className="border-l-[2px] md:border-l-[7px] border-[#FF0000] py-[15px] md:py-[29px] px-[20px] md:px-[34px]">
                    <p className={'text-[16px] md:text-[18px] font-bold leading-[18ox] md:leading-[27px]'}>Erarbeitung
                        der Musterunterlage Wärmeemmission-P21-NABEG für den Suedlink und den SuedOstLink –
                        Auftraggeber: Vössing Ingenieurgesellschaft mbH, Fugro Germany Land GmbH, Tennet TSO GmbH</p>

                    <p className={'text-[16px] md:text-[18px] font-bold mt-4'}>Wärmetransportberechnungen nach NABEG §
                        21 zur Simulation der Umweltauswirkungen von erdverlegten Kabeln mit dem GAE-Modell I und
                        Ertragsberechnungen / bodenkundliche Bewertung entsprechend der Musterunterlage:</p>

                    <ul className={'list-disc pl-5 text-sm text-[#717171] md:text-black leading-[18px] md:leading-[24px] mt-4 space-y-4'}>
                        <li>SuedOstLink Sensitivitätsstudie im SuedOstLink zur Wärmetransportberechnung für die ARGE
                            SOLiG Technik– Auftraggeber: imp GmbH, Giftge Consult GmbH, Tennet TSO GmbH
                        </li>
                        <li>SuedOstLink 525 kV HGÜ-Kabel - Abschnitte A1, A2, B – Auftraggeber: Arcadis Germany GmbH,
                            50Hertz Transmission GmbH
                        </li>
                        <li>SuedOstLink 525 kV HGÜ-Kabel - Abschnitte D1, D2, D3a, D3b, C1, C2 – Auftraggeber: Arcadis
                            Germany GmbH, Tennet TSO GmbH
                        </li>
                        <li>SuedLink 525 kV HGÜ-Kabel - Abschnitte PFA A1, PFA A2, PFA A3, PFA A4 – Auftraggeber: ILF
                            Beratende Ingenieure GmbH, Tennet TSO GmbH
                        </li>
                        <li>SuedLink 525 kV HGÜ-Kabel - Abschnitte PFA A4, PFA B1, PFA B2 – Auftraggeber: Fugro Germany
                            Land GmbH, Tennet TSO GmbH
                        </li>
                        <li>SuedLink 525 kV HGÜ-Kabel - Abschnitte PFA E3 – Auftraggeber: TransnetBW GmbH</li>
                    </ul>

                    <p className={'text-[16px] md:text-[18px] font-bold mt-4'}>Numerische Analyse des
                        Bettungsmaterialeinflusses auf die Umweltimmissionswirkung beim SuedLink
                        PFA-A3 – Auftraggeber: Tennet TSO GmbH</p>

                    <p className={'text-[16px] md:text-[18px] font-bold mt-4'}>Wärmetransportberechnung nach NABEG § 21
                        zur Simulation der Umweltauswirkungen von tiefliegenden Kabeln (HDD-Unterquerungen) mit dem
                        GAE-Modell I:</p>

                    <ul className={'list-disc pl-5 text-sm text-[#717171] md:text-black leading-[18px] md:leading-[24px] mt-4 space-y-4'}>
                        <li>Numerische Analyse der thermo-hydraulischen Auswirkungen zu HDD-Unterquerungen –
                            Auftraggeber: Tennet TSO GmbH
                        </li>
                    </ul>

                    <p className={'text-[16px] md:text-[18px] font-bold mt-4'}>Wärmetransportberechnung zur technischen
                        Optimierungssimulation der möglichen Auslastung (Leitertemperatur in Abhängigkeit vom porösen
                        Boden und Klima) und der Umweltauswirkungen auf den Boden mit dem GAE-Model II:</p>

                    <ul className={'list-disc pl-5 text-sm text-[#717171] md:text-black leading-[18px] md:leading-[24px] mt-4 space-y-4'}>
                        <li>Solarpark Wuschewier 10kV HWÜ-Kabel – Auftraggeber: SMT Resources GmbH</li>
                        <li>Solarpark Wuschewier 20kV HWÜ-Kabel – Auftraggeber: SMT Resources GmbH</li>
                    </ul>

                    <p className={'text-[16px] md:text-[18px] font-bold mt-4'}>Arbeitshilfen zu HGÜ- und HWÜ-Erdkabeln -
                        Genehmigung und Planung nach</p>
                    <p className={'text-[16px] md:text-[18px] font-bold'}>NABEG § 21:</p>

                    <ul className={'list-disc pl-5 text-sm text-[#717171] md:text-black leading-[18px] md:leading-[24px] mt-4 space-y-4'}>
                        <li>Erstellung einer Arbeitshilfe zur Beurteilung der Auswirkungen der betriebsbedingten
                            Wärmeimmissionen NEP 68%, 85% und 100% auf die Schutzgüter des UVPG: Boden, Wasser, Flora /
                            Fauna und landwirtschaftliche Belange – Auftraggeber: TransnetBW GmbH
                        </li>
                        <li>Numerische Analyse der thermo-hydraulischen Auswirkungen in der geplanten HGÜ Kabeltrasse
                            SuedLink im Bereich von Feldhamsterpopulationen für NEP 70% / 75 % und 85% – Auftraggeber:
                            ILF Beratende Ingenieure GmbH, TransnetBW GmbH
                        </li>
                    </ul>

                    <p className={'text-[16px] md:text-[18px] font-bold mt-4'}>Kabelabwärme Versuchsfeld Umspannwerk
                        Wolmirstedt – Auftraggeber: 50Hertz Transmission GmbH:</p>

                    <ul className={'list-disc pl-5 text-sm text-[#717171] md:text-black leading-[18px] md:leading-[24px] mt-4 space-y-4'}>
                        <li>Konzeptionelle Auslegung der in-situ Monitorings unterschiedlicher Bettungsmaterialien - Versuchsfeld Umspannwerk Wolmirstedt</li>
                        <li>Untersuchung der thermischen Änderungen und der Feuchtigkeitsänderungen in-situ an eingebetteten Schutzrohren bei Eintrag von Kabelabwärme - Versuchsfeld Umspannwerk Wolmirstedt</li>
                    </ul>
                </div>
            </Page>
        </>
    );
}

export default EnergyTransportation;