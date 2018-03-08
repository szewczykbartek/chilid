import React, { Component } from 'react';
//import { getComments } from '../xhr'

class User extends React.Component {
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
      <div>
        <div className="userinfo__wrapper">
          <div className="userinfo__photo"><div className="userinfo__photo__img"></div></div>
          <div className="userinfo__name">
            <div>
              <span>Bartek Szewczyk</span>
              <a className="userinfo__like" onClick={this.handleCountLikes}>
                <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                  <path d="m37.1 13.3q0-1.8-0.4-3.2t-1.3-2.2-1.8-1.3-2.1-0.7-2.2-0.2-2.5 0.6-2.4 1.4-2 1.6-1.3 1.4q-0.4 0.5-1.1 0.5t-1.1-0.5q-0.5-0.6-1.3-1.4t-2-1.6-2.4-1.4-2.5-0.6-2.2 0.2-2.1 0.7-1.8 1.3-1.3 2.2-0.4 3.2q0 3.8 4.1 7.9l13 12.5 12.9-12.4q4.2-4.2 4.2-8z m2.9 0q0 4.9-5.1 10l-13.9 13.4q-0.4 0.4-1 0.4t-1-0.4l-13.9-13.4q-0.2-0.2-0.6-0.6t-1.3-1.4-1.5-2.2-1.2-2.7-0.5-3.1q0-4.9 2.8-7.7t7.9-2.7q1.4 0 2.8 0.4t2.7 1.3 2.1 1.6 1.7 1.5q0.8-0.8 1.7-1.5t2.1-1.6 2.7-1.3 2.8-0.4q5 0 7.9 2.7t2.8 7.7z"/>
                </svg>
                <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                  <path d="m20 37.1q-0.6 0-1-0.4l-13.9-13.4q-0.2-0.2-0.6-0.6t-1.3-1.4-1.5-2.2-1.2-2.7-0.5-3.1q0-4.9 2.8-7.7t7.9-2.7q1.4 0 2.8 0.4t2.7 1.3 2.1 1.6 1.7 1.5q0.8-0.8 1.7-1.5t2.1-1.6 2.7-1.3 2.8-0.4q5 0 7.9 2.7t2.8 7.7q0 4.9-5.1 10l-13.9 13.4q-0.4 0.4-1 0.4z"/>
                </svg>
              </a>
            </div>
            <div>Rybnik, Polska.</div>
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
    )
  }

}

export default User
