import './scss/app.scss';
import { Route, Routes } from 'react-router';
import Home from './components/Pages/Home.jsx';
import CookiesNotice from './components/Pages/CookiesNotice.jsx';
import TermsAndConditions from './components/Pages/TermsAndConditions.jsx';
import PrivacyNotice from './components/Pages/PrivacyNotice.jsx';
import PageNotFound from './components/Pages/PageNotFound.jsx';


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cookies-notice" element={<CookiesNotice />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-notice" element={<PrivacyNotice />} />
            <Route path="/*" element={<PageNotFound />} />
        </Routes>
    )
}

export default App

