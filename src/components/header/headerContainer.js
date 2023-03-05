import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {getUserAuthData} from "../../redux/authReducer";


class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userData: state.auth.userData
})

export default connect(mapStateToProps, {getUserAuthData})(HeaderContainer)

