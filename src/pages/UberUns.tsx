import Page from "@/components/Page.tsx";
import UberUnsHeaderImage from "@/assets/images/urben-uns/hero.png";
import Gallery from "@/components/Gallery.tsx";
import galleryImage2 from "@/assets/images/urben-uns/gallery/forschungrock.png";
import galleryImage3 from "@/assets/images/urben-uns/gallery/forschungpressure.png";
import galleryImage4 from "@/assets/images/urben-uns/gallery/forschungtc.png";
import galleryImage5 from "@/assets/images/urben-uns/gallery/forschungtemp.png";
import PageTitle from "@/components/PageTitle.tsx";
import highlightsGallery1 from "@/assets/images/home/gallery/highlights/highlights-cable.png";
import highlightsGallery2 from "@/assets/images/home/gallery/highlights/highlights-blue.png";
import highlightsGallery3 from "@/assets/images/home/gallery/highlights/highlights-cable-temp.png";
import highlightsGallery4 from "@/assets/images/home/gallery/highlights/highlights-grey.png";
import {useEffect, useRef} from "react";
import {scrollToElement} from "@/utils.ts";

const UberUns = () => {
    const highlightsRef = useRef(null);

    useEffect(() => {
        if (location.hash === '#highlights' && highlightsRef.current) {
            setTimeout(() => scrollToElement(highlightsRef.current), 0)
        }
    }, [location]);
    return (
        <>
            <PageTitle value={'Uber Uns'}/>

            <div className={'bg-no-repeat bg-cover bg-center w-full h-[433px] md:h-[584px] relative'}
                 style={{backgroundImage: `url(${UberUnsHeaderImage})`}}>
                <Page className={'text-white h-full flex flex-col justify-center '}>
                    <h1 className={'leading-[108px]'}>Über uns</h1>
                </Page>
            </div>

            <Page>
                <div
                    className={'py-[20px] md:py-[33px] px-[20px] md:px-[70px] bg-secondary bg-opacity-85 rounded-xl border border-secondary -translate-y-[50%]'}>
                    <hr className={'w-[125px] border-[1px] md:border-2 border-primary mx-auto'}/>
                    <p className={'text-normal leading-[27px] text-center text-white mt-[15px] md:mt-[22px]'}>
                        Das Team von GAE besteht aus Ingenieuren, Wissenschaftlern, Informatikern und Technikern. Wir
                        bieten mit Kompetenz und Innovation fortschrittliche technische nachhaltige Lösungen für den
                        Markt und die Kunden an.
                    </p>
                </div>
            </Page>

            <Page
                className={'flex flex-col lg:flex-row gap-x-[77px] justify-between gap-y-4 md:gap-y-0 md:items-center mb-[30px] md:mb-[84px]'}>
                <div className={'flex items-center max-w-full lg:max-w-[627px] mb-0 md:mb-12 lg:mb-0'}>
                    <div className="w-full">
                        <h3 className={'leading-[24px] md:leading-[63px]'}>Forschung & Entwicklung</h3>

                        <hr className={'w-[125px] border-[1px] md:border-[4px] border-secondary my-[20px] md:my-[30px]'}/>
                        <p className={'text-sm leading-[18px] md:leading-[27px]'}>
                            Die ständige GAE interne Forschung und Entwicklung neuer Lösungen ist ein wesentliches
                            Werkzeug, um den wachsenden Anforderungen vom Markt gerecht zu werden. GAE entwickelt dazu
                            seine Produkte auf allen Gebieten ständig weiter, beteiligt sich an gemeinsamen
                            Forschungsprojekten mit Partnern aus der Industrie und Hochschulen und bietet gezielte
                            Auftragslösungen an.
                        </p>
                    </div>
                </div>

                <Gallery
                    images={[
                        galleryImage2,
                        galleryImage3,
                        galleryImage4,
                        galleryImage5,
                    ]}/>
            </Page>

            <Page className={'mb-[30px] md:mb-[84px]'}>
                <div
                    className="p-[20px] md:p-[54px] bg-secondary bg-opacity-[83%] rounded-3xl border border-secondary">
                    <h3 className={'text-primary uppercase leading-[24px] md:leading-[51px] mb-[15px] md:mb-[20px]'}>Gae
                        vision</h3>
                    <div className={'pr-10'}>
                        <p className={'text-normal leading-[18px] md:leading-[34px] text-white'}>
                            Unser Ziel ist es, mit unserem <span className={'text-primary'}>Know-how</span> eine
                            nachhaltige
                            und robuste Infrastruktur für intelligente urbane Gebiete zu <span
                            className="text-primary">planen</span>. Dabei setzen wir Technologie und Wissenschaft <span
                            className="text-primary">kreativ</span> ein, um <span
                            className="text-primary">innovative</span> Lösungen im Bereich Energienetz-Ausbau,
                            erneuerbare
                            Energien, Umwelt-Simulationen und Monitoring zu finden, auch unter Einsatz von <span
                            className="text-primary">KI</span>. Unsere Lösungen berücksichtigen die Herausforderungen
                            des
                            Klimawandels und des Umweltschutzes, zielen auf <span
                            className="text-primary">kosteneffiziente</span> Technik ab und berücksichtigen zukünftige
                            Bedürfnisse.
                        </p>
                    </div>
                </div>
            </Page>

            <div className={'bg-white md:bg-[#FFF0F0] pt-0 md:pt-[66px] pb-[12px] md:pb-[42px] mb-[30px] md:mb-[84px]'} ref={highlightsRef}>
                <Page className={'flex flex-col lg:flex-row gap-x-[125px] justify-between md:items-center'}>
                    <div className={'mb-[30px] md:mb-0'}>
                        <p className={'text-[16px] md:text-[34px] font-medium md:font-bold leading-[24px] md:leading-[63px]'}>Highlights</p>

                        <hr className={'w-[125px] border-[1px] md:border-[4px] border-black my-[20px]'}/>

                        <div className={'max-w-full lg:max-w-[662px]'}>
                            <p className={'text-[12px] md:text-[16px] text-[#717171] md:text-black font-normal md:font-semibold leading-[20px] md:leading-[24px]'}>GAE
                                ist spezialisiert auf
                                umfassende Bodenuntersuchungen, die Planung von unterirdischen Stromkabeltrassen und
                                effiziente Solar- und Windenergiesysteme.</p>
                        </div>

                        <div className={'max-w-full lg:max-w-[585px] my-[20px]'}>
                            <ul className={'list-disc pl-5 text-[12px] md:text-[16px] text-[#717171] md:text-black leading-[20px] md:leading-[24px]'}>
                                <li>Hochmoderne <span
                                    className={'font-normal md:font-semibold'}>Standortuntersuchungen</span> +
                                    Fremdüberwachung während der Bauprozesse.
                                </li>
                                <li>Tiefgehende Untergrundanalysen, Präzisionsbohrungen, Kombination von Methoden aus
                                    Geotechnik, Geophysik und Bodenkunde für weiterführende <span
                                        className={'font-normal md:font-semibold'}>3D Abbildungen</span> des
                                    Untergrundes inkl. der
                                    Topographie in CAD Programmen.
                                </li>
                                <li>Umfassende <span className={'font-normal md:font-semibold'}>hydrologische Bewertungen</span> zur
                                    genauen Abbildung von hydraulischem Wasserfluss, Hochwasserrisiken und
                                    Grundwasserabsenkungen.
                                </li>
                                <li>Ableitung weitreichender Bodenmanagementkonzepte und Bodenkundliche Baubegleitung
                                </li>
                                <li>Design von <span
                                    className="font-normal md:font-semibold">Bettungsmaterialien</span> zur Reduktion
                                    der thermischen Belastung von Erdkabel
                                </li>
                                <li>Nachträgliche thermische <span
                                    className="font-normal md:font-semibold">Bodenverbesserung</span> an
                                    Erdkabelanlagen
                                </li>
                                <li>Elektrische & thermische Analyse zum Schutz und zur <span
                                    className="font-normal md:font-semibold">Optimierung</span> unterirdischer Kabel.
                                </li>
                                <li>Numerische Abbildung von <span
                                    className="font-normal md:font-semibold">Umweltimmissionen</span> sowie der
                                    Auslegung von
                                    Bettungsmaterial und Kabel mit Hilfe einfacher und komplexer, gekoppelter Modelle
                                </li>
                                <li><span
                                    className="font-normal md:font-semibold">Dynamische Leistungsbewertung</span> für
                                    unterirdische Hochspannungskabel unter Berücksichtigung lokaler Klimaauswirkungen.
                                </li>
                            </ul>
                        </div>

                        <p className={'block lg:hidden text-[#717171] md:text-black text-[12px] md:text-[16px] font-normal md:font-semibold leading-[18px] md:leading-[24px]'}>GAE
                            verbindet geotechnisches Fachwissen mit Innovationen im Bereich der Elektrotechnik und
                            bietet einen ganzheitlichen Ansatz, der sicherstellt, dass Ihre Projekte nachhaltig,
                            effizient, optimiert und langlebig sind.</p>
                    </div>

                    <div className={'w-full lg:w-fit flex flex-col justify-center mt-0 md:mt-12'}>
                        <Gallery
                            images={[
                                highlightsGallery1,
                                highlightsGallery2,
                                highlightsGallery3,
                                highlightsGallery4,
                            ]}/>
                    </div>
                </Page>

                <Page className={'hidden lg:block'}>
                    <div className="max-w-[1148px]">
                        <p className={'text-[16px] font-semibold leading-[24px] text-center'}>GAE verbindet
                            geotechnisches Fachwissen mit Innovationen im Bereich der Elektrotechnik und bietet einen
                            ganzheitlichen Ansatz, der sicherstellt, dass Ihre Projekte nachhaltig, effizient, optimiert
                            und langlebig sind.</p>
                    </div>
                </Page>
            </div>
        </>
    );
}

export default UberUns