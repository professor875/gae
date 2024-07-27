import Page from "@/components/Page"
import {Link} from "react-router-dom";
import certificate from "@/assets/images/footer/certificate.png";

const Navbar = () => {
    return (
        <div className={'p-[20px] md:py-9 md:pb-10 bg-secondary'}>
            <Page className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[50px] xl:gap-[85px] text-white md:leading-[24px]'}>
                <div className={'flex justify-start lg:justify-center'}>
                    <div className={'w-fit'}>
                        <p className={'text-[14px] md:text-[24px] font-medium md:font-semibold'}>GeoAnalysis-Engineering
                            GmbH</p>
                        <p className={'text-[12px] md:text-[16px] text-[#A6A6A6] md:text-white mt-2 md:mt-6'}>Schauenburgerstrasse 116, 24118 Kiel, Deutschland</p>
                        <p className={'text-[12px] md:text-[16px] text-[#A6A6A6] md:text-white mt-2 md:mt-6'}>501-243 Northfield Dr E, Waterloo N2K0H2, Canada</p>
                    </div>
                </div>

                <div className={'flex justify-start lg:justify-center'}>
                    <div className={'w-fit'}>
                        <p className={'text-[14px] md:text-[24px] font-medium md:font-semibold'}>Kontakt</p>
                        <p className={'text-[12px] md:text-[16px] text-[#A6A6A6] md:text-white mt-2 md:mt-6'}>Telefon: +49 431 53032960 (DE)</p>
                        <p className={'text-[12px] md:text-[16px] text-[#A6A6A6] md:text-white'}>Fax: +49 (0) 431 97991145 (DE)</p>
                        <p className={'text-[12px] md:text-[16px] text-[#A6A6A6] md:text-white mt-2 md:mt-6'}>Telefon: +15197788139 (CA)</p>
                        <p className={'text-[12px] md:text-[16px] text-[#A6A6A6] md:text-white'}>info@geoanalysis-engineering.de</p>
                        <p className={'text-[12px] md:text-[16px] text-[#A6A6A6] md:text-white'}>info@geoanalysis.ca</p>
                    </div>
                </div>

                <div className={'flex justify-start lg:justify-center'}>
                    <div className={'w-fit'}>
                        <p className={'text-[14px] md:text-[24px] font-medium md:font-semibold'}>Rechtliche Hinweise</p>
                        <p className={'text-[12px] md:text-[16px] font-medium text-[#A6A6A6] md:text-white mt-2 md:mt-6 border-b border-primary w-fit mb-1'}>
                            <Link to={'/legal'}>Impressum</Link>
                        </p>
                        <p className={'text-[12px] md:text-[16px] font-medium text-[#A6A6A6] md:text-white'}>Our social
                            accounts</p>
                        <div className={'flex gap-x-3 mt-2 md:mt-6'}>
                            <a href="https://x.com/GeoAnalysis_Eng" target={'_blank'}>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.49456 0.465332C2.89434 0.465332 0.780273 2.57939 0.780273 5.17962V28.751C0.780273 31.3513 2.89434 33.4653 5.49456 33.4653H29.066C31.6662 33.4653 33.7803 31.3513 33.7803 28.751V5.17962C33.7803 2.57939 31.6662 0.465332 29.066 0.465332H5.49456ZM27.3792 6.65283L19.7332 15.389L28.7271 27.2778H21.6852L16.1754 20.0664L9.86264 27.2778H6.36376L14.5401 17.9303L5.91443 6.65283H13.1332L18.12 13.2455L23.8803 6.65283H27.3792ZM24.5948 25.1859L12.0798 8.63431H9.99523L22.6501 25.1859H24.5874H24.5948Z"
                                        fill="white"/>
                                </svg>
                            </a>

                            <a href="https://www.linkedin.com/company/geoanalysis-engineering" target={'_blank'}>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M31.4231 0.415039H3.13005C1.83362 0.415039 0.780273 1.48638 0.780273 2.80153V31.1292C0.780273 32.4443 1.83362 33.5156 3.13005 33.5156H31.4231C32.7196 33.5156 33.7803 32.4443 33.7803 31.1292V2.80153C33.7803 1.48638 32.7196 0.415039 31.4231 0.415039ZM10.7539 28.787H5.86286V12.9903H10.7613V28.787H10.7539ZM8.3084 10.8329C6.73943 10.8329 5.47246 9.55465 5.47246 7.98828C5.47246 6.42191 6.73943 5.1437 8.3084 5.1437C9.87001 5.1437 11.1443 6.42191 11.1443 7.98828C11.1443 9.56204 9.87737 10.8329 8.3084 10.8329ZM29.0881 28.787H24.197V21.1029C24.197 19.2706 24.1602 16.9136 21.6557 16.9136C19.1071 16.9136 18.7167 18.9085 18.7167 20.9699V28.787H13.8256V12.9903H18.5178V15.1478H18.5841C19.2396 13.9065 20.8381 12.5987 23.2173 12.5987C28.1673 12.5987 29.0881 15.8718 29.0881 20.1276V28.787Z"
                                        fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={'flex justify-start lg:justify-center'}>
                    <div className={'w-fit'}>
                        <img src={certificate} alt=""/>
                    </div>
                </div>
            </Page>
        </div>
    );
}

export default Navbar;