import {Component} from 'react'

import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

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
  state = {commentList: [], name: '', comment: '', count: 0}

  onChange = event => {
    this.setState({name: event.target.value})
  }

  onComment = event => {
    this.setState({comment: event.target.value})
  }

  isTriggred = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachContact => {
        if (id === eachContact.id) {
          //   eachContact.isFavorite = !eachContact.isFavorite
          return {...eachContact, isLiked: !eachContact.isLiked}
        }
        return eachContact
      }),
    }))
  }

  onDelete = id => {
    const {commentList, count} = this.state
    const filteredComment = commentList.filter(each => each.id !== id)
    this.setState({commentList: filteredComment, count: count - 1})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment, count} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: v4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
    this.setState({count: count + 1})
  }

  render() {
    const {name, comment, commentList, count} = this.state
    return (
      <div className="bg-container">
        <div className="comment-container">
          <div className="card-container">
            <h1 className="main-heading">Comments</h1>
            <p className="description">Say something about 4.0 Technologies</p>
            <form className="input-container" onSubmit={this.onAddComment}>
              <input
                type="search"
                className="input"
                placeholder="Your Name"
                onChange={this.onChange}
                value={name}
              />
              <textarea
                type="search"
                placeholder="Your Comment"
                onChange={this.onComment}
                value={comment}
              />

              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <div className="comment-container">
          <div>
            <p>{count} Comments</p>
            <div>
              <ul className="list-container">
                {commentList.map(eachComment => (
                  <CommentItem
                    key={eachComment.id}
                    commentDetails={eachComment}
                    isTriggred={this.isTriggred}
                    onDelete={this.onDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Comments
