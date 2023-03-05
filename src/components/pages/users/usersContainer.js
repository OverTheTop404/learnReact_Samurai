import {connect} from "react-redux";
import Users from "./usersClass";
import {follow, followedProcess, getUsers, totalPages, unFollow} from "../../../redux/usersReducer";
import React from "react";
import withAuthRedirect from "../../hoc/authRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowedStatus,
    getItemsCount,
    getLoaderStatus,
    getPersonsSelector,
    getTotalPagesCount
} from "../../../redux/selectors/usersSelectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.itemsCount)
    }

    onChangePage = pageNumber => {
        this.props.getUsers(pageNumber, this.props.itemsCount)
    }

    render() {
        return <>
            <Users totalPagesCount={this.props.totalPagesCount}
                   itemsCount={this.props.itemsCount}
                   currentPage={this.props.currentPage}
                   persons={this.props.persons}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   onChangePage={this.onChangePage}
                   followedStatus={this.props.followedStatus}
                   loaderStatus={this.props.loaderStatus}
            />
        </>
    }

}

let mapStateToProps = state => ({
    persons: getPersonsSelector(state),
    currentPage: getCurrentPage(state),
    itemsCount: getItemsCount(state),
    totalPagesCount: getTotalPagesCount(state),
    loaderStatus: getLoaderStatus(state),
    followedStatus: getFollowedStatus(state)
})

export default compose(
    connect(mapStateToProps, {follow, unFollow, totalPages, followedProcess, getUsers}),
    //withAuthRedirect
)(UsersContainer)