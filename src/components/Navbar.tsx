import React, { FC } from 'react';


import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../store/actions/menuAction';
import { RootState } from '../store';

import BurgerMenu from '../components/BurgerMenu';


interface NavItem {
    title: string
    items: string[]

}

const Navbar: FC<NavItem> = ({ items, title }) => {

    let navbarItems: string[] = ["Home", "Contact Us", "About Us"]
    const dispatch = useDispatch();
    const showMenu = useSelector((state: RootState) => state.menu.show);


    const burgerMenuHandler = () => {
        if (!showMenu) {
            return dispatch(setMenu(true))
        }
        if (showMenu) {
            return dispatch(setMenu(false))
        }
    }

    return (
        <nav className="navbar is-info" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <h2>{title}</h2>
                </a>
                <button className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={burgerMenuHandler} data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div className="navbar-menu">
                <div className="navbar-end">
                    {items.map(item => <a href="App.tsx" className="navbar-item">{item}</a>)}
                </div>
            </div>
            {showMenu && <BurgerMenu items={navbarItems} onClose={() => dispatch(setMenu(false))} />}
        </nav >
    )
}

export default Navbar;