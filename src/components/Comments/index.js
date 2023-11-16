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
  state = {commentList: '', name: '', comment: ''}

  onChange = event => {
    this.setState({name: event.target.value})
  }

  onComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

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
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {name, comment, commentList} = this.state
    return (
      <div className="bg-container">
        <div className="comment-container">
          <div className="card-container">
            <h1 className="main-heading">Comments</h1>
            <p className="description">Say something about 4.0 Technologies</p>
            <from onSubmit={this.onAddComment}>
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

              <button className="button" type="button">
                Add Comment
              </button>
            </from>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <div className="comment-container">
          <div>
            <p>0 Comments</p>
            <div>
              <ul>
                {commentList.map(eachComment => (
                  <CommentItem
                    key={eachComment.id}
                    commentDetails={eachComment}
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
