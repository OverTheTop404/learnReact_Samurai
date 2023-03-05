import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {authLogin, authLogout} from "../../redux/authReducer";
import Preloader from "../common/preloader/preloader";
import React from "react";
import {createField, Element} from "../common/formControl/formControl";
import {email, minLength, required} from "../utils/validation";
import style from './../common/formControl/formControl.module.scss'

const minLength2 = minLength(2)
const Input = Element('input')

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField('text', Input, [required, email],'email', 'Email')}
            {createField('password', Input, [required, minLength2],'password', 'Password')}
            {createField('checkbox', Input, [],'rememberMe', 'Email', 'remember me')}
            {props.error && <div className={style.summaryError}>{props.error}</div>}
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = props => {

    const onSubmitFormLogin = formData => {
        props.authLogin(formData)
    }
    const logout = () => props.authLogout()

    if (props.loaderStatus) {
        return <Preloader/>
    }

    return <>
        <h1>Login</h1>
        {props.isAuth
            ? <div>You are already login. Nice to watch :)<br/><button onClick={ logout }>Logout</button></div>
            : <LoginReduxForm onSubmit={onSubmitFormLogin}/>
        }
    </>
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    loaderStatus: state.auth.isFetched
})

export default connect(mapStateToProps, {authLogin, authLogout})(Login)