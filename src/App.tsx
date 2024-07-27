import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Navbar from "@/components/layouts/Navbar.tsx";
import ScrollToTop from "@/components/ScrollToTop.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Startseite from "@/pages/Startseite.tsx";
import UberUns from "@/pages/UberUns.tsx";
import Geschaftsbereiche from "@/pages/Geschaftsbereiche.tsx";
import Footer from "@/components/layouts/Footer.tsx";
import EnergyTransportation from "@/pages/EnergyTransportation.tsx";
import RenwableEnergy from "@/pages/RenwableEnergy.tsx";
import EnergySpeicher from "@/pages/EnergySpeicher.tsx";
import Legal from "@/pages/Legal.tsx";
import Page404 from "@/pages/Page404.tsx";
import Publikationen from "@/pages/Publikationen.tsx";
import Kontakt from "@/pages/Kontakt.tsx";
import ScrollToTopButton from "@/components/layouts/ScrollToTopButton.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>

            <ScrollToTop>
                <Routes>
                    <Route path={'/'} element={<Startseite/>}/>
                    <Route path={'/uber-uns'} element={<UberUns/>}/>
                    <Route path={'/geschaftsbereiche'} element={<Geschaftsbereiche/>}/>
                    <Route path={'/energy-transportation'} element={<EnergyTransportation/>}/>
                    <Route path={'/renwable-energy'} element={<RenwableEnergy/>}/>
                    <Route path={'/energy-speicher'} element={<EnergySpeicher/>}/>
                    <Route path={'/legal'} element={<Legal/>}/>
                    <Route path={'/publikationen'} element={<Publikationen/>}/>
                    <Route path={'/kontakt'} element={<Kontakt/>}/>
                    <Route path={'/*'} element={<Page404/>}/>
                </Routes>
            </ScrollToTop>

            <Footer/>

            <ScrollToTopButton/>
        </BrowserRouter>
    )
}

export default App
