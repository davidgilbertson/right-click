import React, { Component } from 'react';
import ContextMenu from '../ContextMenu/ContextMenu';
import './User.css';

class User extends Component {
  state = {
    showContextMenu: false,
  };

  contextRef = React.createRef();

  handleWindowMouseDown = (e) => {
    if (this.contextRef.current && !this.contextRef.current.contains(e.target)) {
      this.closeWindow();
    }
  };

  closeWindow = () => {
    window.removeEventListener('mousedown', this.handleWindowMouseDown);
    this.setState({ showContextMenu: false });
  };

  onRightClick = e => {
    e.preventDefault();

    this.setState({
      showContextMenu: true,
      x: e.clientX,
      y: e.clientY,
    });

    window.addEventListener('mousedown', this.handleWindowMouseDown);
  };

  render () {
    let {name} = this.props;

    return (
      <div className="User" onContextMenu={this.onRightClick}>
        {name}

        {this.state.showContextMenu && (
          <ContextMenu
            ref={this.contextRef}
            x={this.state.x}
            y={this.state.y}
            items={[
              {
                text: 'Add to special users',
                onClick: () => {
                  this.props.addToSpecialUsers();
                  this.closeWindow();
                },
              },
            ]}
          />
        )}
      </div>
    );
  }
}

export default User;
