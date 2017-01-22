/**
 * Created by gatsby on 2017/1/22.
 */
import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  render() {
    let commentNodes = this.props.data.map(comment => {
       return (
         <Comment author={comment.author} date={comment.date} text={comment.text}>

         </Comment>
       )
    });
    return (
      <div>
        {commentNodes}
      </div>
    );
  }
}

module.exports = CommentList;