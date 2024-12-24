import './App.css';
import CollapsibleNavbar from './components/Navbar.js'; 
import CombinedComponent from './components/PlayerComponent.js';
import Imagecards from './components/imagecards.js';
import GridExample from './components/secondcard.js';

function App() {
    return (
        <div>
            <CollapsibleNavbar />
            <CombinedComponent />
            <Imagecards />
            <h1>Hello</h1>
            <GridExample />
        </div>
    );
}

export default App;
