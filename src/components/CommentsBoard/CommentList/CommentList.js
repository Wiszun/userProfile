import React from 'react'
import SingleComment from './SingleComment/SingleComment'
import './CommentList.scss'
import { Scrollbars } from 'react-custom-scrollbars';
import moment from 'moment';
import { UserConsumer } from '../../../Context'

const CommentList = ({newComment}) => {
  let commentsArray = 'No comments';
  const sortComments = (comments) => {
    comments.sort(function(prev, next){
      var keyA = new Date(moment(prev.date, 'DD-MM-YYYY hh:mm:ss').format()),
          keyB = new Date(moment(next.date, 'DD-MM-YYYY hh:mm:ss').format());

      if(keyA < keyB) return -1;
      if(keyA > keyB) return 1;
      return 0;
  });
  comments && (commentsArray = comments.map((comment, key) => {
    return <SingleComment key={key} {...comment}/>
  }));
  }

    return(
      <UserConsumer>
        {({userData}) => {
          sortComments(userData.comments);
          return(
            <Scrollbars className="commentScrollList" style={
              { height: 500}
            }>
              <ul className="commentList">
                {commentsArray}
              </ul>
            </Scrollbars>

          )
        }}
      </UserConsumer>
    )

};

export default CommentList;
