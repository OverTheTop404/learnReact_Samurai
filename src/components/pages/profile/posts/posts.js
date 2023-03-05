import style from './_posts.module.scss'
import SinglePost from "./post/singlepost";

const Posts = props => {

    // let post = props.profilePosts.map( post => <SinglePost message={post.message} likeCount={post.likeCount} key={post.id} />)
    //
    // const onAddPost = () => props.addPost()
    // const onPostChange = (e) => props.postChange(e.target.value)
    //
    // return(
    //     <div>
    //         <div className={style.enterPost}>
    //             <div>Write the post</div>
    //             <textarea onChange={onPostChange} cols="100" rows="5" value={props.newPostText} />
    //             <button onClick={onAddPost}>Add post</button>
    //         </div>
    //         {post}
    //     </div>
    // )
}

export default Posts