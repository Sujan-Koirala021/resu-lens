
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQ from './pages/FAQPage';
// import ScreeningPage from './pages/ScreeningPage';
import RankPage from './pages/RankPage';
import flagsmith from 'flagsmith'
import { useFlags, useFlagsmith } from 'flagsmith/react';
import MaintenancePage from './pages/MaintenancePage';

function AppRouter() {
    const flags = useFlags(['maintenance']);
    const isMaintenance = flags.maintenance.enabled;

    if (isMaintenance) {
        return <MaintenancePage/>
    }
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/faq" element={<FAQ />} />
                    <Route exact path="/screen" element={<RankPage />} />
                    {/* <Route exact path="/based-on-job-description" element={<RankPage/>} /> */}


                    {/* <Route exact path="/help" element={<HelpPage/>} /> */}
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter