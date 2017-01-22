import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox';

var comments = [
  {"author": "tom", "date": "3  分钟前", "text": "十大撒的"},
  {"author": "tom", "date": "3  分钟前", "text": "十大撒的"}
];

ReactDOM.render(
  /*<CommentBox data={comments}/>,*/
  <CommentBox url="./src/comments.json"/>,
  document.getElementById('root')
)


