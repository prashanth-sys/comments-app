// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, isTriggred, onDelete} = props
  const {name, comment, id, isLiked} = commentDetails

  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const onClickFavoriteItem = () => {
    isTriggred(id)
  }

  const onDeleteOff = () => {
    onDelete(id)
  }

  return (
    <li>
      <div>
        <h1 className="name-heading">{name}</h1>
        <p className="description-comment">{comment}</p>
        <div className="image-container">
          <button type="button" onClick={onClickFavoriteItem}>
            <img src={likeImage} alt="like" />
          </button>
          <button type="button" onClick={onDeleteOff} data-testid="delete">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default CommentItem
