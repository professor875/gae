import Page from "@/components/Page.tsx";

import energyGalleryImage1 from "@/assets/images/geschaftsbereiche/gallery/energy/image1.png";
import energyGalleryImage2 from "@/assets/images/geschaftsbereiche/gallery/energy/image2.png";
import energyGalleryImage3 from "@/assets/images/geschaftsbereiche/gallery/energy/image3.png";

import laborGalleryImage1 from "@/assets/images/geschaftsbereiche/gallery/labor/image1.png";
import laborGalleryImage2 from "@/assets/images/geschaftsbereiche/gallery/labor/image2.png";
import laborGalleryImage3 from "@/assets/images/geschaftsbereiche/gallery/labor/image3.png";

import gisAndUavGalleryImage1 from "@/assets/images/geschaftsbereiche/gallery/gis-and-uav/image1.png";
import gisAndUavGalleryImage2 from "@/assets/images/geschaftsbereiche/gallery/gis-and-uav/image2.png";
import gisAndUavGalleryImage3 from "@/assets/images/geschaftsbereiche/gallery/gis-and-uav/image3.png";

import ingenieurwesenImage from "@/assets/images/geschaftsbereiche/ingenieurwesen.png";

import Gallery from "@/components/Gallery.tsx";
import PageTitle from "@/components/PageTitle.tsx";
import {useEffect, useRef} from "react";
import {Link, useLocation} from "react-router-dom";
import {scrollToElement} from "@/utils.ts";
const Geschaftsbereiche = () => {

    const energieRef = useRef(null);
    const laboranalysenAndFelduntersuchungenRef = useRef(null);
    const ingenieurweseAndNumerikRef = useRef(null);
    const gisAndUavRef = useRef(null);

    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#energie' && energieRef.current) {
            setTimeout(() => scrollToElement(energieRef.current), 0)
        }

        if (location.hash === '#laboranalysen-and-felduntersuchungen' && laboranalysenAndFelduntersuchungenRef.current) {
            setTimeout(() => scrollToElement(laboranalysenAndFelduntersuchungenRef.current), 0)
        }

        if (location.hash === '#ingenieurwese-and-numerik' && ingenieurweseAndNumerikRef.current) {
            setTimeout(() => scrollToElement(ingenieurweseAndNumerikRef.current), 0)
        }

        if (location.hash === '#gis-and-uav' && gisAndUavRef.current) {
            setTimeout(() => scrollToElement(gisAndUavRef.current), 0)
        }
    }, [location]);

    const partners = [
        {
            heading: 'Energie',
            name: 'Johannes Nordbeck',
            email: 'energy@geoanalysis-engineering.de',
            phone: '+49 (0)1590 1204128',
        },
        {
            heading: 'INgenieurwesen & Numerik',
            name: 'Dr.-Ing. Zarghaam Rizvi, Dr.-Ing. Min Basnet',
            email: 'engineering@geoanalysis-engineering.de',
            phone: '+49 (0) 431 53032960',
        },
        {
            heading: 'GIS & UAV',
            name: 'Dr. Linwei Hu, Dr. Guiying Du',
            email: 'GIS@geoanalysis-engineering.de',
            phone: '+49 (0) 176 46057070',
        },
        {
            heading: 'Laboranalysen & Felduntersuchungen',
            name: 'Eryk-Malte Florian, Richard Schroeder, Dr.-Ing. Dinesh Shrestha',
            email: 'testing@geoanalysis-engineering.de',
            phone: '+49 (0) 1556 1577042',
        },
    ];

    return (
        <>
            <PageTitle value={'Geschaftsbereiche'}/>

            <Page className='pt-16 lg:pt-0'>
                <h3 className='leading-24 md:leading-[63px]'>Geschäftsbereiche / Ansprechpartner</h3>
                <hr className='my-[10px] md:my-[22px] border-[1px] md:border-[4px] border-secondary w-[125px]'/>

                <div
                    className="mb-[50px] md:mb-[100px] text-white grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:gap-[80px]">
                    {partners.map((partner, index) => (
                        <div key={index} className="p-[20px] md:py-[32px] md:px-[39px] bg-[#FF0000] rounded-3xl">
                            <h5 className="text-[18px] md:text-[24px] font-[700] leading-[24px] md:leading-[36px] mb-2 md:mb-[10px] uppercase break-words">{partner.heading}</h5>
                            <p className="text-sm md:text-[16px] leading-[24px]">
                                {partner.name}
                                <br/>
                                Email: {partner.email}
                                <br/>
                                Phone:{partner.phone}
                            </p>
                        </div>
                    ))}
                </div>
            </Page>

            <Page className='mb-[20px] md:mb-[103px]' ref={energieRef}>
                <h3 className='leading-24 md:leading-[63px] uppercase mb-2 md:mb-[22px]'>energie</h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[32px] mb-2 md:mb-[22px]">
                    <ul className={'text-[#717171] md:text-black list-disc w-full pl-5 py-[10px] md:py-[16px] text-sm md:text-[16px] leading-24 leading-[27px] mb-0 md:mb-12 lg:mb-0'}>
                        <li>Vollständig <span className="font-normal md:font-bold">gekoppelte thermo-hydro-mechanisch-diffusive Simulationen</span> für
                            eingeerdete Höchstspannungskabel
                        </li>
                        <li>Standorterkundungen und <span className="font-normal md:font-bold">Laboranalysen</span> für
                            Kabeltrassen
                        </li>
                        <li>Geotechnische, hydrologische, thermische & geothermische Analysen und Planungen
                        </li>
                        <li><span className="font-normal md:font-bold">Fremdüberwachung</span> und in-situ
                            Materialprüfung
                        </li>
                        <li>Entwurf und Planung von<span
                            className="font-normal md:font-bold">Bettungsmateralien</span> für Kabeltrassen
                        </li>
                        <li>Geotechnische und <span className="font-normal md:font-bold">BBB, Bodenmanagement</span>
                        </li>
                        <li>Erstellungen digitaler Geländemodelle <span
                            className="font-normal md:font-bold">/ UAV </span>und Simulationen zum Lebenszyklus <span
                            className="font-normal md:font-bold"> (digitale Zwillinge) </span>für Kabeltrassen
                        </li>
                        <li>Komplexe <span className="font-normal md:font-bold">numerische Simulationen</span> / KI</li>
                        <li>Entwurf und Optimierung von gekoppelten Photovoltage-Wind-Geothermie Energiesystemen</li>
                        <li>Bestimmung optimaler <span
                            className="font-normal md:font-bold">Wärmetauscher</span> (Kollektoren, BHE, Pfähle, etc.)
                        </li>
                        <li>Optimierung der geothermischen und <span className="font-normal md:font-bold">wirtschaftlichen Leistung</span> und
                            Minimierung der Umwelteinwirkungen
                        </li>
                        <li>Analyse von <span className="font-normal md:font-bold">Massenspeicher</span> im Untergrund
                            (Gas, Methan, Druckluft) in geologischen Formationen
                        </li>
                        <li>Analyse thermischer <span className="font-normal md:font-bold">Energiespeichern</span>(BTES,
                            ATES, thermisch aktivierte Bauteile)
                        </li>
                    </ul>

                    <Gallery
                        images={[
                            energyGalleryImage1,
                            energyGalleryImage2,
                            energyGalleryImage3,
                        ]}/>
                </div>

                <div
                    className="flex flex-col md:flex-row justify-between text-white text-[18px] md:text-[22px] leading-24 leading-[33px] gap-[10px] ">
                    <Link to={'/energy-transportation'}>
                        <div className="p-[11px] text-center w-full max-w-full md:max-w-[380px] rounded-md bg-[#FF2626]">
                            Hoch-& Höchstspannungskabel
                    </div>
                    </Link>
                    <Link to={'/renwable-energy'}>
                        <div className="p-[11px] text-center w-full max-w-full md:max-w-[380px] rounded-md bg-[#FF2626]">
                            Geothermie & Solar
                    </div>
                    </Link>
                    <Link to={'/energy-speicher'}>
                        <div className="p-[11px] text-center w-full max-w-full md:max-w-[380px] rounded-md bg-[#FF2626]">
                            Energie- und Wärmespeicher
                    </div>
                    </Link>
                </div>
            </Page>

            <div className=" md:bg-[#FFF0F0] py-[20px] md:py-[45px] mb-[20px] md:mb-[100px]" ref={laboranalysenAndFelduntersuchungenRef}>
                <Page className='mb-[20px]'>
                    <h3 className='leading-24 md:leading-[63px] uppercase mb-2 md:mb-[22px]'>Laboranalysen
                        & <br/> Standortuntersuchungen</h3>
                    <hr className='my-[10px] md:my-[22px] border-[1px] md:border-[4px] border-secondary w-[125px]'/>


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[51px] mb-2 md:mb-[22px]">
                        <ul className={'text-[#717171] md:text-black list-disc w-full pl-5 text-sm md:text-[16px] leading-24 leading-[27px] mb-0 md:mb-12 lg:mb-0'}>
                            <li><span className="font-normal md:font-bold">Bodenprobenahme,</span> In-situ-Tests
                                wie <span
                                    className="font-normal md:font-bold">Kernbohrungen</span> und Analysen zur
                                Bestimmung der Festigkeit und anderen Bodeneigenschaften in Bau- und Bergbauprojekten.
                            </li>
                            <li>Laboranalysen von <span
                                className="font-normal md:font-bold">Boden- und Gesteinsproben</span> zur
                                Identifizierung von Kompressibilität, Permeabilität, Wärmeleitfähigkeit, hydraulischer
                                Leitfähigkeit, Scherfestigkeit und Konsolidierungseigenschaften.
                            </li>
                            <li><span className="font-normal md:font-bold">Belastungstests</span> an Mikropfählen und
                                Fundamenten zur Bewertung der Tragfähigkeit und dem Verhalten unter Lastbedingungen.
                            </li>
                            <li>Installation und <span
                                className="font-normal md:font-bold">Langzeitmonitoring</span> von/mit <span
                                className="font-normal md:font-bold">geotechnischen und bodenkundlichen Sensoren</span> zur
                                Beobachtung des Boden- und Strukturverhaltens, inkl. thermischer und hydraulischer
                                Überwachung.
                            </li>
                            <li>Hydrologische Studien und Entwässerungsanalysen für ein effektives und optimiertes
                                Oberflächen- und Grundwassermanagement.
                            </li>
                            <li>Bewertung der <span className="font-normal md:font-bold">thermischen Eigenschaften von Böden</span> für
                                Energie-Geotechnische Fragestellungen, wie Erdwärmepumpen, Wärmespeicher oder
                                unterirdischen Hochspannungskabel.
                            </li>
                            <li>Analyse von Böden mit <span
                                className="font-normal md:font-bold">Volumenänderungen</span> (quellende/schrumpfende
                                Böden) und Entwicklung von Minderungsstrategien zur Vermeidung von Schäden an Strukturen
                                infolge der Volumenänderungen.
                            </li>
                        </ul>

                        <Gallery
                        images={[
                            laborGalleryImage1,
                            laborGalleryImage2,
                            laborGalleryImage3,
                        ]}/>
                    </div>

                    <div
                        className="flex flex-col md:flex-row justify-between text-white text-[18px] md:text-[22px] leading-24 leading-[33px] gap-[10px] ">
                        <div
                            className="p-[11px] text-center w-full max-w-full md:max-w-[380px] rounded-md bg-[#FF2626] bg-opacity-50 cursor-not-allowed">Laboranalysen
                        </div>
                        <div
                            className="p-[11px] text-center w-full max-w-full md:max-w-[380px] rounded-md bg-[#FF2626] bg-opacity-50 cursor-not-allowed">Felduntersuchungen
                        </div>
                        <div
                            className="p-[11px] text-center w-full max-w-full md:max-w-[380px] rounded-md bg-[#FF2626] bg-opacity-50 cursor-not-allowed">Standortmonitoring
                        </div>
                    </div>
                </Page>
            </div>

            <Page className='mb-[20px] md:mb-[103px]' ref={ingenieurweseAndNumerikRef}>
                <h3 className='leading-24 md:leading-[63px] uppercase mb-2 md:mb-[22px]'>Ingenieurwesen</h3>
                <hr className='my-[10px] md:my-[22px] border-[1px] md:border-[4px] border-secondary w-[125px]'/>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[77px] lg:gap-[32px] mb-2 md:mb-[22px]">
                    <ul className={'text-[#717171] md:text-black list-disc w-full pl-5 py-[10px] md:py-[16px] text-sm md:text-[16px] leading-24 leading-[27px] mb-0 md:mb-12 lg:mb-0'}>
                        <li><span className="font-normal md:font-bold">Fachberatung</span> bei komplexen geotechnischen
                            Herausforderungen, Bereitstellung von Lösungen basierend auf Forschungen und dem Stand der
                            Technik.
                        </li>
                        <li>Numerische <span className="font-normal md:font-bold">Modellierung</span> geotechnischer
                            Strukturen unter Berücksichtigung geologischer und topographischer Effekte.
                        </li>
                        <li>Entwurf und Analyse von <span
                            className="font-normal md:font-bold">Fundamentsystemen,</span> wie Flach- oder
                            Tiefgründungen zum Abtrag von statischen und dynamischen Lasten.
                        </li>
                        <li>Bewertung der <span className="font-normal md:font-bold">Hangstabilität</span> und des
                            Risikos von Erdrutschen.
                        </li>
                        <li><span className="font-normal md:font-bold">Bodenverbesserungstechniken</span> zur Erhöhung
                            der Tragfähigkeit und Modifizierung von hydraulischen und thermischen Eigenschaften,
                            Leitfähigkeiten, Speicherfähigkeiten etc.
                        </li>
                        <li><span className="font-normal md:font-bold">Umweltgeotechnik,</span> einschließlich Bewertung
                            und Minderung von Boden- und Grundwasserproblemen.
                        </li>
                    </ul>

                    <div className={'w-full flex flex-col items-center'}>
                        <img src={ingenieurwesenImage} alt=""/>
                    </div>
                </div>

                <div
                    className="flex flex-col md:flex-row justify-between text-white text-[18px] md:text-[22px] leading-24 leading-[33px] gap-[10px] ">
                    <div className="p-[11px] text-center w-full max-w-full md:max-w-[380px] rounded-md bg-[#FF2626] bg-opacity-50 cursor-not-allowed">Ingenieurwesen</div>
                    <div className="p-[11px] text-center w-full max-w-full md:max-w-[380px] rounded-md bg-[#FF2626] bg-opacity-50 cursor-not-allowed">Geotechnik</div>
                    <div className="p-[11px] text-center w-full max-w-full md:max-w-[380px] rounded-md bg-[#FF2626] bg-opacity-50 cursor-not-allowed">Bodenverbesserung</div>
                </div>
            </Page>

            <div className="md:bg-[#FFF0F0] py-[20px] md:pt-[48px] md:pb-[33px]" ref={gisAndUavRef}>
                <Page className='mb-[20px]'>
                    <h3 className='leading-24 md:leading-[63px] uppercase mb-2 md:mb-[22px] text-[#FF0000]'>GIS & UAV</h3>
                    <hr className='my-[10px] md:my-[22px] border-[1px] md:border-[4px] border-[#FF0000] w-[125px]'/>


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[114px] mb-2 md:mb-[22px]">
                        <ul className={'text-[#717171] md:text-black list-disc w-full pl-5 text-sm md:text-[16px] leading-24 leading-[27px] mb-0 md:mb-12 lg:mb-0'}>
                            <li><span className="font-normal md:font-bold">Detaillierte Luftaufnahmen</span> zur Volumenbewertung von Kies- und Sandabbaugebieten, Überwachung der Umweltkonformität und Planung der Rehabilitation.</li>
                            <li>Erstellung <span className="font-normal md:font-bold">digitaler Zwillinge</span> der natürlichen & bebauten Umwelt, Standorte oder Städte, die Visualisierung, Überwachung und Asset-Management mit Echtzeitinformationen.</li>
                            <li><span className="font-normal md:font-bold">Digitalisierung</span> und Kartierung von Bohrlochdaten und geologischen Formationen für die Ressourcenerkundung, Umweltstudien und geotechnische Untersuchungen.</li>
                            <li>Präzise Landvermessungen und Kartierungsdienste, inkl. topographischer Grenz- und Landnutzungsplanung, Einsatz fortschrittlicher UAV- und GIS-Technologie.</li>
                            <li><span className="font-normal md:font-bold">UAV- gestützte Ertragsabschätzungen</span> zu Feldfrüchten und Kabeltrassen</li>
                            <li>UAV- gestütztes <span className="font-normal md:font-bold">Monitoring von Trassenbewuchs,</span> Biotopen</li>
                        </ul>

                        <Gallery
                        images={[
                            gisAndUavGalleryImage1,
                            gisAndUavGalleryImage2,
                            gisAndUavGalleryImage3,
                        ]}/>
                    </div>

                    <div
                        className="flex flex-col md:flex-row justify-between text-white text-[18px] md:text-[22px] leading-24 leading-[33px] gap-[10px] ">
                        <div
                            className="p-[11px] text-center w-full max-w-full md:max-w-[380px] rounded-md bg-[#FF2626] bg-opacity-50 cursor-not-allowed">Drohnenbefliegung
                        </div>
                        <div
                            className="p-[11px] text-center w-full max-w-full md:max-w-[380px] rounded-md bg-[#FF2626] bg-opacity-50 cursor-not-allowed">GIS
                        </div>
                        <div
                            className="p-[11px] text-center w-full max-w-full md:max-w-[380px] rounded-md bg-[#FF2626] bg-opacity-50 cursor-not-allowed">Digitale Zwillinge
                        </div>
                    </div>
                </Page>
            </div>
        </>
    );
}

export default Geschaftsbereiche