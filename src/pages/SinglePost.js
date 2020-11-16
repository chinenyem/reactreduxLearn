import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//import { connect } from 'react-redux'
//import { fetchPost } from '../actions/postActions'

import { fetchPost, postSelector } from "../slices/post"

import { fetchComments, commentsSelector} from "../slices/comments";

import { Post } from '../components/Post'
import { Comment } from '../components/Comment'

const SinglePost = ({ match }) => {
    const dispatch = useDispatch()
    const { post, loading: postLoading, hasErrors: postHasErrors } = useSelector(
        postSelector
    )

    const {
        comments,
        loading: commentsLoading,
        hasErrors: commentsHasErrors,
    } = useSelector(commentsSelector)

    useEffect(() => {
        const {id } = match.params
        dispatch(fetchComments(id))
        dispatch(fetchPost(id))
    }, [dispatch, match])

    const renderPost = () => {
        if (postLoading) return <p>Loading post...</p>
        if (postHasErrors) return <p>Unable to display the post.</p>
        return  <Post post={post}  />
    }

    const renderComments = () => {
        if (commentsLoading)  return <p>Loading comment...</p>
        if (commentsHasErrors) return <p>Unable to display the comments</p>

        return comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
        ))
    }

    return (
        <section>
            <h1>Post</h1>
            {renderPost()}
            <h2>Comments</h2>
            {renderComments()}
        </section>
    )
}

// const mapStateToProps = state => ({
//     post: state.post.post,
//     comments: state.comments.comments,
//     loading: {post: state.post.loading},
//     hasErrors: {post: state.post.hasErrors},
// })

export default SinglePost
