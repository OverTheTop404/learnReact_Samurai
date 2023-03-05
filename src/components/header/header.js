import style from './_header.module.scss'
import {NavLink} from "react-router-dom";
import HeaderUserInfo from "./userInfo/headerUserInfo";

const Header = props => {
    return (
        <div className={style.header}>
            <img src="https://webqoo.ru/assets/components/webpgenerator/cache/assets/img/logo/webqoo14.webp"
                 alt="logo"/>
            <div className={style.authSection}>
                {props.isAuth
                    ? <HeaderUserInfo userName={props.login} userData={props.userData}/>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </div>
    )
}

export default Header