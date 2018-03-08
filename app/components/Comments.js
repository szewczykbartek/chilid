import React, { Component } from 'react';
import Comment from './Comment'
import { getComments } from '../xhr'



class Comments extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        comments: []
      }
    }


  componentDidMount() {
    getComments().then(results => {
      this.setState({
        comments: results.data
      })
    })
  }

  render () {
    return (
      <div>
        <div className="comment__hidecomments">Hide comments (353)</div>
        <ul id="comments__list">
        {this.state.comments.length > 0 && this.state.comments.map(comment => {
          return <Comment key={comment.id} name={comment.name} text={comment.text} date={comment.date} />
        })}
        </ul>
      </div>
    )
  }

}

export default Comments
