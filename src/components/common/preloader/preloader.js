import preloader from "../../../assets/images/prealoader.gif";
import style from './_loader.module.scss'
import React from "react";

let Preloader = () => {
    return <div className={style.loader}>
        <img src={preloader} alt="preloader"/>
    </div>
}

export default Preloader