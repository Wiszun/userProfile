import React, { useState } from 'react';
import './AddComment.scss'
import { UserConsumer } from '../../../Context'
import moment from 'moment';

const AddComment = (props) => {
  const [comment, setComment] = useState("");
  function handleOnChange(e, loggedUsername) {
    setComment(e.target.value);
  }

  function handleEnterKey(e, loggedUsername, userID, dispatch) {
    if(e.key === 'Enter') {
      let newComment = {
       author: loggedUsername,
       date: moment().format('DD.MM.YYYY HH:mm:ss'),
       content: comment,
      }
      console.log(newComment.date);
      setComment("");
      // props.addNewComment(newComment);
      dispatch({
        type: 'ADD_COMMENT',
        comment: newComment,
      })
    }
  }

    return(
      <UserConsumer>
        {({loggedUsername, userID, dispatch}) => {
          return(
            <div className="addCommentContainer boxShadow">
              <input
                type="text"
                placeholder="Add a comment"
                id="addComment"
                value={comment}
                onKeyPress={(e) => handleEnterKey(e, loggedUsername, userID, dispatch)}
                onChange={(e) => handleOnChange(e, loggedUsername)}/>
            </div>
          )
        }}
      </UserConsumer>
    )

};

export default AddComment;
