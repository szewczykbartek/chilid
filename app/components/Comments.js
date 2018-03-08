import React, { Component } from 'react';
import Comment from './Comment'
import { getComments } from '../xhr'



class Comments extends React.Component {
    constructor (props) {
      //super(props);
      super();
      this.state = {
        comments: []
        //comments: {id: "0", name: "", text: ""}
      }
    }


  componentDidMount() {
    console.log( this.state.comments.length );
    getComments().then(results => {
      console.log(results.data);
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
