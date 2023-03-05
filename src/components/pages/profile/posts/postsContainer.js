import {addPost} from "../../../../redux/profileReducer";
import {connect} from "react-redux";
import SinglePost from "./post/singlepost";
import style from "./_posts.module.scss";
import {Field, reduxForm, reset} from "redux-form";
import {Element} from "../../../common/formControl/formControl";
import {maxLength, required} from "../../../utils/validation";
import React from "react";
import {compose} from "redux";

const maxLength30 = maxLength(30)
const Textarea = Element('textarea')

const PostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'post'} type='text' cols="100" rows="5" component={Textarea} fieldType={'textarea'}
                   validate={[required, maxLength30]} placeholder='Write the post'/>
            <button>Add post</button>
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'posts'})(PostForm)

const Posts = ({addPost, reset, profilePosts}) => {

    let post = [...profilePosts].reverse().map(post => {
        return <SinglePost message={post.message} likeCount={post.likeCount} key={post.id}/>
    })

    const addPostSubmit = dataForm => {
        addPost(dataForm.post)
        reset('posts')
    }

    return (
        <div>
            <div className={style.enterPost}>
                <PostReduxForm onSubmit={addPostSubmit}/>
            </div>
            {post}
        </div>
    )
}

let mapStateToProps = state => ({
    profilePosts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})

export default compose(
    connect(mapStateToProps, {addPost, reset}),
    React.memo
)(Posts)