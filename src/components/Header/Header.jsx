import {Link, NavLink} from "react-router-dom";
import {RouterNames} from "../../routers/router";

export const Header = ()=>{
    return <header>
        <div className={'G-container'}>
            <div className={'header-block'}>
                <a href="">LOGO</a>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={RouterNames.HOME}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={RouterNames.ABOUT}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={RouterNames.CONTACT}>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
}
