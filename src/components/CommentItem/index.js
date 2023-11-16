// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {name, comment} = commentDetails

  return (
    <li>
      <div>
        <h1>{name}</h1>
        <p>{comment}</p>
      </div>
    </li>
  )
}
export default CommentItem
