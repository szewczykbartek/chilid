import React from 'react'
import { Link } from 'react-router'

let Comment = function(props) {
  return (
    <li className="comment__wrapper" data-id="">
      <div className="comment__photo"><div className="comment__photo__img"></div></div>
      <div className="comment__data">
        <div className="comment__author">{props.name}</div>
        <div className="comment__text">{props.text}</div>
      </div>
      <div className="comment__date">1d</div>
    </li>
  )
}

export default Comment
