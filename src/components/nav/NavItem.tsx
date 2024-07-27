import {Link} from "react-router-dom";

const NavItem = ({label, to, active = false}: { label: string, to: string, active: boolean }) => {
    return (
        <div className={`relative text-[14px] lg:text-[20px] hover:text-primary hover:font-medium flex items-center gap-x-[10px] cursor-pointer leading-[30px] ${active && 'mb-0 lg:mb-[6px] text-primary active font-medium'}`}>
            <Link to={to}>{label}</Link>

            {
                active && <div className={'hidden lg:block absolute -right-12 bottom-[50%] translate-y-[50%] lg:translate-y-[0] lg:right-[50%] lg:-translate-x-[50%] lg:-bottom-3'}>
                <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3.5" cy="3" r="3" fill="#FC0A0A"/>
                </svg>
              </div>
            }
        </div>
    );
}

export default NavItem;