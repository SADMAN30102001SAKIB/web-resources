import React from 'react'
import style from "./Header.module.css"

const Header = ({ cards }) => (
    <header className={style.header}>
        <div className={style.favourite}>
            Favourites: {(cards.filter((item) => item.isFriend)).length}
        </div>
    </header>
)

export default Header