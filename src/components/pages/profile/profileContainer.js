import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {setUserStatus, updateUserStatus, userPageInfo} from "../../../redux/profileReducer";
import {useParams, Navigate} from 'react-router-dom'
import withAuthRedirect from "../../hoc/authRedirect";
import {compose} from "redux";

export function withRouter(Children){
    return props => {
        const match  = {params: useParams()};
        return <Children {...props}  match={match}/>
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.id
        if( !userId ) userId = this.props.userId
        this.props.userPageInfo(userId)
        this.props.setUserStatus(userId)
    }

    render() {
        if (!this.props.isAuth && !this.props.match.params.id ) return <Navigate to={'/login'} />
        return <Profile {...this.props} />
    }
}

let mapStateToProps = state => ({
    userInfo: state.profilePage.userInfo,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {userPageInfo, setUserStatus, updateUserStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)