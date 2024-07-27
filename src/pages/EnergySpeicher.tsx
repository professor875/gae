import heroImage from "@/assets/images/energy-speicher/hero.png";
import Img1 from "@/assets/images/energy-speicher/img1.png";
import Img2 from "@/assets/images/energy-speicher/img2.png";
import Page from "@/components/Page.tsx";
import PageTitle from "@/components/PageTitle.tsx";


const EnergySpeicher = () => {
    return (
        <>
            <PageTitle value={'Energy Speicher'}/>

            <div className={'bg-no-repeat bg-cover bg-center w-full h-[433px] md:h-[600px]'}
                 style={{backgroundImage: `url(${heroImage})`}}>
            </div>
            <div className={'bg-secondary opacity-[83%] py-[20px] md:py-[58px]'}>
                <h1 className={'text-white text-center leading-[24px] md:leading-[82px]'}>ENERGIESPEICHER</h1>
            </div>

            <div className={'mt-[30px] md:mt-[100px] mb-[71px]'}>
                <Page>
                    <div className={'py-[20px] md:py-10 px-[54px] md:px-[30px] rounded-[55px]'}
                         style={{boxShadow: '0px 0px 22.6px 0px #00000029'}}>
                        <h3 className={'leading-[24px] md:leading-[51px]'}>Unsere Dienstleistungen</h3>

                        <div className={'mt-[15px] md:mt-[22px] flex flex-col lg:flex-row gap-[10px]'}>
                            <div className={'flex flex-col md:flex-row  max-w-[549px]'}>
                                <ul className={'text-[#717171] md:text-black list-disc space-y-8 pl-5 pr-4 pb-3 md:pb-0 md:pr-0 text-sm leading-[18px] md:leading-[24px]'}>
                                    <li>Machbarkeitsstudien zu unterirdischen Gasspeichern für großskaligen zentralen
                                        Speicherbedarf. Überschüssige erneuerbare Energie aus Solar- oder Windparks wird
                                        dabei in Kohlendioxid, Wasserstoff oder komprimierte Luft umgewandelt und in
                                        unterirdischen geologischen Formationen, wie einer Salzkavernen, poröse Gesteine
                                        oder salinen Aquifer gespeichert.
                                    </li>
                                    <li>Berechnung der Speicherkapazität und Suche nach geeigneten geologischen
                                        Formationen für die Gasspeicherung
                                    </li>
                                </ul>
                            </div>

                            <div className='my-auto mx-auto'>
                                <hr className='border-primary lg:min-h-[211px] w-[250px] md:w-[500px] lg:w-0 border-[1px] lg:border-[4px]'/>
                            </div>

                            <div className='max-w-[549px]'>
                                <ul className={'text-[#717171] md:text-black list-disc space-y-8 pl-5 pr-4 pb-3 md:pb-0 md:pr-0 text-sm leading-[18px] md:leading-[24px]'}>
                                    <li>Optimierung der Anordnung von Injektions- und Entnahmebrunnen sowie der
                                        Injektionsstrategien für die beste Effizienz.
                                    </li>
                                    <li>Modellierung des Speichersystems in Abhängigkeit von den örtlichen geologischen
                                        Gegebenheiten und Simulation von Veränderungen des Drucks im Untergrund und der
                                        Gassättigung im Laufe der Zeit.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Page>
            </div>

            <Page className='mb-[30px] md:mb-[100px]'>
                <h3 className='text-primary'>GAE-Numerical Model</h3>
                <hr className='my-[10px] md:my-[22px] border-[1px] md:border-[4px] border-primary w-[125px]'/>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-[20px] md:gap-y-[28px]">

                    <div className={'w-full flex justify-center'}><img src={Img1} alt="img"/></div>
                    <p className="text-sm md:order-3 md:text-[16px] leading-24">Eine Simulation der Methaninjektion und -migration
                        in einem oberflächennahen Aquifer. Die Injektionsstelle befindet sich in der Mitte des Modells
                        mit drei Bohrlöchern, und in der Umgebung sind mehrstufige Bohrlöcher installiert, um die durch
                        die Gasinjektion verursachten Druckänderungen und chemischen Reaktionen zu beobachten.</p>
                    <div className={'w-full flex justify-center'}><img className='' src={Img2} alt="imgs"/></div>
                    <p className="text-sm md:text-[16px] leading-24">Simulation der Wasserstoffinjektion und
                        -speicherung in einem tiefen salinen Aquifer. Der Heterogenitätsgrad der Durchlässigkeit und
                        Porosität des Aquifers wird durch Veränderung der räumlichen Variogramme erhöht. Der Wasserstoff
                        wurde in die fünf Brunnen in der Mitte des Modells injiziert. Die simulierte Injektionszeit wird
                        mit einem Monat angenommen.</p>
                </div>


            </Page>
        </>
    );
}

export default EnergySpeicher;