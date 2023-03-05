import './App.css';
import {Routes, Route} from "react-router-dom";
import News from "./components/pages/news/news";
import Music from "./components/pages/music/music";
import Settings from "./components/pages/settings/settings";
import NavContainer from "./components/navbar/navContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/login/login";
import React, {Component, Suspense} from "react";
import {connect} from "react-redux";
import {setInitialize} from "./redux/appReducer";
import Preloader from "./components/common/preloader/preloader";
import withSuspense from "./components/hoc/componentSuspense";

// import ProfileContainer from './components/pages/profile/profileContainer'
// import DialogsContainer from './components/pages/dialogs/dialogsContainer'
// import UsersContainer from './components/pages/users/usersContainer'

const ProfileContainer = React.lazy(() => import('./components/pages/profile/profileContainer'));
const DialogsContainer = React.lazy(() => import('./components/pages/dialogs/dialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/pages/users/usersContainer'));

class App extends Component {

    componentDidMount() {
        this.props.setInitialize()
    }

    render() {
        if (!this.props.initSuccess) return <Preloader/>
        return (
            <div className="app">
                <HeaderContainer/>
                <NavContainer/>
                <div className='pages_wrapper'>
                    <Routes>
                        <Route path='/profile/:id?' element={withSuspense(ProfileContainer)}/>
                        <Route path='/dialogs/:id?' element={withSuspense(DialogsContainer)}/>
                        <Route path='/users' element={withSuspense(UsersContainer)}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = state => ({
    initSuccess: state.app.initialized
})

export default connect(mapDispatchToProps, {setInitialize})(App);
