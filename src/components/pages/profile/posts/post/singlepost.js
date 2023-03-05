import style from './_singlepost.module.scss'

const SinglePost = props => {
    return(
        <div className={style.posts}>
            <div>{props.message}. Likes:{props.likeCount}</div>
        </div>
    )
}

export default SinglePost