import React, { FC } from 'react';

interface MenuProps {
    items: string[]
    onClose: () => void
}

const BurgerMenu: FC<MenuProps> = ({ items, onClose }) => {

    const styles = {
        textColor: {
            color: 'white'
        }
    }

    return (
        <div onClick={onClose} >
            <aside className="menu" >
                <ul className="menu-list">
                    {items.map(item => <a href="App.tsx" style={styles.textColor}>{item}</a>)}
                </ul>
            </aside>
        </div>

    )
}

export default BurgerMenu;