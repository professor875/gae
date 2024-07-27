import {ServiceType} from "@/types.ts";
import {Link} from "react-router-dom";

const ServiceCard = ({service}: { service: ServiceType }) => {
    return (
        <div className={'bg-white flex flex-col w-[293px] py-[22px] px-[16px] rounded-[50px]'}
             style={{boxShadow: '0px 0px 14px 0px #0000001F'}}>

            <Link to={service.heading.path}>
                <p className={`text-[18px] text-primary text-center leading-[32px] font-medium uppercase hover:underline`}>{service.heading.label}</p>

                <div className={'flex-grow flex justify-center items-center'}>
                    <img className={'max-h-[158px] bg-contain'} src={service.image} alt=""/>
                </div>
            </Link>

            <hr className={'w-full border-[1px] border-primary'}/>

            <ul className={'mt-3 list-disc text-primary pl-6 text-[14px] leading-[21px]'}>
                {service.points.map((point, index) => (
                    <>
                        {
                            point.path
                                ? <Link to={point.path} key={index}>
                                    <li className={'hover:underline'}>{point.label}</li>
                                </Link>
                                : <li key={index}>{point.label}</li>
                        }
                    </>
                ))}
            </ul>
        </div>
    );
}

export default ServiceCard;