import React, { useContext } from 'react';
import MenuContext from '../../context/MenuContext';
import { Link } from 'react-router-dom';
import { ReactComponent as HamburgerIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

import './header.scss';

const Header = () => {
    const { setIsOpen, isOpen } = useContext(MenuContext);
    return (
        <header className="header">
            <div className="header__left">
                <span className="header__left-icon" tabIndex="0" onClick={() => setIsOpen(!isOpen)}>
                    <HamburgerIcon />
                </span>
                <Link to="/">
                    <h3 className="header__heading">Buses.</h3>
                </Link>
            </div>

            <div className="header__form-group">
                <input className="header__form-input" type="text" placeholder="Search" />
                <button className="header__form-button">
                    <span className="header__form-icon">
                        <SearchIcon />
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Header;
