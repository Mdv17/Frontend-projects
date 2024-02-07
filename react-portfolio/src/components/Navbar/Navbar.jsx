import React, {useState} from 'react';

import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);



    // <nav> is a semantic HTML element. Semantic HTML elements have names that describe their meaning or function, rather than their appearance or presentation. Semantic HTML elements help browsers, search engines, screen readers, and other web services to understand the structure and content of a web page. Semantic HTML elements also make the code more readable and maintainable for web developers.
    // a systematic html is like a div but has a special name that let a browser know what its function is.
    return (
        
        <nav className={styles.navbar}>
            {/* i am using / so that it redirects to the home page */}
            <a className={styles.title} href='/'>
                Portfolio
            </a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} 
                src={
                    menuOpen 
                    ? getImageUrl('nav/closeIcon.png')
                    : getImageUrl('nav/menuIcon.png')
                } 
                alt='menu-Button'
                onClick={() => setMenuOpen(!menuOpen)}
                />
                {/* We gonna setMenuOpen to false so that when you click one of the menuitems it will automatically close */}
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#experience'>Experience</a>
                    </li>
                    <li>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul> 
            </div>
        </nav>
    );
};