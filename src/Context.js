import React, { Component } from 'react';
import userData from './mock.json';

const UserContext = React.createContext();

const reducer = (state, action) => {
  let modifiedSocialArray = null;
  let indexOfUnlike = null;
  switch(action.type){
    case 'LIKE':
    state.loggedUser.likes.push(action.payload);
      return {
        ...state,
        loggedUser: {
          ...state.loggedUser,
          likes: state.loggedUser.likes,
        },
        userData: {
          ...state.userData,
          likes: state.userData.likes + 1,
        }
      };
    case 'UNLIKE':
      modifiedSocialArray = state.loggedUser.likes;
      indexOfUnlike = modifiedSocialArray.indexOf(action.payload);
      modifiedSocialArray.splice(indexOfUnlike, 1);
      return {
        ...state,
        loggedUser: {
          ...state.loggedUser,
          likes: modifiedSocialArray,
        },
        userData: {
          ...state.userData,
          likes: state.userData.likes - 1,
        }
      };
    case 'FOLLOW':
    state.loggedUser.followers.push(action.payload);
      return {
        ...state,
        loggedUser: {
          ...state.loggedUser,
          followers: state.loggedUser.followers,
        },
        userData: {
          ...state.userData,
          followers: state.userData.followers + 1,
        }
      };
    case 'UNFOLLOW':
      modifiedSocialArray = state.loggedUser.followers;
      indexOfUnlike = modifiedSocialArray.indexOf(action.payload);
      modifiedSocialArray.splice(indexOfUnlike, 1);
      return {
        ...state,
        loggedUser: {
          ...state.loggedUser,
          followers: modifiedSocialArray,
        },
        userData: {
          ...state.userData,
          followers: state.userData.followers - 1,
        }
      };
    case 'ADD_COMMENT':
      state.userData.comments.push(action.comment);
      console.log(state.userData.comments);
      return {
        ...state
      }
    case 'MODAL_SHOW':
      return {
        ...state,
        showModal: true,
        modalMessage: action.message,
      }
    case 'MODAL_HIDE':
      return {
        ...state,
        showModal: false,
      }
    case 'HIDE_MESSAGE':
      return {
        ...state,
        modalMessage: ''
      }
    default:
      return {
        ...state
      }
  }
}

export class UserProvider extends Component {
  state = {
    loggedUser : {
      name: "John Snow",
      userID: 111,
      followers: [2,3,4,5],
      likes: [45,46,47,48]
    },
    userData: {
      ...userData,
    },
    dispatch: action => this.setState(state => reducer(state, action)),
    modalMessage: '',
    showModal: false,
  }

    render () {
      console.log(this.state);
      const { children } = this.props;
      return (
          <UserContext.Provider value={{
            loggedUsername: this.state.loggedUser.name,
            userID: this.state.loggedUser.userID,
            loggedUserFollowers: this.state.loggedUser.followers,
            loggedUserLikes: this.state.loggedUser.likes,
            userData: this.state.userData,
            dispatch: this.state.dispatch,
            modalMessage: this.state.modalMessage,
            showModal: this.state.showModal
          }}>
            {children}
          </UserContext.Provider>
      );
    }

};

export const UserConsumer = UserContext.Consumer;
