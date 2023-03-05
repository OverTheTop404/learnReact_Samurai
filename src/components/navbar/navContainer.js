import {connect} from "react-redux";
import Nav from "./nav";

let mapStateToProps = state => ({
    friends: state.friends
})

const NavContainer = connect(mapStateToProps)(Nav)

export default NavContainer