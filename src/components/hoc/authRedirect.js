import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";


let mapStateAuthToProps = state => ({
    isAuth: state.auth.isAuth
})

const withAuthRedirect = Component => {

    const RedirectComponent = props => {
        if (!props.isAuth) return <Navigate to="/login"/>
        return <Component {...props} />
    }

    return connect(mapStateAuthToProps)(RedirectComponent)
}

export default withAuthRedirect