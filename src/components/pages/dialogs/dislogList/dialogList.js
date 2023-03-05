import style from './_dialogsList.module.scss'
import {NavLink} from "react-router-dom";


const DialogsList = ({dialogInfo}) => {
    return <li className={style.person}>
        <NavLink className={({isActive}) => isActive ? style.active : ''} to={`/dialogs/${dialogInfo.id}`}>
            <span className={style.avatar}><img src={dialogInfo.avatar} alt={dialogInfo.name}/></span>
            <span>{dialogInfo.name}</span>
            <span className={style.dot}>.</span>
        </NavLink>
    </li>
}

export default DialogsList