import heroImage from "@/assets/images/renwable-energy/hero.png";
import img1 from "@/assets/images/renwable-energy/img1.png";
import Page from "@/components/Page.tsx";
import PageTitle from "@/components/PageTitle.tsx";


const RenwableEnergy = () => {
    return (
        <>
            <PageTitle value={'Renwable Energy'}/>

            <div className={'bg-no-repeat bg-cover bg-center w-full h-[433px] md:h-[600px]'}
                 style={{backgroundImage: `url(${heroImage})`}}>
            </div>
            <div className={'bg-secondary opacity-[83%] py-[20px] md:py-[58px]'}>
                <h1 className={'text-white text-center leading-[24px] md:leading-[82px]'}>Geothermie & Solar</h1>
            </div>

            <div className={'mt-[30px] md:mt-[100px] mb-[71px]'}>
                <Page>
                    <div className={'py-[20px] md:py-10 px-[54px] md:px-[30px] rounded-[55px]'}
                         style={{boxShadow: '0px 0px 22.6px 0px #00000029'}}>
                        <h3 className={'leading-[24px] md:leading-[51px]'}>Unsere Dienstleistungen</h3>

                        <div className={'mt-[15px] md:mt-[22px] flex flex-col lg:flex-row gap-[10px]'}>
                            <div className={'flex flex-col md:flex-row  max-w-[549px]'}>
                                <ul className={'text-[#717171] md:text-black list-disc space-y-8 pl-5 pr-4 pb-3 md:pb-0 md:pr-0 text-sm leading-[18px] md:leading-[24px]'}>
                                    <li>Entwurfs- und Planungsleistungen für die Nutzung der oberflächennahen Geothermie
                                        (AOI Phase 1-7): <br/>
                                        <ul className={'text-[#717171] md:text-black list-disc pl-5 pr-4 pb-3 md:pb-0 md:pr-0 text-sm leading-[18px] md:leading-[24px]'}>
                                            <li>Phase 1: Grundlagenermittlung und Machbarkeit prüfen</li>
                                            <li>Phase 2: Machbarkeit prüfen</li>
                                            <li>Phase 3: Entwurfsplanung</li>
                                            <li>Phase 4: Genehmigungsplanung</li>
                                            <li>Phase 5: Ausführungsplanung</li>
                                            <li>Phase 6: Vorbereitung der Vergabe</li>
                                            <li>Phase 7: Mitwirkung bei der Vergabe</li>
                                        </ul>
                                    </li>
                                    <li>Entwurf und Optimierung des Types des geothermischen Wärmetauschers (flache
                                        Kollektoren oder Körbe, Energiepfähle, gebohrte Wärmetauscher usw.) zur
                                        Erzielung der besten thermischen und wirtschaftlichen Leistung auf der Grundlage
                                        der hydraulischen und thermischen Eigenschaften des Untergrunds und des Gesteins
                                        sowie der örtlichen Bodennutzung und der meteorologischen Daten.
                                    </li>
                                    <li>Labor- und Standortuntersuchung, einschließlich Durchlässigkeits- und
                                        Wärmeleitfähigkeitsprüfungen der örtlichen Bodenproben, In-situ-Pumpversuch und
                                        thermal response tests (TRT)
                                    </li>
                                    <li>Dreidimensionale numerische Simulationen für große geothermische Systeme (z. B.
                                        mit einer Systemlast von mehr als 30 kW)
                                    </li>
                                </ul>
                            </div>

                            <div className='my-auto mx-auto'>
                                <hr className='border-primary lg:min-h-[571px] w-[250px] md:w-[500px] lg:w-0 border-[1px] lg:border-[4px]'/>
                            </div>

                            <div className='max-w-[549px]'>
                                <ul className={'text-[#717171] md:text-black list-disc space-y-8 pl-5 pr-4 pb-3 md:pb-0 md:pr-0 text-sm leading-[18px] md:leading-[24px]'}>
                                    <li>Planung und Optimierung von Photovoltaik-Systemen auf der Grundlage der
                                        stündlichen Sonneneinstrahlung und der Lastprofile des Gebäudes sowie
                                        Überlegungen, ob windbasierte Systeme zur Ergänzung der Photovoltaikanlage je
                                        nach den örtlichen Windverhältnissen eingesetzt werden sollen.
                                    </li>
                                    <li>Dimensionierung von Batteriebänken für den kurzfristigen Stromspeicherbedarf mit
                                        geringer Kapazität, z. B. in freistehenden Wohn-, Gewerbe- und
                                        Industriegebäuden, um die Schwankungen der Photovoltaik- und
                                        Windenergieerzeugung durch wiederholtes Laden und Entladen auszugleichen.
                                    </li>
                                    <li>Entwurf und Optimierung von Fernwärmesystemen unter Einbeziehung mehrerer
                                        erneuerbarer Energiequellen, z. B. mitteltiefe bis tiefe geothermische Systeme,
                                        Solar- und Windparks, sowie Beratung zu potenziellen Energiespeicheroptionen
                                        (BTES, ATES usw.)
                                    </li>
                                    <li>Empfehlungen zur Minimierung von baulichen und energetischen Auswirkungen auf
                                        die unterirdische Umwelt und die lokale Ökologie.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Page>
            </div>


            <div className="md:bg-[#FFF0F0] py-[20px] md:pt-[103px] md:pb-[72px] mb-[10px] md:mb-[100px]">
                <Page>
                    <div className='mb-[10px] md:mb-[53px]'>
                        <h3 className='text-[#FF2626]'>GAE-Hybrid Energy System</h3>
                        <hr className='mt-[10px] md:mt-[70px] border-[1px] md:border-[4px] border-[#FF0000] w-[125px]'/>
                    </div>

                    <div className="overflow-hidden rounded-[40px]">
                        <img className='size-full' src={img1} alt='img1'/>
                    </div>
                </Page>
            </div>

            <Page className='mb-[10px] md:mb-[176px]'>
                <h3 className='text-[#FF0000] mb-[10px] md:mb-[40px]'>Unsere Referenzen</h3>

                <hr className='mt-[10px] md:mt-[70px] border-[1px] md:border-[4px] border-[#FF0000] w-[50%]'/>
                <div
                    className="border-l-[2px] md:border-l-[7px] border-[#FF0000] py-[10px] md:py-[43px] px-[10px] md:px-[49px]">
                    <ul className={'text-[#717171] md:text-black list-disc space-y-8 pl-5 md:pl-16 text-sm leading-[18px] md:leading-[24px]'}>
                        <li>Machbarkeitsstudie über die Umrüstung eines Gasheizungssystems in einem Industriegebäude auf erneuerbare Energien (Niedersachsen)</li>
                        <li>Machbarkeitsstudie über die Umstellung einer Gasheizung in einem Einfamilienhaus auf erneuerbare Energien (Thüringen, Hamburg, Sylt, usw.)</li>
                        <li>Langfristige Auswirkungen mehrerer BHEs, Energiewand und verschiedene Wärmetauscher auf den Untergrund</li>
                    </ul>
                </div>
            </Page>

        </>
);
}

export default RenwableEnergy;