import './index.css'

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {name: '', comment: '', commentList: []}

  onName = event => {
    this.setState({name: event.target.value})
  }

  onComment = event => {
    this.setState({comment: event.target.value})
  }

  onCommentAdd = event => {
    event.preventDefault()
    const {name, comment} = this.state
    if (name === '') {
      alert('Please Enter Yourname')
    } else if (comment === '') {
      alert('Please Enter Your Comment')
    } else {
      const bgColorInitial =
        initialContainerBackgroundClassNames[
          Math.ceil(
            Math.random() * initialContainerBackgroundClassNames.length - 1,
          )
        ]
      const commentDetail = {
        id: uuidv4(),
        name,
        comment,
        like: false,
        bgColorInitial,
        time: new Date(),
      }
      this.setState(prevState => ({
        commentList: [...prevState.commentList, commentDetail],
        name: '',
        comment: '',
      }))
    }
  }

  onLikeComment = commentId => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === commentId) {
          return {...eachComment, like: !eachComment.like}
        }
        return eachComment
      }),
    }))
  }

  onDeleteComment = commentId => {
    const {commentList} = this.state
    const filterDate = commentList.filter(
      eachComment => eachComment.id !== commentId,
    )
    this.setState({commentList: filterDate})
  }

  render() {
    const {name, comment, commentList} = this.state

    return (
      <div className="comment-main-container">
        <h1 className="comment-heading">Comments</h1>
        <div className="logo-and-form-card">
          <img
            className="logo"
            alt="comments"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          />
          <form onSubmit={this.onCommentAdd} className="form-container">
            <p className="para-say">Say something about 4.0 Technologies</p>
            <input
              value={name}
              onChange={this.onName}
              type="text"
              placeholder="Your Name"
              className="input-name"
            />
            <textarea
              value={comment}
              onChange={this.onComment}
              className="text-comment"
              rows="50"
              cols="50"
              placeholder="Your Comment"
            />
            <button className="add-btn" type="submit">
              Add Comment
            </button>
          </form>
        </div>
        <hr className="hr-line-seperate" />
        <div className="count-card">
          <p className="count-number">{commentList.length}</p>
          <p className="para-comment">Comments</p>
        </div>
        <ul className="comment-container">
          {commentList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetail={eachComment}
              likeAction={this.onLikeComment}
              deleteAction={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
