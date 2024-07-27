import Page from "@/components/Page"
import logo from "@/assets/images/logo.png"
import Dropdown from "@/components/nav/Dropdown.tsx";
import MobileDropdown from "@/components/nav/MobileDropdown.tsx";
import NavItem from "@/components/nav/NavItem.tsx";
import DropdownItem from "@/components/nav/DropdownItem.tsx";
import {Link, useLocation} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";

const Navbar = () => {

    const location = useLocation();

    // eslint-disable-next-line react-hooks/exhaustive-deps,@typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const isActive = useCallback((paths) => {
        let active = Boolean(paths.find((path:string) => location.pathname == path));

        if (!active) {
            active = Boolean(paths.find((path:string) => location.hash == path));
        }

        return active
    })

    const [open, setOpen] = useState(false);
    const [activeLabel, setActiveLabel] = useState('');


    useEffect(() => {
        setOpen(false)
    }, [location]);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    return (
        <>

            <div className={'hidden lg:block sticky z-[10] top-0 bg-white w-full'}>
                <Page className={'h-[114px] flex items-center justify-between'}>
                    <Link to={'/'}><img className={'w-[200px]'} src={logo} alt=""/></Link>

                    <div className={'flex items-center gap-x-[55px]'}>
                        <Dropdown
                            to={'/'}
                            label={'Startseite'}
                            active={isActive(['/', '#news'])}
                            activeLabel={activeLabel}
                            setActiveLabel={setActiveLabel}
                        >
                            <DropdownItem to={'/#news'} active={isActive(['#news'])}>News</DropdownItem>
                        </Dropdown>

                        <Dropdown
                            to={'/uber-uns'}
                            label={'Über uns'}
                            active={isActive(['/uber-uns', '/publikationen', '#highlights'])}
                            activeLabel={activeLabel}
                            setActiveLabel={setActiveLabel}
                        >
                            <DropdownItem to={'/publikationen'} active={isActive(['/publikationen'])}>Publikationen</DropdownItem>
                            <DropdownItem to={'/uber-uns/#highlights'} active={isActive(['#highlights'])}>Highlights</DropdownItem>
                        </Dropdown>

                        <Dropdown
                            to={'/geschaftsbereiche'}
                            active={isActive(['/geschaftsbereiche'])}
                            label={'Geschäftsbereiche'}
                            activeLabel={activeLabel}
                            setActiveLabel={setActiveLabel}
                        >
                            <DropdownItem to={'/geschaftsbereiche#energie'} active={isActive(['#energie'])}>Energie</DropdownItem>
                            <DropdownItem to={'/geschaftsbereiche#laboranalysen-and-felduntersuchungen'} active={isActive(['#laboranalysen-and-felduntersuchungen'])}>Laboranalysen & Felduntersuchungen</DropdownItem>
                            <DropdownItem to={'/geschaftsbereiche#ingenieurwese-and-numerik'} active={isActive(['#ingenieurwese-and-numerik'])}>Ingenieurwesen & Numerik</DropdownItem>
                            <DropdownItem to={'/geschaftsbereiche#gis-and-uav'} active={isActive(['#gis-and-uav'])}>GIS & UAV</DropdownItem>
                        </Dropdown>

                        <NavItem to={'/kontakt'} active={isActive(['/kontakt'])} label={'Kontakt'}></NavItem>
                    </div>
                </Page>
            </div>

            <Page className={'block lg:hidden w-full absolute z-[10]'}>
                <div className={'w-full relative mt-2'}>
                    <Link to={'/'}><img className={'absolute left-[50%] -translate-x-[50%] w-[102px]'} src={logo} alt=""/></Link>

                    <div className={'absolute left-0 cursor-pointer'} onClick={() => setOpen(true)}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25 16.25C24.3096 16.25 23.75 15.6904 23.75 15C23.75 14.3096 24.3096 13.75 25 13.75C25.6904 13.75 26.25 14.3096 26.25 15C26.25 15.6904 25.6904 16.25 25 16.25Z"
                                fill="#EC1E25"/>
                            <path
                                d="M4.925 13.75H20.075C20.7239 13.75 21.25 14.2761 21.25 14.925V15.075C21.25 15.7239 20.7239 16.25 20.075 16.25H4.925C4.27607 16.25 3.75 15.7239 3.75 15.075V14.925C3.75 14.2761 4.27607 13.75 4.925 13.75Z"
                                fill="#EC1E25"/>
                            <path
                                d="M4.925 20H25.075C25.7239 20 26.25 20.5261 26.25 21.175V21.325C26.25 21.9739 25.7239 22.5 25.075 22.5H4.925C4.27607 22.5 3.75 21.9739 3.75 21.325V21.175C3.75 20.5261 4.27607 20 4.925 20Z"
                                fill="#EC1E25"/>
                            <path
                                d="M4.925 7.5H25.075C25.7239 7.5 26.25 8.02607 26.25 8.675V8.825C26.25 9.47393 25.7239 10 25.075 10H4.925C4.27607 10 3.75 9.47393 3.75 8.825V8.675C3.75 8.02607 4.27607 7.5 4.925 7.5Z"
                                fill="#EC1E25"/>
                        </svg>
                    </div>
                </div>

                {open && <div className={'w-[291px] rounded-r-[30px] fixed inset-y-0 left-0 pl-[25px] pr-[17px] pt-11 z-[10] bg-white'}>
                  <div className={'flex justify-end'}>
                    <div className={'cursor-pointer mr-[7px]'} onClick={() => setOpen(false)}>
                      <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6.79503 7.30458L6.61816 7.12754L6.4413 7.30458L2.22633 11.5236C2.06996 11.6801 1.88212 11.75 1.66615 11.75C1.45017 11.75 1.26234 11.6801 1.10597 11.5236C0.788897 11.2062 0.788897 10.7189 1.10597 10.4015L5.32094 6.18246L5.49746 6.00576L5.32094 5.82907L1.10597 1.61005C0.788897 1.29268 0.788897 0.805305 1.10597 0.487931C1.4229 0.17069 1.90939 0.17069 2.22633 0.487931L6.4413 4.70695L6.61816 4.88398L6.79503 4.70695L11.01 0.487931C11.3269 0.17069 11.8134 0.17069 12.1304 0.487931C12.4474 0.805305 12.4474 1.29268 12.1304 1.61005L7.91539 5.82907L7.73887 6.00576L7.91539 6.18246L12.1304 10.4015C12.4474 10.7189 12.4474 11.2062 12.1304 11.5236C11.974 11.6801 11.7862 11.75 11.5702 11.75C11.3542 11.75 11.1664 11.6801 11.01 11.5236L6.79503 7.30458Z"
                          fill="black" stroke="white" strokeWidth="0.5"/>
                      </svg>
                    </div>
                  </div>

                  <div className={'flex flex-col gap-y-10 mt-[17px]'}>
                    <MobileDropdown
                      to={'/'}
                      label={'Startseite'}
                      active={isActive(['/', '#news'])}
                      activeLabel={activeLabel}
                      setActiveLabel={setActiveLabel}
                    >
                      <DropdownItem to={'/#news'} active={isActive(['#news'])}>News</DropdownItem>
                    </MobileDropdown>

                    <MobileDropdown
                      to={'/uber-uns'}
                      label={'Über uns'}
                      active={isActive(['/uber-uns', '/publikationen', '#highlights'])}
                      activeLabel={activeLabel}
                      setActiveLabel={setActiveLabel}
                    >
                      <DropdownItem to={'/publikationen'} active={isActive(['/publikationen'])}>Publikationen</DropdownItem>
                      <DropdownItem to={'/uber-uns/#highlights'} active={isActive(['#highlights'])}>Highlights</DropdownItem>
                    </MobileDropdown>

                    <MobileDropdown
                      to={'/geschaftsbereiche'}
                      active={isActive(['/geschaftsbereiche', '/energy-transportation', '/renwable-energy'])}
                      label={'Geschäftsbereiche'}
                      activeLabel={activeLabel}
                      setActiveLabel={setActiveLabel}
                    >
                      <DropdownItem to={'/geschaftsbereiche#energie'} active={isActive(['#energie'])}>Energie</DropdownItem>
                      <DropdownItem to={'/geschaftsbereiche#laboranalysen-and-felduntersuchungen'} active={isActive(['#laboranalysen-and-felduntersuchungen'])}>Laboranalysen & Felduntersuchungen</DropdownItem>
                      <DropdownItem to={'/geschaftsbereiche#ingenieurwese-and-numerik'} active={isActive(['#ingenieurwese-and-numerik'])}>Ingenieurwesen & Numerik</DropdownItem>
                      <DropdownItem to={'/geschaftsbereiche#gis-and-uav'} active={isActive(['#gis-and-uav'])}>GIS & UAV</DropdownItem>
                    </MobileDropdown>

                    <NavItem to={'/kontakt'} active={isActive(['/kontakt'])} label={'Kontakt'}></NavItem>
                  </div>
                </div>}

                {open && <div className={'fixed z-[8] inset-0'} style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}} onClick={() => setOpen(false)}></div>}
            </Page>
        </>
    );
}

export default Navbar;