import React from 'react';
import UserBoard from '../../components/UserBoard/UserBoard';
import CommentsBoard from '../../components/CommentsBoard/CommentsBoard';
import './User.scss';
import Modal from '../../utility/Modal/Modal'


const User = () => {
      return (
        <div className="user boxShadow">
        <Modal/>
          <UserBoard />
          <CommentsBoard/>
        </div>
      );
};

export default User;
