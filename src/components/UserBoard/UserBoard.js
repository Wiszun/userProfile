import React, { Component } from 'react';
import './UserBoard.scss'
import { UserConsumer } from '../../Context'
import Share from '../../utility/share.jpg'

class UserBoard extends Component {
  state = {
     followButtonText: "FOLLOW",
     isLiked: false,
     isFollowed: false,
     activeheart: false
  }

    render () {

      const triggerShare = (dispatch) => {
        const location = window.location.href;
        dispatch({
          type: 'MODAL_SHOW',
          message: location
        })
      }

      const handleLike = (dispatch, id) => {
        if(!this.state.isLiked) {
          dispatch({
            type: 'LIKE',
            payload: id
          })
          this.setState({
            isLiked: true,
            activeHeart: 'activeHeart',
          });
        } else {
          dispatch({
            type: 'UNLIKE',
            payload: id
          });
          this.setState({
            isLiked: false,
            activeHeart: 'inactiveHeart',
          });
        }
      }

      const handleFollow = (dispatch, id) => {
        if(!this.state.isFollowed) {
          dispatch({
            type: 'FOLLOW',
            payload: id
          });
          this.setState((prevState) => {
            return {
              isFollowed: !prevState.isFollowed,
              followButtonText: 'UNFOLLOW'
             }
          });
        } else {
          dispatch({
            type: 'UNFOLLOW',
            payload: id
          });
          this.setState((prevState) => {
            return {
              isFollowed: !prevState.isFollowed,
              followButtonText: 'FOLLOW'
             }
          });
        }

      }


      return (
        <UserConsumer>
        {({userData, dispatch, loggedUserFollowers, loggedUserLikes}) => {
          const { userID, name, lastName, country, likes, following, followers } = userData;
          return(
            <div className="userBoard boxShadow">
              <div className="basicUserInfo">
                <div className="userImg">
                  <img src={userData.profileImage} alt=""/>
                </div>
                <div className="shareImg" onClick={() => triggerShare(dispatch)}>
                  <img src={ Share } alt=""/>
                </div>
                <div className="userPersonalData">
                  <h1 className="name">{ name } { lastName }</h1>
                  <div className="like" onClick={() => handleLike(dispatch, userID)}>
                    <svg className={this.state.activeHeart} viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg"><g id="Group" fillRule="evenodd" transform="translate(467 392)"><path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" /><circle id="main-circ" opacity="0" cx="29.5" cy="29.5" r="1.5"/><g id="grp7" opacity="0" transform="translate(7 6)"><circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2"/><circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2"/></g><g id="grp6" opacity="0" transform="translate(0 28)"><circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2"/><circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2"/></g><g id="grp3" opacity="0" transform="translate(52 28)"><circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2"/><circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2"/></g><g id="grp2" opacity="0" transform="translate(44 6)" fill="#CC8EF5"><circle id="oval2" transform="matrix(-1 0 0 1 10 0)" cx="5" cy="6" r="2"/><circle id="oval1" transform="matrix(-1 0 0 1 4 0)" cx="2" cy="2" r="2"/></g><g id="grp5" opacity="0" transform="translate(14 50)" fill="#91D2FA"><circle id="oval1" transform="matrix(-1 0 0 1 12 0)" cx="6" cy="5" r="2"/><circle id="oval2" transform="matrix(-1 0 0 1 4 0)" cx="2" cy="2" r="2"/></g><g id="grp4" opacity="0" transform="translate(35 50)" fill="#F48EA7"><circle id="oval1"  transform="matrix(-1 0 0 1 12 0)" cx="6" cy="5" r="2"/><circle id="oval2" transform="matrix(-1 0 0 1 4 0)" cx="2" cy="2" r="2"/></g><g id="grp1" opacity="0" transform="translate(24)" fill="#9FC7FA"><circle id="oval1" cx="2.5" cy="3" r="2"/><circle id="oval2" cx="7.5" cy="2" r="2"/></g></g></svg>
                  </div>
                  <br/>
                  <p className="location">{ country }</p>
                </div>
              </div>
              <div className="userRelations">
                <div className="relation">
                  <p className="number numberOfLikes">{ likes }</p>
                  <p className="typeOfRelation">Likes</p>
                </div>
                <div className="relation">
                  <p className="number">{ following }</p>
                  <p className="typeOfRelation">Following</p>
                </div>
                <div className="relation">
                  <p className="number">{ followers }</p>
                  <p className="typeOfRelation">Followers</p>
                </div>
                <p className="followButton"  onClick={() => handleFollow(dispatch, userID, 'FOLLOW')}>{ this.state.followButtonText }</p>
              </div>
            </div>
          )
        }}
        </UserConsumer>
      );
    }

};

export default UserBoard;
