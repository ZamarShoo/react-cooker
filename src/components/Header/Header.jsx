import React from "react";
import { Link } from 'react-router-dom'
import s from './header.module.css'

export const Header = () => {

    const [openHeader, setOpenHeader] = React.useState(false)

    return (
        <div className={s.header}>
    <section>
        <header>
            <div className={s.header_left}>
                <div className={s.header_left__logo}>
                    <Link to="/"><h3>Cooker</h3></Link>
                </div>
                <div className={s.header_left__social}>
                    <ul>
                        <li><a href="https://github.com/ZamarShoo" target="_blank" rel="noreferrer"><i className={s.github}></i></a></li>
                        <li><a href="https://hh.ru/resume/40803432ff0804c2960039ed1f47784e726134" target="_blank" rel="noreferrer"><i className={s.hh}></i></a></li>
                        <li><a href="https://vk.com/zamarshoo" target="_blank" rel="noreferrer"><i className={s.vk}></i></a></li>
                        <li><a href="mailto:shg.ivan97@gmail.com" target="_blank" rel="noreferrer"><i className={s.gmail}></i></a></li>
                    </ul>
                </div>
                <div 
                    className={s.burger}
                    onClick={() => setOpenHeader(true)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div 
                className={s.header_right + ' ' + (openHeader ? s.active : '')}
            >
                <i
                    className={s.close}
                    onClick={() => setOpenHeader(false)}
                ></i>
                <nav>
                    <ul>
                        <li><Link onClick={() => setOpenHeader(false)} to="/" >Home</Link></li>
                        <li><Link onClick={() => setOpenHeader(false)} to="/like">Like</Link></li>
                        <li><Link onClick={() => setOpenHeader(false)} to="/create">Create</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    </section>
  </div>
    )
}