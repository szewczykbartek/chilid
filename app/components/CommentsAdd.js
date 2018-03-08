import React, { Component } from 'react';
import { getCommentsAdd } from '../xhr'

class CommentsAdd extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    getCommentsAdd(this.state.text).then(results => {
      if(results.data.status == 'ok'){
        let commentContainer = document.getElementById('comments__list');
        let commentNew = document.createElement('li');
        commentNew.classList.add('comment__wrapper', 'new');
        commentNew.innerHTML = '<div class="comment__photo"><div class="comment__photo__img"></div></div><div class="comment__data"><div class="comment__author">Bartek Szewczyk</div><div class="comment__text">' + this.state.text + '</div></div><div class="comment__date">1d</div>';
        commentContainer.appendChild(commentNew);

        document.getElementsByClassName('comments__add__input')[0].value = '';

        document.getElementById("comments__list").scrollTo(0, 99999);
      }
    })

    e.preventDefault();
    event.preventDefault();
  }

  render () {
    return (
      <div className="comments__add">
        <div className="box">
          <form onSubmit={this.handleSubmit}>
            <input className="comments__add__input" type="text" name="text" placeholder="Add a comment" onChange={this.handleInput} />
          </form>
        </div>
      </div>
    )
  }

}

export default CommentsAdd
