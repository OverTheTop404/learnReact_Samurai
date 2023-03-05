import style from './formControl.module.scss'
import {Field} from "redux-form";
import React from "react";

export const Element = Element => ({input, meta: {touched, error, warning}, ...props}) => (<>
    <Element {...input} {...props}/>
    {touched && ((error && <span className={style.error}>{error}</span>) || (warning && <span>{warning}</span>))}
</>)

export const createField = (type, component, validate, name, placeholder, text = '') => {
    return <div>
        <Field type={type} component={component} validate={validate} name={name} placeholder={placeholder}/>
        {text}
    </div>
}