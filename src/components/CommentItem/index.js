import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetail, likeAction, deleteAction} = props

  const {id, name, comment, like, bgColorInitial, time} = commentDetail

  const initial = name[0].toUpperCase()
  const timeConvertString = formatDistanceToNow(time)

  const likeClassStyle = like ? 'active' : 'no-active'

  const likeUrl = like
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onLike = () => {
    likeAction(id)
  }

  const onDelete = () => {
    deleteAction(id)
  }

  return (
    <li className="comment-card">
      <div className="upper-content-card">
        <p className={`initial-style ${bgColorInitial}`}>{initial}</p>
        <div className="name-and-comment-card">
          <div className="name-and-time-card">
            <p className="name-style">{name}</p>
            <p className="time-style">{timeConvertString}</p>
          </div>
          <p className="comment-content-style"> {comment}</p>
        </div>
      </div>
      <div className="like-and-delete-btn-card">
        <button onClick={onLike} className={likeClassStyle} type="button">
          <img alt="like" className="like-logo" src={likeUrl} />
          Like
        </button>
        <button
          data-testid="delete"
          onClick={onDelete}
          className="delete-btn"
          type="button"
        >
          <img
            className="like-logo"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
