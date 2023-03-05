import ProfileInfo from "./profileInfo/profileInfo";
import PostsContainer from "./posts/postsContainer";

const Profile = props => {
    return (
        <div>
            <ProfileInfo {...props} />
            <PostsContainer />
        </div>
    )
}

export default Profile