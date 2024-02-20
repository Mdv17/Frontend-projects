import { useState } from 'react';
// The Link imported is gonna be used for the logo and the NavLink is gonna be used for the nav links. We use NavLink comes with a prop to dictate which page you are on     
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import { links } from '../data'
import { VscThreeBars } from "react-icons/vsc";
import { MdOutlineClose } from "react-icons/md";
import './navbar.css'

const Navbar = () => {
    const [isNavShowing, setNavShowing] = useState(false);

    return (
        <nav>
            <div className="container nav__container">
                <Link to='/'>
                    <img src={Logo} alt='Nav logo' className='logo' onClick={() => setNavShowing(false)} />
                </Link>
                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                    {
                        links.map(({name, path}, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setNavShowing(prev => !prev)}>
                                        {name}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className='nav__toggle-btn' onClick={() => setNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <MdOutlineClose /> : <VscThreeBars/>
                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar