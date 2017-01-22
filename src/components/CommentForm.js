/**
 * Created by gatsby on 2017/1/22.
 */
import React from 'react';

class CommentForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    let author = this.refs.author.value,
        text = this.refs.text.value;
    console.log(author, text);

    this.props.onCommentSubmit({author, text, date: "刚刚"})
  }
  render() {
    return (
      <form className="am-form" target="_blank" onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>用户: </label> <input type="text" ref="author"/>
        </div>
        <div>
          <label>评论: </label> <textarea ref="text"></textarea>
        </div>
        <button type="submit">
          添加评价
        </button>
      </form>
    );
  }
}

module.exports = CommentForm;