import {ReactNode} from "react";
import {Link} from "react-router-dom";


const DropdownItem = ({children, to, active = false}: {children: ReactNode, to:string, active?: boolean}) => {
    return (
        <Link to={to} className={`text-[12px] lg:text-[16px] leading-[18px] px-[10px] py-[13px] rounded-[10px] cursor-pointer ${active ? 'lg:bg-primary lg:text-white text-primary' : 'lg:hover:bg-[#FCD3D3] lg:hover:text-primary'}`}>
            {children}
        </Link>
    );
}

export default DropdownItem;