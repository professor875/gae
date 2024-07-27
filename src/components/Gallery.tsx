import {useState} from "react";
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import SliderPagination from "@/components/SliderPagination.tsx";


const Gallery = ({images}: {
    images: string[]
}) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const currentImageUrl = images.find((_, index) => index === currentImageIndex);

    const [currentSliderIndex, setCurrentSliderIndex] = useState(0);

    return (
        <>
            <div className={`hidden md:block rounded-3xl overflow-hidden w-full max-w-full lg:max-w-[641px]`}>
                <img className={'w-full h-[342px]'} src={currentImageUrl} alt=""/>

                <div className={`flex gap-x-[7px] mt-[9px] gallery-tray-scroll-bar`}>
                    {images.map((image, index) => (
                        <img
                            className={`cursor-pointer object-cover object-center w-[122px] h-[99px] ${index == currentImageIndex && 'border-[2px] border-primary'}`}
                            src={image} key={index} onClick={() => setCurrentImageIndex(index)} alt=""/>
                    ))}
                </div>
            </div>

            <div className={`block md:hidden rounded-[12px] overflow-hidden relative h-[300px]`}>
                <Swiper
                    onSwiper={(swiper) => setCurrentSliderIndex(swiper?.realIndex)}
                    onSlideChange={(swiper) => setCurrentSliderIndex(swiper?.realIndex)}
                    loop={true}
                    spaceBetween={50}
                    modules={[Pagination]}
                    className="mySwiper w-full h-full"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img className={'w-full h-full object-cover'} src={image} alt=""/>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <SliderPagination count={images.length} currentSliderIndex={currentSliderIndex}/>
            </div>
        </>
    );
}

export default Gallery;