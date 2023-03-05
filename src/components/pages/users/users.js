import style from './_users.module.scss'
import userPhotoDefault from '../../../assets/images/user.png'
import axios from "axios";

const Users = props => {

    let getUsers = () => {
        if (props.persons.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.loadUsers(response.data.items)
            })
        }
    }

    return (
        <div className={style.usersPage}>
            <button onClick={getUsers}>getUsres</button>
            {props.persons.map(person => {
                return (
                    <div className={style.userItem} key={person.id}>
                        <div className={style.imageSection}>
                            <img src={person.photos.small ? person.photos.small : userPhotoDefault} alt={person.name}/>
                        </div>
                        <div className={style.personNameIntro}>
                            <div><strong>{person.name}</strong></div>
                            {/*<div>{person.uniqueUrlName}</div>*/}
                            {person.followed
                                ? <button onClick={() => {
                                    props.unFollowed(person.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.followed(person.id)
                                }}>Follow</button>
                            }
                        </div>
                        <div className={style.personAddress}>
                            {/*<div>{person.location.country}</div>*/}
                            {/*<div>{person.location.city}</div>*/}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users