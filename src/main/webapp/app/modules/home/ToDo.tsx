import React from 'react';

class ToDo extends React.Component {
  render() {
    return <li>{this.props.task.name}</li>;
  }
}

export default ToDo;
