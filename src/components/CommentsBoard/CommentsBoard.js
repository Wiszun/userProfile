import React, { useState } from 'react';
import CommentList from './CommentList/CommentList'
import AddComment from './AddComment/AddComment'
import './CommentsBoard.scss'
import { UserConsumer } from '../../Context'
import AnimateHeight from 'react-animate-height';

const CommentsBoard = ({comments}) => {
  const [height, setHeight] = useState(500);
  const [commentText, setCommentText] = useState('Hide comments');

  const toggleHeight = () => {
    let heightToSet = height === 500 ? 0 : 500;
    setHeight(heightToSet);
    const commentTextToSet = commentText === 'Hide comments' ? 'Show comments' : 'Hide comments';
    setCommentText(commentTextToSet);
  }

    return(
      <UserConsumer>
        {({userData}) => {
          return (

            <div className="commentsBoard boxShadow">
              <p className="hideComments" onClick={toggleHeight}>{ commentText } ({userData.comments.length})</p>
              <AnimateHeight
                duration={ 500 }
                height={ height }>
                <CommentList />
              </AnimateHeight>
              <AddComment />
            </div>
          )
        }}
      </UserConsumer>
    )

};

export default CommentsBoard;
