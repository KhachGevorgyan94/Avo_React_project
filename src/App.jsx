import imagTest from './assets/images/banner.jpg'
import {Inputs} from "./components/Inputs/Inputs";
import {useState} from "react";

function App() {

    const [showInputs, setShowInputs] = useState(false)

    return (
        <div className={'G-list'}>
            <button onClick={() => {
                setShowInputs(!showInputs)
            }}>Click
            </button>
            {showInputs ? <Inputs/> : null}
        </div>
    );
}

export default App;
