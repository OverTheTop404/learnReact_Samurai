import style from './_profileInfo.module.scss'
import Preloader from "../../../common/preloader/preloader";
import UserStatus from "./userStatus"

const ProfileInfo = ({userInfo, status, updateUserStatus}) => {
    if (!userInfo) return <Preloader/>
    return (
        <div>
            <div className={style.aboutUser}>
                <div className={style.avatar}>
                    <img
                        src={userInfo.photos.large
                            ? userInfo.photos.large
                            : 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png'}
                        alt="avatar"/>
                </div>
                <div className={style.info}>
                    <h4 className={style.personName}>{userInfo.fullName}</h4>
                    <UserStatus statusText={status} updateStatus={updateUserStatus} />
                    <span>{userInfo.aboutMe == null ? '' : userInfo.aboutMe}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo