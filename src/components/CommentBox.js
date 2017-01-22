/**
 * Created by gatsby on 2017/1/22.
 */

import React from 'react';
import AMUIReact from 'amazeui-react';
import $ from 'jquery';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
var Nav = AMUIReact.Nav;
var NavItem = AMUIReact.NavItem;

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
    this.getComments();
  };

  handleCommentsSubmit(comment) {
    console.log(comment);
    let comments = this.state.data,
      newComments = comments.concat(comment);
    this.setState({data: newComments});
  };

  getComments() {
    $.ajax({
      async: false,
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: comments => {
        this.setState({data: comments});
      },
      error: (xhr, status, error) => {
        console.log(error)
      }
    })
  };
  render() {
    return (
      <div>
      <Nav tabs>
        <NavItem href="#">首页</NavItem>
        <NavItem href="#">开始</NavItem>
        <NavItem active href="#">评论</NavItem>
      </Nav>
        <div></div>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentsSubmit.bind(this)}/>
      </div>
    );
  }
}
module.exports = CommentBox;