import {useState} from "react";
import {Header} from "./components/Header/Header";
import {Home} from "./pages/Home/Home";
import {About} from "./pages/About/About";
import {Contact} from "./pages/Contact/Contact";
import {Navigate, Route, Routes} from "react-router-dom";
import {RouterNames} from "./routers/router";

function App() {


    return (
        <>
            <Header/>
            <div>
                <Routes>
                    <Route path={RouterNames.HOME} element={<Home/>}/>
                    <Route path={RouterNames.ABOUT} element={<About/>}/>
                    <Route path={RouterNames.CONTACT} element={<Contact/>}/>
                    <Route path={'/*'} element={<Navigate to={RouterNames.HOME}/>}></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
