

const SliderPagination = ({count, currentSliderIndex}: {count: number, currentSliderIndex: number}) => {
    return (
        <div className={'absolute z-[9] bottom-[15px] md:bottom-[66px] left-[50%] -translate-x-[50%] flex gap-x-[5px]'}>
            {[...Array(count)].map((_, index) => (
                <div key={index}
                     className={`transition-all duration-300 h-1 md:h-2 rounded-[16px] ${currentSliderIndex == index ? 'bg-white w-6 md:w-16' : ' w-[10px] md:w-[22px] bg-[#FFFFFF94]'}`}></div>
            ))}
        </div>
    );
}

export default SliderPagination;