import * as React from 'react';
import * as Navbar from '../css/nav.module.css';
import { Link } from 'gatsby';
import {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaGraduationCap,
    FaLaptopCode,
    FaHome,
} from 'react-icons/fa';

const Nav = () => {
    return (
        <nav className={Navbar.navStyle}>
            <ul className={Navbar.navbarNav}>
                <li className={Navbar.navItem}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className={Navbar.navLink}>
                            <FaHome
                                style={{ width: '1.75rem', height: '1.75rem' }}
                            />
                            <span className={Navbar.linkText}>Home</span>
                        </div>
                    </Link>
                </li>
                <li className={Navbar.navItem}>
                    <Link to="/Education/" style={{ textDecoration: 'none' }}>
                        <div className={Navbar.navLink} >
                            <FaGraduationCap
                                style={{ width: '1.75rem', height: '1.75rem' }}
                            />
                            <span className={Navbar.linkText}>Education</span>
                        </div>
                    </Link>
                </li>
                <li className={Navbar.navItem}>
                    <Link to="/Experience/" style={{ textDecoration: 'none' }}>
                        <div className={Navbar.navLink} >
                            <FaLaptopCode
                                style={{ width: '1.75rem', height: '1.75rem' }}
                            />
                            <span className={Navbar.linkText}>Experience</span>
                        </div>
                    </Link>
                </li>
                <li className={Navbar.navItem}>
                    <a href="mailto:boojarrod@gmail.com" className={Navbar.navLink}>
                        <FaEnvelope
                            style={{ width: '1.75rem', height: '1.75rem' }}
                        />
                        <span className={Navbar.linkText}>Contact</span>
                    </a>
                </li>
                <li className={Navbar.navItem}>
                    <a href="https://www.github.com/Jtboone1" className={Navbar.navLink}>
                        <FaGithub
                            style={{ width: '1.75rem', height: '1.75rem' }}
                        />
                        <span className={Navbar.linkText}>Github</span>
                    </a>
                </li>
                <li className={Navbar.navItem}>
                    <a href="https://www.linkedin.com/in/jarrod-boone-01312915b/" className={Navbar.navLink}>
                        <FaLinkedin
                            style={{ width: '1.75rem', height: '1.75rem' }}
                        />
                        <span className={Navbar.linkText}>Linkedin</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
