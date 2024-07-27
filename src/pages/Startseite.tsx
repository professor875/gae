import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay} from "swiper/modules";
import Page from "@/components/Page.tsx";
import hero1 from "@/assets/images/home/slider/hero1.png";
import hero2 from "@/assets/images/home/slider/hero2.png";
import hero3 from "@/assets/images/home/slider/hero3.png";
import hero4 from "@/assets/images/home/slider/hero4.png";
import hero5 from "@/assets/images/home/slider/hero5.png";
import {useCallback, useEffect, useRef, useState} from "react";
import ServiceCard from "@/components/cards/ServiceCard.tsx";
import Gallery from "@/components/Gallery.tsx";
import unsereGgallery1 from "@/assets/images/home/gallery/unsere/gis-and-uav.png";
import unsereGgallery2 from "@/assets/images/home/gallery/unsere/leistung-map.png";
import unsereGgallery3 from "@/assets/images/home/gallery/unsere/leistung-temp.png";
import unsereGgallery4 from "@/assets/images/home/gallery/unsere/highlights-cable.png";
import unsereGgallery5 from "@/assets/images/home/gallery/unsere/leistung-triaxial.png";
import NewsCard from "@/components/cards/NewsCard.tsx";
import SliderPagination from "@/components/SliderPagination.tsx";
import PageTitle from "@/components/PageTitle.tsx";
import {useLocation} from "react-router-dom";
import {scrollToElement} from "@/utils.ts";
import {services, news} from "@/data.ts";

const Startseite = () => {

    const location = useLocation();
    const newsRef = useRef(null);
    const newsSlider = useRef(null)
    const heroImages = [hero1, hero2, hero3, hero4, hero5];
    const [currentSliderIndex, setCurrentSliderIndex] = useState(0);

    const handleNewsPrev = useCallback(() => {
        if (!newsSlider.current) return;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        newsSlider.current.swiper.slidePrev();
    }, []);

    const handleNewsNext = useCallback(() => {
        if (!newsSlider.current) return;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        newsSlider.current.swiper.slideNext();
    }, []);

    useEffect(() => {
        if (location.hash === '#news' && newsRef.current) {
            setTimeout(() => scrollToElement(newsRef.current), 0)
        }
    }, [location]);

    return (
        <>
            <PageTitle value={'Startseite'}/>

            <div className={'w-full relative'}>
                <Swiper
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => setCurrentSliderIndex(swiper?.realIndex)}
                    onSlideChange={(swiper) => setCurrentSliderIndex(swiper?.realIndex)}
                    loop={true}
                    spaceBetween={50}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {heroImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img className={'w-full h-[433px] md:h-[585px] object-cover object-center'} src={image} alt=""/>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Page
                    className={'w-full h-full absolute z-[9] top-0 left-[50%] -translate-x-[50%] text-white pt-[300px] md:pt-[142px] pointer-events-none'}>
                    <div className={'w-full md:w-[708px]'}>
                        <h1 className={'leading-[27px] md:leading-[108px]'}>GeoAnalysis-Engineering GmbH</h1>
                        <hr className={'w-[230px] md:w-[431px] bg-white border-[1px] md:border-[4px] my-[10px]'}/>
                        <h3 className={'leading-[21px] md:leading-[103px] font-normal'}>Kompetenz und Innovation</h3>
                    </div>
                </Page>

                <div className={'absolute z-[8] inset-0 pointer-events-none'} style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}></div>

                <SliderPagination count={heroImages.length} currentSliderIndex={currentSliderIndex}/>
            </div>

            <div className={'bg-primaryBright py-[20px] md:py-[41px] px-39px'}>
                <Page>
                    <p className={'text-[14px] md:text-[20px] leading-[21px] md:leading-[30px] font-medium md:font-semibold text-white text-center mb-0.5'}>Dienstleistungen
                        und Lösungen in den Arbeitsfeldern:</p>
                    <p className={'text-sm text-white leading-[18px] md:leading-[34px] text-center mb-[20px]'}>Geotechnik, Geophysik,
                        Bodenkunde, Geo- und Hydrologie, Geoinformatik und Elektrotechnik</p>

                    <div className={'flex flex-col md:flex-row justify-between gap-[20px] text-sm text-white leading-[18px] md:leading-[34px]'}>
                        <ul className={'list-disc w-full md:w-1/3 pl-5'}>
                            <li>Erdkabel & Freileitungen</li>
                            <li>Geothermie, Wärme & Kälte</li>
                            <li>geotechnische und bodenkundliche Laboranalysen & Baubegleitung</li>
                        </ul>

                        <ul className={'list-disc w-full md:w-1/3 pl-5'}>
                            <li>Standorterkundung</li>
                            <li>UAV Monitoring</li>
                            <li>Infrastruktur GIS Modellierung und Numerische Simulationen & KI.</li>
                        </ul>

                        <ul className={'list-disc w-full md:w-1/3 pl-5 leading-[18px] md:leading-[27px]'}>
                            <li>Durchführung von großen und komplexen numerischen Modellsimulationen für
                                Machbarkeitsstudien
                            </li>
                            <li>Vorbemessung, Umweltanalysen als auch Bemessung und Design in den benannten
                                Arbeitsfeldern
                            </li>
                        </ul>
                    </div>
                </Page>
            </div>

            <Page className={'mt-[30px] md:mt-[62px] pt-0 md:pt-[74px] mb:[20px] md:mb-[71px] relative'}>
                <div className={'hidden md:block absolute h-[125px] border-[1px] border-primary top-0 right-[93px]'}></div>
                <div className={'hidden md:block absolute h-[125px] border-[1px] border-primary top-0 right-[124px]'}></div>

                <div className={'flex justify-center items-center gap-x-6'}>
                    <div className={'w-[41px] md:w-[189px] border-[1px] md:border-[3px] border-primary'}></div>
                    <h3 className={'text-primary leading-[51px]'}>Geschäftsbereiche</h3>
                    <div className={'w-[41px] md:w-[189px] border-[1px] md:border-[3px] border-primary'}></div>
                </div>
            </Page>

            <div>
                <Page className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px]'}>
                    {services.map((service, index) => (
                        <div key={index} className={'w-full flex justify-center'}>
                            <ServiceCard
                                service={service}
                            />
                        </div>
                    ))}
                </Page>

                <div className={'h-[68px] md:h-[101px] bg-primary -mt-[51px] md:-mt-[75px]'}></div>
            </div>

            <div className={'pt-[30px] pb-[12px] md:py-[62px]'}>
                <Page className={'mb-[0] md:mb-10 flex flex-col lg:flex-row gap-x-[108px] justify-between md:items-center'}>
                    <div className={'pb-[20px] md:py-[62px] max-w-full lg:max-w-[527px]'}>
                        <h3 className={'leading-[24px] md:leading-[51px]'}>Unsere Leistung im Überblick</h3>

                        <hr className={'w-[125px] border-[1px] md:border-[4px] border-black my-[20px] md:my-[30px]'}/>

                        <ul className={'list-disc text-sm text-[#717171] md:text-[black] leading-[18px] md:leading-[27px] pl-5'}>
                            <li>Vollständig gekoppelte thermo-hydro-mechanisch-diffusive Simulationen für eingeerdeter
                                Höchstspannungskabel
                            </li>
                            <li>Standorterkundungen und Laboranalysen</li>
                            <li>Geotechnische, eingeerdete und geothermische Analysen und Planungen</li>
                            <li>Erstellungen digitaler Geländemodelle / UAV und Simulationen zum Lebenszyklus (digitale
                                Zwillinge)
                            </li>
                            <li>Komplexe numerische Simulationen / KI- Anwendungen</li>
                        </ul>
                    </div>

                    <Gallery
                        images={[
                            unsereGgallery1,
                            unsereGgallery2,
                            unsereGgallery3,
                            unsereGgallery4,
                            unsereGgallery5,
                        ]}/>
                </Page>

                <div className={'hidden md:block bg-primary h-[47px] w-[45%]'}></div>
            </div>

            <div className={'pt-0 md:pt-[61px] pb-[72px]'} ref={newsRef}>
                <div className={'flex w-full mb-[60px]'}>
                    <div className={'w-full md:w-1/2 flex justify-end'}>
                        <div className={'max-w-page md:max-w-[720px] w-full pl-[20px] md:pl-[72px]'}>
                            <h3 className={'text-primary text-[16px] md:text-[34px] font-medium md:font-bold leading-[24px] md:leading-[56px]'}>News</h3>

                            <hr className={'w-[106px] mt-[17px] border-[1px] md:border-[4px] border-primary'}/>
                        </div>
                    </div>
                    <div className={'hidden md:block w-1/2 pl-[5%]'}>
                        <div className={'h-[47px] w-full bg-primary'}></div>
                    </div>
                </div>

                <Page>
                    <div className={'w-full relative px-[28px] md:px-[70px]'}>
                        <Swiper
                            ref={newsSlider}
                            slidesPerView={1}
                            breakpoints={{
                                960: {
                                    slidesPerView: 2,
                                },
                                1355: {
                                    slidesPerView: 3,
                                },
                            }}
                            loop={true}
                        >
                            {news.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className={'w-full h-full flex justify-center items-center'}>
                                        <NewsCard
                                            image={item.image}
                                            heading={item.heading}
                                            description={item.description}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div
                            className="bg-white h-[28px] md:h-[70px] w-[28px] md:w-[70px] rounded-full flex items-center justify-center absolute z-[9] top-[50%] -translate-y-[50%] translate-x-0 md:-translate-x-[50%] left-0 cursor-pointer"
                            style={{boxShadow: '0px 2px 10.4px 0px #00000021'}} onClick={handleNewsPrev}>

                            <div className={'hidden xl:block'}>
                                <svg width="20" height="29" viewBox="0 0 20 29" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5 4.2002L4.5 15.1202L15.5 25.2002" stroke="black" strokeWidth="5"
                                          strokeLinecap="square"/>
                                </svg>
                            </div>

                            <div className={'block xl:hidden'}>
                                <svg width="7" height="11" viewBox="0 0 7 11" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 1.00696L1.6 5.37496L6 9.40696" stroke="black" strokeLinecap="square"/>
                                </svg>
                            </div>
                        </div>
                        <div
                            className=" bg-white h-[28px] md:h-[70px] w-[28px] md:w-[70px] rounded-full flex items-center justify-center absolute z-[9] top-[50%] -translate-y-[50%] translate-x-0 md:translate-x-[50%] right-0 cursor-pointer"
                            style={{boxShadow: '0px 2px 10.4px 0px #00000021'}} onClick={handleNewsNext}>

                            <div className={'hidden xl:block'}>
                                <svg width="20" height="29" viewBox="0 0 20 29" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 4.2002L15.5 15.1202L4.5 25.2002" stroke="black" strokeWidth="5"
                                          strokeLinecap="square"/>
                                </svg>
                            </div>

                            <div className={'block xl:hidden'}>
                                <svg width="7" height="11" viewBox="0 0 7 11" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.00696L5.4 5.37496L1 9.40696" stroke="black" strokeLinecap="square"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </Page>
            </div>
        </>
    );
}

export default Startseite