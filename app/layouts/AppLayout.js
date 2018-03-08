import React, { Component } from 'react';
import { getCounter } from '../xhr'
import { getCounterUpdate } from '../xhr'

import Comments from '../components/Comments'
import CommentsAdd from '../components/CommentsAdd'

import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaHeart from 'react-icons/lib/fa/heart';

class AppLayout extends Component {

  constructor (props) {
    super(props);
    this.state = {
      counter_likes: 0,
      counter_followers: 0
    }
  }

  componentDidMount() {
    getCounter().then(results => {
      results.data.map(user => (
        this.setState({[user.system]: user.count})
      ))
    })
  }

  handleCountFollowers = (e) => {
    document.getElementById('actFollow').classList.toggle('active');
    if (document.getElementById('actFollow').classList.contains('active')) {
      // ++
    }else{
      // --
    }

    this.setState((prevState) => {
      return {counter_followers: Number(prevState.counter_followers) + 1};
    });

    // SQL method
    // getCounterUpdate('followers', 4).then(results => {
    //   if(results.data.status == 'ok'){
    //     console.log('+++');
    //   }
    // })
  }

  handleCountLikes = (e) => {
    console.log('cli');
    this.setState((prevState) => {
      return {counter_likes: Number(prevState.counter_likes) + 1};
    });
  }

  render () {
    return (
      <div className="widget">
        <div className="widget__part1">

          <div className="header">
            <div className="background"></div>

            <div className="box">
              <div className="userinfo__wrapper">
                <div className="userinfo__photo"><div className="userinfo__photo__img"></div></div>
                <div className="userinfo__name">
                  <div>
                    <span>Bartek Szewczyk</span>
                    <a className="userinfo__like" onClick={this.handleCountLikes}><FaHeartO /><FaHeart /></a>
                  </div>
                  <div>Rybnik, Polska</div>
                </div>
              </div>

              <div className="usercounts__wrapper">
                <div className="usercounts__item count count_likes"><div>{this.state.counter_likes}</div><div>likes</div></div>
                <div className="usercounts__item count count_following"><div>723</div><div>Following</div></div>
                <div className="usercounts__item count count_followers"><div>{this.state.counter_followers}</div><div>Followers</div></div>
                <div className="usercounts__item">
                  <button id="actFollow" onClick={this.handleCountFollowers}>Follow</button>
                </div>
              </div>
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
