import React, { Component } from 'react';

import User from '../components/User'
import Comments from '../components/Comments'
import CommentsAdd from '../components/CommentsAdd'

class AppLayout extends Component {
  render () {
    return (
      <div className="widget">
        <div className="widget__part1">

          <div className="header">
            <div className="background"></div>
            <div className="box">
              <User/>
            </div>
          </div>

          <div className="comments__list">
            <div className="box">
              <Comments/>
            </div>
          </div>

        </div>

        <div className="widget__part2">
          <CommentsAdd/>
        </div>

      </div>
    )
  }
}

export default AppLayout
