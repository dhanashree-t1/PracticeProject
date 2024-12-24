import './App.css';
import CollapsibleNavbar from './components/Navbar.js'; 
import CombinedComponent from './components/PlayerComponent.js';
import Imagecards from './components/imagecards.js';
import GridExample from './components/secondcard.js';
import ApplyNowSection from './components/ApplyNowSection.js';
import Courses from './components/Courses.js';
import FactsSection from './components/FactsSection.js';
import ContactUsPage from './components/ContactUsPage.js';
function App() {
    return (
        <div>
            <CollapsibleNavbar />
            <CombinedComponent />
            <Imagecards />
            <GridExample />
            <ApplyNowSection />
            <Courses />
           <FactsSection />
           <ContactUsPage />
        </div>
    );
}

export default App;
