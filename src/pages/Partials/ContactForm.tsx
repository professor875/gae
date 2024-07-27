import circleImage from "@/assets/images/kontakt/circle.png";
import Page from "@/components/Page.tsx";
import {useRef, useState} from "react";


const ContactForm = () => {

    type validationErrors = {
        company?: string,
        first_name?: string,
        last_name?: string,
        email?: string,
        telephone_number?: string,
        selection_of_subject_area?: string,
        subject?: string
        notice?: string

    }

    const form = useRef<HTMLFormElement>(null);

    const labels = {
        company: 'Firma',
        first_name: 'Vorname',
        last_name: 'Nachname',
        email: 'Email',
        telephone_number: 'Telefonnummer',
        selection_of_subject_area: 'Auswahl Fachgebiet',
        subject: 'Thema',
        notice: 'Mitteilung',
    }

    const categories = [
        {
            label: 'Energie',
            value: 'Energie',
            email: 'energy@geoanalysis-engineering.de',
        },
        {
            label: 'Ingenieurwesen',
            value: 'Ingenieurwesen',
            email: 'engineering@geoanalysis-engineering.de',
        },
        {
            label: 'KI, GIS & UAV',
            value: 'KI, GIS & UAV',
            email: 'GIS@geoanalysis-engineering.de',
        },
        {
            label: 'Laboranalyse & Standortuntersuchung',
            value: 'Laboranalyse & Standortuntersuchung',
            email: 'testing@geoanalysis-engineering.de',
        }
    ]

    const [errors, setErrors] = useState<validationErrors>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('')

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const sendEmail = async (e) => {
        e.preventDefault();
        setErrors({});

        const formData = new FormData(form.current!);

        // Validation logic
        const validatedData = validator(formData)
        if (validatedData !== false) {
            validatedData.to_email = getToEmail(formData)
        }

        // Send email
        if (form.current && validatedData) {
            setLoading(true);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            emailjs
                .send('service_al2esak', 'template_bi213so', validatedData, {
                    publicKey: 'WtTD52x9lZ9pJQPK2',
                })
                .then(
                    () => {
                        alert('Ihre Nachricht wurde zugestellt !!');
                        form.current!.reset();
                        setLoading(false);
                    },
                ).catch(
                () => {
                    alert('Hoppla!! Etwas ist schief gelaufen..');
                    setLoading(false);
                },
            );
        }
    };
    const validator = (formData: FormData) => {
        let error = false

        if (!formData.get('company')) {
            setErrors((prev) => {
                return {
                    ...prev,
                    ['company']: `Please fill in ${labels['company']}`
                }
            });
            error = true;

        }
        if (!formData.get('first_name')) {
            setErrors((prev) => {
                return {
                    ...prev,
                    ['first_name']: `Please fill in ${labels['first_name']}`
                }
            });
            error = true;
        }
        if (!formData.get('last_name')) {
            setErrors((prev) => {
                return {
                    ...prev,
                    ['last_name']: `Please fill in ${labels['last_name']}`
                }
            });
            error = true;
        }
        if (!formData.get('email')) {
            setErrors((prev) => {
                return {
                    ...prev,
                    ['email']: `Please fill in ${labels['email']}`
                }
            });
            error = true;
        }
        if (!formData.get('telephone_number')) {
            setErrors((prev) => {
                return {
                    ...prev,
                    ['telephone_number']: `Please fill in ${labels['telephone_number']}`
                }
            });
            error = true;
        }
        if (!formData.get('selection_of_subject_area')) {
            setErrors((prev) => {
                return {
                    ...prev,
                    ['selection_of_subject_area']: `Please fill in ${labels['selection_of_subject_area']}`
                }
            });
            error = true;
        }
        if (!formData.get('subject')) {
            setErrors((prev) => {
                return {
                    ...prev,
                    ['subject']: `Please fill in ${labels['subject']}`
                }
            });
            error = true;
        }
        if (!formData.get('notice')) {
            setErrors((prev) => {
                return {
                    ...prev,
                    ['notice']: `Please fill in ${labels['notice']}`
                }
            });
            error = true;
        }
        if (error) {
            return false;
        }else {
            return {
                company: formData.get('company'),
                first_name: formData.get('first_name'),
                last_name: formData.get('last_name'),
                email: formData.get('email'),
                telephone_number: formData.get('telephone_number'),
                selection_of_subject_area: formData.get('selection_of_subject_area'),
                subject: formData.get('subject'),
                notice: formData.get('notice'),
                to_email: ''
            };
        }
    }
    const getToEmail = (formData: FormData) => {
        return categories.find((category) => category.value === formData.get('selection_of_subject_area'))?.email ?? '';
    }

    const updateSelectedCategory = () => {
        const input = form?.current?.elements?.namedItem('selection_of_subject_area') as HTMLInputElement;
        setSelectedCategory(input.value);
    }

    return (
        <>
            <Page className='mb-[30px] md:mb-[62px]'>
                <p className='text-[18px] md:text-[40px] leading-[24px] md:leading-[60px] text-primary mb-[30px]'>Kontaktieren Sie uns</p>

                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-[30px]">
                    <div
                        className={'p-[20px] md:py-[40px] md:px-[40px] rounded-[30px] md:rounded-[55px] w-full lg:w-fit bg-no-repeat bg-right-bottom'}
                        style={{boxShadow: '0px 0px 22.6px 0px #00000029', backgroundImage: `url(${circleImage})`}}>
                        <h5 className='text-[16px] md:text-[24px] font-[500] mb-[10px] md:mb-[40px]'>GeoAnalysis-Engineering
                            GmbH</h5>

                        <ul className="space-y-[22px]">
                            <li className='flex gap-2'>
                                <span>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.677246" width="24" height="24" rx="5" fill="#FF2929"/>
                                    <path
                                        d="M17.8808 11.0781H18.9907C18.9907 8.23129 16.8414 6.08423 13.9907 6.08423V7.19411C16.2449 7.19411 17.8808 8.82729 17.8808 11.0781Z"
                                        fill="white"/>
                                    <path
                                        d="M13.2981 9.78323C14.8328 9.78323 15.4874 10.4379 15.4874 11.9726H16.947C16.947 9.61903 15.6516 8.32366 13.2981 8.32366V9.78323ZM15.7954 13.7555C15.6552 13.628 15.4709 13.56 15.2815 13.5659C15.0921 13.5717 14.9124 13.651 14.7803 13.7868L13.0339 15.5829C12.6135 15.5026 11.7684 15.2391 10.8985 14.3714C10.0286 13.5008 9.76518 12.6535 9.68709 12.236L11.4816 10.4889C11.6177 10.3569 11.697 10.1772 11.7029 9.98772C11.7087 9.79826 11.6406 9.61395 11.513 9.4738L8.81645 6.50868C8.68877 6.36809 8.51132 6.28281 8.32177 6.27096C8.13223 6.2591 7.94553 6.3216 7.80132 6.44519L6.21768 7.80332C6.09151 7.92995 6.0162 8.09848 6.00604 8.27695C5.9951 8.4594 5.78638 12.7812 9.13756 16.1338C12.0611 19.0566 15.7232 19.2705 16.7317 19.2705C16.8791 19.2705 16.9696 19.2661 16.9937 19.2646C17.1722 19.2546 17.3406 19.179 17.4666 19.0523L18.824 17.4679C18.9477 17.3238 19.0103 17.1371 18.9986 16.9476C18.9869 16.758 18.9017 16.5805 18.7613 16.4528L15.7954 13.7555Z"
                                        fill="white"/>
                                    </svg>
                                </span>
                                <span>+49 431 53032960</span>
                            </li>
                            <li className='flex gap-2'>
                                <span><svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.677246" width="24" height="24" rx="5" fill="#FF2929"/>
                                <path
                                    d="M20.5 9.27735C20.5 7.62049 19.1569 6.27734 17.5 6.27734H7.5C5.84315 6.27734 4.5 7.62049 4.5 9.27734V16.0773C4.5 17.7342 5.84315 19.0773 7.5 19.0773H17.5C19.1569 19.0773 20.5 17.7342 20.5 16.0773V9.27735ZM18.9 9.10134C18.9 9.33525 18.7795 9.55265 18.5812 9.67662L14.09 12.4836C13.1172 13.0916 11.8828 13.0916 10.91 12.4836L6.41885 9.67662C6.2205 9.55265 6.1 9.33525 6.1 9.10134C6.1 8.5685 6.6861 8.24366 7.13795 8.52606L10.91 10.8836C11.8828 11.4916 13.1172 11.4916 14.09 10.8836L17.8621 8.52606C18.3139 8.24366 18.9 8.5685 18.9 9.10134Z"
                                    fill="white"/>
                                </svg>
                                </span>
                                <span>info@geoanalysis-engineering.de</span>
                            </li>
                            <li className='flex gap-2'>
                                <span><svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.677246" width="24" height="24" rx="5" fill="#FF2929"/>
                                <path
                                    d="M12.5 5.04077C10.9093 5.04265 9.38425 5.67539 8.25944 6.8002C7.13463 7.92501 6.50188 9.45004 6.50001 11.0408C6.4981 12.3407 6.92272 13.6054 7.70873 14.6408C7.70873 14.6408 7.87237 14.8562 7.8991 14.8873L12.5 20.3135L17.1031 14.8846C17.1271 14.8557 17.2913 14.6408 17.2913 14.6408L17.2918 14.6391C18.0774 13.6042 18.5019 12.3401 18.5 11.0408C18.4981 9.45004 17.8654 7.92501 16.7406 6.8002C15.6158 5.67539 14.0907 5.04265 12.5 5.04077ZM12.5 13.2226C12.0685 13.2226 11.6466 13.0946 11.2878 12.8549C10.9291 12.6151 10.6494 12.2744 10.4843 11.8757C10.3191 11.477 10.2759 11.0383 10.3601 10.6151C10.4443 10.1919 10.6521 9.80312 10.9572 9.49799C11.2624 9.19286 11.6511 8.98506 12.0743 8.90087C12.4976 8.81669 12.9363 8.85989 13.3349 9.02503C13.7336 9.19017 14.0744 9.46982 14.3141 9.82861C14.5539 10.1874 14.6818 10.6092 14.6818 11.0408C14.6811 11.6192 14.451 12.1737 14.042 12.5827C13.633 12.9918 13.0784 13.2219 12.5 13.2226Z"
                                    fill="white"/>
                                </svg>
                                </span>
                                <span>Schauenburgerstrasse 116, 24118 Kiel</span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full lg:w-fit">
                        <form ref={form} className="w-[100%] space-y-[30px]" onChange={() => updateSelectedCategory()}>
                            <input name="to_email" type="text"
                                   className="hidden"/>
                            <label htmlFor="Firma" className="text-sm md:text-[16px] col-span-6">Firma<br/>
                                <input name="company" type="text"
                                       className=" min-w-full md:min-w-[278px] pt-2 focus:border-b focus:outline-none border-b border-[#717171]"/>
                                <br/>
                                <p className="text-primary text-xs pt-2">{errors.company}</p>
                            </label>

                            <div
                                className="flex flex-col sm:flex-row w-full justify-start sm:justify-between gap-[30px] lg:gap-10 ">
                                <label htmlFor="Vorname"
                                       className="text-sm md:text-[16px] col-span-6">Vorname<br/>
                                    <input name="first_name" type="text"
                                           className=" min-w-full md:min-w-[278px] pt-2 focus:border-b focus:outline-none border-b border-[#717171]"/>
                                    <br/>
                                    <p className="text-primary text-xs pt-2">{errors.first_name}</p>
                                </label>

                                <label htmlFor="Nachname" className="text-sm md:text-[16px] col-span-6">Nachname<br/>
                                    <input name="last_name" type="text"
                                           className=" min-w-full md:min-w-[278px] pt-2 focus:border-b focus:outline-none border-b border-[#717171]"/>
                                    <br/>
                                    <p className="text-primary text-xs pt-2">{errors.last_name}</p>
                                </label>
                            </div>

                            <div
                                className="flex flex-col sm:flex-row w-full justify-start sm:justify-between gap-[30px] lg:gap-10 ">
                                <label htmlFor="Email" className="text-sm md:text-[16px] col-span-6">Email<br/>
                                    <input name="email" type="text"
                                           className=" min-w-full md:min-w-[278px] pt-2 focus:border-b focus:outline-none border-b border-[#717171]"/>
                                    <br/>
                                    <p className="text-primary text-xs pt-2">{errors.email ? "please write a valid Email" : ''}</p>
                                </label>

                                <label htmlFor="Telefonnummer" className="text-sm md:text-[16px] col-span-6">Telefonnummer<br/>
                                    <input name="telephone_number" type="text"
                                           className=" min-w-full md:min-w-[278px] pt-2 focus:border-b focus:outline-none border-b border-[#717171]"/>
                                    <br/>
                                    <p className="text-primary text-xs pt-2">{errors.telephone_number}</p>
                                </label>
                            </div>

                            <div className="w-full lg:space-y-2">
                                <h5 className=" text-[18px] font-semibold text-black">Auswahl Fachgebiet?</h5>
                                <div
                                    className=" grid grid-cols-2 lg:flex text-[12px] gap-2 lg:gap-3 items-center justify-between text-gray-600 checked:text-black mt-2 md:mt-0">
                                    {categories.map((category, index) => (
                                        <label key={index} className="flex items-center gap-x-2"
                                               htmlFor={'radio' + index}>
                                            <input className='radio-custom' name="selection_of_subject_area"
                                                   id={'radio' + index}
                                                   value={category.value}
                                                   type="radio"/>
                                            <span className={`text-[16px] font-[300] leading-[24px] ${selectedCategory == category.label && 'text-black'}`}>{category.label}</span>
                                        </label>
                                    ))}

                                </div>
                                <p className="text-primary text-xs pt-2">{errors.selection_of_subject_area}</p>
                            </div>
                            <br/>
                            <label htmlFor="varname"
                                   className="w-full text-sm md:text-[16px] col-span-6">Betreff<br/>
                                <input placeholder="Schreiben Sie Ihr Betreff..."
                                       type="text"
                                       name="subject"
                                       className=" max-w-full w-full py-2 focus:border-b focus:outline-none border-b border-[#717171]"/>
                                <br/><p className="text-primary text-xs pt-2">{errors.subject}</p>
                            </label>
                            <br/>
                            <label htmlFor="varname"
                                   className="w-full text-sm md:text-[16px] col-span-6">Mitteilung<br/>
                                <textarea
                                    rows={6}
                                    placeholder='Schreiben Sie Ihre Nachricht...'
                                    className="max-w-full w-full py-2 focus:border-b focus:outline-none border-b border-[#717171]"
                                    name="notice"></textarea>
                                <br/><p className="text-primary text-xs pt-2">{errors.notice}</p>
                            </label>
                        </form>

                        <button disabled={loading} onClick={(e) => sendEmail(e)}
                                className="w-full md:w-fit py-[15px] mt-[30px] md:mt-[51px] float-end px-[48px] rounded-lg bg-primary text-sm md:text-[16px] text-white font-semibold">{loading ? 'Bitte warten..' : 'Nachricht senden'}
                        </button>
                    </div>
                </div>
            </Page>
        </>
    );
}

export default ContactForm;