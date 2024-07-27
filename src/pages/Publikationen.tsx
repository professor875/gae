import heroImage from "@/assets/images/publikationen/hero.png"
import Page from "@/components/Page.tsx";
import PageTitle from "@/components/PageTitle.tsx";

const Publikationen = () => {

    const publikationen = [
        {
            heading: 'energie',
            points: [
                {
                    text: 'Betriebsbedingte Auswirkungen von HGÜ Kabel auf die hydrothermischen Eigenschaften des Bodens und der bettungsoptimierten technischen Leitungszone (2024)',
                    link: 'https://doi.org/10.3390/en17122856',
                },
                {
                    text: 'Eigenschaften und Eignung von Bettungsmaterialien bei der Erdverkabelung (2024)',
                    link: 'https://doi.org/10.3390/en17122856',
                },
                {
                    text: 'Thermal, Electrical and Economic Performance of a Hybrid Solar-Wind-Geothermal System: Case Study of a detached House in Hamburg and Sylt, Germany (2024)',
                    link: 'https://doi.org/10.3390/en17122856',
                },
                {
                    text: 'Auslastungseffizienz in der technischen Trassenplanung: Zwei-schicht–und gekoppelte Simulationen (2024)',
                    link: 'https://www.researchgate.net/publication/374082612_Analyse_von_Umweltauswirkungen_infolge_eingeerdeter_Hoch-_und_Hochstspannungskabel_unter_naturlichen_Bedingungen',
                },
                {
                    text: 'Analyse von Umweltauswirkungen infolge eingeerdeter Hoch- und Höchstspannungskabel unter natürlichen Bedingungen (2023)',
                    link: 'https://www.researchgate.net/publication/374082612_Analyse_von_Umweltauswirkungen_infolge_eingeerdeter_Hoch-_und_Hochstspannungskabel_unter_naturlichen_Bedingungen',
                },
                {
                    text: 'Thermal performance of three horizontal ground heat exchanger systems: comparison of a linear-loop, spiral-coil and slinky-coil arrangements (2023)',
                    link: 'https://www.frontiersin.org/journals/energy-research/articles/10.3389/fenrg.2023.1188506/full',
                },
                {
                    text: 'Gekoppelte Auslegung, Optimierung und Langzeitbewertung von erdgebundenen Photovoltaik-Windkraft-Wärmepumpensystemen unter klimatischen Einflüssen (2023)',
                    link: '',
                },
                {
                    text: 'Thermische Reserven in der Trassenplanung: Zweischicht- und gekoppelte Simulationen (2022)',
                    link: '',
                },
                {
                    text: 'Full coupled electro-hydro-thermal (ETH) simulations for cable design (2021)',
                    link: '',
                }
            ],
        },
        {
            heading: 'Laboranalysen & Felduntersuchungen',
            points: [
                {
                    text: 'Seismic Safety Analysis of Small Modular Reactors (SMRs): A Hybrid BEM-FEM Approach (2024)',
                    link: 'https://www.researchgate.net/publication/378910522_Seismic_Safety_Analysis_of_Small_Modular_Reactors_SMRs_A_Hybrid_BEM-FEM_Approach',
                },
                {
                    text: 'Sity-City interaction modelling for earthquake scenario by hybrid BEM-FEM (2023)',
                    link: 'https://www.researchgate.net/publication/369924077_Site-City_interactions_modelling_for_earthquake_scenario_by_hybrid_BEM-FEM',
                },
                {
                    text: 'Enhancement of In-plane seismic full wave form inversion with CPU and GPU parallelization (2022)',
                    link: 'https://www.mdpi.com/2076-3417/12/17/8844',
                }
            ],
        },
        {
            heading: 'Ingenieurwesen & Numerik',
            points: [
                {
                    text: 'Soil Thermal Conductivity Model derived from Gene Expression Programming (2023)',
                    link: 'https://www.mdpi.com/2227-7390/10/21/3957',
                },
                {
                    text: 'Neural network approaches for computation of soil thermal conductivity (2022)',
                    link: 'https://www.mdpi.com/2227-7390/10/21/3957',
                }
            ],
        },
        {
            heading: 'GIS, UAV und KI',
            points: [
                {
                    text: 'Deep Neural Networks for crack detection inside structures (2024)',
                    link: 'https://www.nature.com/articles/s41598-024-54494-y',
                }
            ],
        },
    ];

    return (
        <>
            <PageTitle value={'Publikationen'}/>

            <div className={'relative bg-contain bg-no-repeat bg-top'} style={{backgroundImage: `url(${heroImage})`}}>

                <Page className={'pt-[50px] md:pt-[20px] pb-[30px] md:pb-[83px]'}>
                    <h1 className={'text-white text-center leading-[24px] md:leading-[108px]'}>Publikationen</h1>

                    <div
                        className={'mt-[30px] md:mt-[54px] rounded-[30px] md:rounded-[55px] p-[20px] md:p-[40px] bg-white pl-x-[30px] md:pl-[50px] space-y-[30px] md:space-y-[50px] max-w-[1040] w-full'}
                        style={{boxShadow: '0px 0px 22.6px 0px #00000029'}}>
                        {publikationen.map((publikationen, index) => (
                            <div key={index} className='space-y-[20px] md:space-y-[39px] px-[20px] md:px-[50px]'>
                                <h5 className={'text-[18px] md:text-[24px] font-[500] leading-[18px] md:leading-[36px] max-w-[332px] uppercase'}>{publikationen.heading}</h5>
                                <div className="flex gap-x-[10px] md:gap-x-[25px]">
                                    <div
                                        className={'flex-grow flex flex-col gap-y-[10px] md:gap-y-[30px] w-full border-l-[1px] md:border-l-[3px] border-primary pl-[10px] md:pl-[25px]'}>
                                        {publikationen.points.map((point, index) => (
                                            <div key={index}
                                                 className={'py-[10px] md:py-[20px] flex flex-col md:flex-row justify-between items-start md:items-center gap-x-[21px] gap-y-[10px]'}>
                                                <p className={'text-sm leading-[18px] md:leading-[23px]'}>{point.text}</p>

                                                {point.link && <a href={point.link} target={'_blank'}
                                                    className={'text-white text-nowrap text-[10px] md:text-[14px] py-[6px] px-[8px] bg-primary rounded-[8px] w-fit h-fit'}>MEHR
                                                    LESEN
                                                </a>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Page>
            </div>
        </>
    );
}/*
<h5 className={'px-[20px] mb-[20px] md:mb-[39px] text-[18px] md:text-[24px] font-[500] leading-[18px] md:leading-[36px] max-w-[332px] uppercase'}>{publikationen.heading}</h5>
<div className="flex gap-x-[10px] md:gap-x-[25px] px-[20px] md:px-[50px]">
    <div
        className={'flex-grow flex flex-col gap-y-[10px] md:gap-y-[30px] w-full border-l-[1px] md:border-l-[3px] border-primary pl-[10px] md:pl-[25px]'}>
        {publikationen.points.map((point, index) => (
            <div key={index}
                 className={'py-[10px] md:py-[20px] flex flex-col md:flex-row justify-between items-start md:items-center gap-x-[21px] gap-y-[10px]'}>
                <p className={'text-sm leading-[18px] md:leading-[23px]'}>{point}</p>

                <div
                    className={'text-white text-nowrap text-[10px] md:text-[14px] py-[6px] px-[8px] bg-primary rounded-[8px] w-fit h-fit'}>MEHR
                    LESEN
                </div>
            </div>
        ))}
    </div>
</div>*/
export default Publikationen;