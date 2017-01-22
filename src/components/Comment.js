/**
 * Created by gatsby on 2017/1/22.
 */

import React from 'react';
import AMUIReact from 'amazeui-react';
var Panel = AMUIReact.Panel;

class Comment extends React.Component {
  render() {
    return (
      <Panel header={this.props.author} amStyle="secondary">
        <div className="text">{this.props.text}</div>
        <span className="date">{this.props.date}</span>
      </Panel>
    )
  }
}

module.exports = Comment;