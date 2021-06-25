import s from "./Container.module.css"
import {NavLink} from "react-router-dom";


const Container = () => {
    return <>
        <ul className={s.headerContainer}>
            <li><NavLink to={'/home'} className={s.item} activeClassName={s.active}>Home</NavLink></li>
            <li><NavLink to={'/movie'} className={s.item} activeClassName={s.active}>Movie</NavLink></li>
        </ul>
    </>
}

export default Container