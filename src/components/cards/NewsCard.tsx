import {useState} from "react";

const NewsCard = ({image, heading, description}: {image: string, heading: string, description: string}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={'rounded-[34px] py-[20px] px-[13px] md:px-[20px] w-[239px] md:w-[348px] h-[332px] md:h-[451px] relative group hover:bg-primary'} style={{boxShadow: '-4px 4px 21px 0px #00000026'}}>
            <div className={'rounded-[22px] w-full h-[250px] md:h-[319px] overflow-hidden relative'}>
                <img src={image} className={'w-full h-full object-cover object-center'} alt=""/>

                <button className={'bg-white text-[12px] md:text-[14px] leading-[18px] md:leading-[21px] font-semibold py-2 md:py-[14px] px-3 md:px-7 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-[5px] group-hover:bg-primary group-hover:text-white'} onClick={() => setOpen(true)}>Mehr lesen</button>
            </div>

            <hr className={'w-[141px] border-[1px] border-primary group-hover:border-white mt-[12px] md:mt-[23px] mb-[12px] md:mb-[13px]'}/>

            <p className={'text-[10px] md:text-[18px] font-medium leading-[18px] md:leading-[27px] group-hover:text-white'}>{heading}</p>

            <div className={`absolute inset-0 bg-white rounded-[34px] transition-all duration-500 py-[20px] px-[18px] text-[10px] md:text-[14px] leading-[18px] md:leading-[21px] ${open ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className={'flex justify-end mb-2'}>
                    <div className={'cursor-pointer'} onClick={() => setOpen(false)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM14.3 14.3C13.91 14.69 13.28 14.69 12.89 14.3L10 11.41L7.11 14.3C6.72 14.69 6.09 14.69 5.7 14.3C5.31 13.91 5.31 13.28 5.7 12.89L8.59 10L5.7 7.11C5.31 6.72 5.31 6.09 5.7 5.7C6.09 5.31 6.72 5.31 7.11 5.7L10 8.59L12.89 5.7C13.28 5.31 13.91 5.31 14.3 5.7C14.69 6.09 14.69 6.72 14.3 7.11L11.41 10L14.3 12.89C14.68 13.27 14.68 13.91 14.3 14.3Z"
                                fill="black"/>
                        </svg>
                    </div>
                </div>
                <p className={'font-medium'}>{heading}</p>
                <br/>
                <p className={'news-card-scroll-bar'}>{description}</p>
            </div>
        </div>
    );
}

export default NewsCard;