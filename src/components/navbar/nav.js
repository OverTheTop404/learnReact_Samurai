import style from './_nav.module.scss'
import {NavLink} from "react-router-dom";

const Nav = props => {
    const friends = props.friends
    const friendArr = friends.slice(1, 4)
    const friendsList = friendArr.map(friend => {
        return (
            <div className={style.friendsItem} key={friend.id}>
                <div className={style.friendAvatar}><img src={friend.avatar} alt={friend.name}/></div>
                <div className={style.friendName}>{friend.name}</div>
            </div>
        )
    })
    return (
        <nav className={style.sidebar}>
            <ul>
                <li><NavLink to="/profile" className={({isActive}) => isActive && style.active}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" className={({isActive}) => isActive && style.active}>Messages</NavLink></li>
                <li><NavLink to="/users" className={({isActive}) => isActive && style.active}>Users</NavLink></li>
                <li><NavLink to="/news" className={({isActive}) => isActive && style.active}>News</NavLink></li>
                <li><NavLink to="/music" className={({isActive}) => isActive && style.active}>Music</NavLink></li>
                <li><NavLink to="/settings" className={({isActive}) => isActive && style.active}>Settings</NavLink>
                </li>
            </ul>
            <div className={style.friendsSection}>
                <h4>Friends</h4>
                <div className={style.friendsList}>{friendsList}</div>
            </div>
        </nav>
    )
}

export default Nav