import style from './_headerUserInfo.module.scss'
import Preloader from "../../common/preloader/preloader";
import {NavLink} from "react-router-dom";

const HeaderUserInfo = props => {
    if (!props.userData) {
        return <Preloader/>
    }
    return (
        <div className={style.userInfo}>
            <NavLink to={'/login'}>
                <img src={props.userData.photos.small ? props.userData.photos.small : 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png'} alt=""/>
                <span>{props.userData.fullName}</span>
            </NavLink>
        </div>
    )
}

export default HeaderUserInfo