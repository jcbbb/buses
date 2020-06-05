import React, { useContext, useState } from 'react';
import MenuContext from '../../context/MenuContext';
import UserContext from '../../context/UserContext';
import { ReactComponent as RefreshIcon } from '../../assets/icons/refresh-cw.svg';
import { ReactComponent as RegistrationIcon } from '../../assets/icons/user-plus.svg';
import { ReactComponent as FileIcon } from '../../assets/icons/file-text.svg';
import { ReactComponent as CheckIcon } from '../../assets/icons/check-square.svg';
import { ReactComponent as ChevronIcon } from '../../assets/icons/chevron-down.svg';
import { ReactComponent as CheckmarkIcon } from '../../assets/icons/check.svg';
import { NavLink } from 'react-router-dom';
import ProfileImage from '../../assets/images/profile-image.png';

import './nav.scss';

const Nav = () => {
    const { isOpen } = useContext(MenuContext);
    const user = useContext(UserContext);
    const [popupOpen, setPopupOpen] = useState(false);
    return (
        <nav className={isOpen ? 'nav nav--active' : 'nav'}>
            <ul className="nav__links">
                <li className="nav__item">
                    <NavLink exact to="/" className="nav__link" activeClassName="nav__link--active">
                        <span className="nav__link-icon">
                            <RefreshIcon />
                        </span>
                        Update
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="/register"
                        className="nav__link"
                        activeClassName="nav__link--active"
                    >
                        <span className="nav__link-icon">
                            <RegistrationIcon />
                        </span>
                        Registration
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="/results"
                        className="nav__link"
                        activeClassName="nav__link--active"
                    >
                        <span className="nav__link-icon">
                            <FileIcon />
                        </span>
                        Results
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="/checkup"
                        className="nav__link"
                        activeClassName="nav__link--active"
                    >
                        <span className="nav__link-icon">
                            <CheckIcon />
                        </span>
                        Checkup
                    </NavLink>
                </li>
            </ul>
            <div
                className="nav__profile nav__profile--hover"
                onClick={() => setPopupOpen((open) => !open)}
            >
                <div className="nav__profile-img">
                    <img src={ProfileImage} alt="profile" />
                </div>
                <div className="nav__profile-info">
                    <p className="nav__profile-name">John Doe</p>
                    <span className="nav__profile-role">Admin</span>
                </div>
                <span className={popupOpen ? 'nav__profile-icon--rotate' : 'nav__profile-icon'}>
                    <ChevronIcon />
                </span>
            </div>
            {popupOpen && isOpen && (
                <div className="nav__profile-popup">
                    <div className="nav__profile">
                        <div className="nav__profile-img">
                            <img src={ProfileImage} alt="profile" />
                        </div>
                        <div className="nav__profile-info">
                            <p className="nav__profile-name">John Doe</p>
                            <span className="nav__profile-role">Admin</span>
                        </div>
                        <span className="nav__profile-icon">
                            <CheckmarkIcon />
                        </span>
                    </div>
                    <button
                        className="nav__profile-popup-btn"
                        onClick={() => user.setIsAuthenticated(false)}
                    >
                        Log out ot John Doe
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Nav;
