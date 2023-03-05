import {addMessage} from "../../../redux/dialogReducer";
import Dialogs from "./dialogs";
import {compose} from "redux";
import {connect} from "react-redux";
import {reset} from "redux-form";
import withAuthRedirect from "../../hoc/authRedirect";

let mapStateToProps = state => ({
    dialogsPage: state.dialogsPage,
    friends: state.friends
})

export default compose(
    connect(mapStateToProps, {addMessage, reset}),
    withAuthRedirect
)(Dialogs)