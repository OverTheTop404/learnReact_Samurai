import React from "react";
import style from './_users.module.scss'
import userPhotoDefault from '../../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import Pagination from "../../common/pagination/pagination";
import Preloader from "../../common/preloader/preloader";

let Users = props => {

    return <div className={style.usersPage}>

        <Pagination totalPagesCount={props.totalPagesCount}
                    itemsCount={props.itemsCount}
                    onChangePage={props.onChangePage}
                    currentPage={props.currentPage}
                    showedPages={9}/>
        {/*{props.loaderStatus && <Preloader/>}*/}
        {props.persons.map(person => {
            return (<>
                    <div className={style.userItem} key={person.id}>
                        <div className={style.imageSection}>
                            <NavLink to={`/profile/${person.id}`}>
                                <img src={person.photos.small ? person.photos.small : userPhotoDefault}
                                     alt={person.name}/>
                            </NavLink>
                        </div>
                        <div className={style.personNameIntro}>
                            <div><strong>{person.name}</strong></div>
                            <div>{person.id}</div>
                            {person.followed
                                ? <button disabled={props.followedStatus.some(id => id === person.id)} onClick={() => {
                                    props.unFollow(person.id)
                                }}>Unfollow</button>
                                : <button disabled={props.followedStatus.some(id => id === person.id)} onClick={() => {
                                    props.follow(person.id)
                                }}>Follow</button>
                            }
                        </div>
                    </div>
                </>
            )
        })}
    </div>
}

export default Users