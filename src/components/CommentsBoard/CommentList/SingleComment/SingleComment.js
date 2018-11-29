import React from 'react'
import './SingleComment.scss'
import moment from 'moment'
import MockImage from '../../../../utility/mockImage.jpg'

const SingleComment = ({author, date, content}) => {
  let relativeDate = moment(date, "DD.MM.YYYY hh:mm:ss").fromNow();
  let isNum = relativeDate[0];
  isNum = Number(isNum).toString();
  (isNum === 'NaN') && (relativeDate = "1 m");
  (relativeDate.indexOf(" ") > -1) && (relativeDate = relativeDate.slice(0, relativeDate.indexOf(" ") + 2));
    return(
      <li className="singleComment">
        <div className="commentDetails">
          <div className="commentatorImageContainer">
            <img src={ MockImage } alt="" className="commentatorImage"/>
          </div>
          <p className="commentatorName">{author}</p>
          <p className="commentAdded">{relativeDate}</p>
        </div>
        <p className="commentContent">{content}</p>
      </li>
    )

};

export default SingleComment;
