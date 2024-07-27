import {ReactNode, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";

interface DropdownProps {
    label: string,
    children: ReactNode,
    to: string,
    activeLabel: string,
    setActiveLabel: (label: string) => void,
    active?: boolean
}

const Dropdown = ({label, children, to, activeLabel, setActiveLabel, active = false}: DropdownProps) => {

    const location = useLocation()

    useEffect(() => {
        setActiveLabel('')
    }, [location]);

    const handleClick = () => {
        if (activeLabel == label) {
            setActiveLabel('')
        } else {
            setActiveLabel(label)
        }
    }

    return (
        <div className={'relative group'}>
            <div
                className={`hover:text-primary hover:font-medium text-[20px] flex items-center gap-x-[10px] cursor-pointer leading-[30px] relative z-[10] nav-item w-fit ${active && 'mb-[6px] text-primary active font-medium'}`}
            >
                <div className={'relative'}>
                    <Link to={to}>{label}</Link>

                    {
                        active && <div className={'absolute right-[50%] -translate-x-[50%] -bottom-3'}>
                        <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="3.5" cy="3" r="3" fill="#FC0A0A"/>
                        </svg>
                      </div>
                    }
                </div>

                <svg onClick={() => handleClick()} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.0002 12.5C9.89048 12.5006 9.78176 12.4796 9.68023 12.4381C9.5787 12.3967 9.48635 12.3356 9.40849 12.2583L6.07515 8.92499C5.91823 8.76807 5.83008 8.55524 5.83008 8.33332C5.83008 8.11141 5.91823 7.89858 6.07515 7.74166C6.23207 7.58474 6.4449 7.49658 6.66682 7.49658C6.88874 7.49658 7.10157 7.58474 7.25849 7.74166L10.0002 10.4917L12.7418 7.74999C12.9012 7.61347 13.1063 7.54213 13.316 7.55023C13.5258 7.55833 13.7247 7.64528 13.8731 7.79369C14.0215 7.9421 14.1085 8.14105 14.1166 8.35078C14.1247 8.56051 14.0533 8.76557 13.9168 8.92499L10.5835 12.2583C10.4283 12.4123 10.2188 12.4991 10.0002 12.5Z"/>
                </svg>
            </div>

            <div className={'hidden group-hover:block absolute z-[10] bottom-0 translate-y-[100%]'}>
                <div
                    className={`flex flex-col gap-y-[5px] p-[10px] mt-5 rounded-[10px] bg-white right-0`}
                    style={{boxShadow: '8px 8px 25px 0px #00000014'}}
                >
                    {children}
                </div>
            </div>

            <div className={'hidden group-hover:block fixed inset-0 z-[9] pointer-events-none'}
                 onClick={() => setActiveLabel('')}></div>
        </div>
    );
}

export default Dropdown;