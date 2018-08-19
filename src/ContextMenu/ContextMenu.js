import React from 'react';
import Portal from '../Portal/Portal';
import './ContextMenu.css';

const ContextMenu = React.forwardRef((props, ref) => (
  <Portal>
    <div
      ref={ref}
      className="ContextMenu__wrapper"
      style={{
        left: props.x,
        top: props.y,
      }}
    >
      {props.items.map(item => (
        <button
          key={item.text}
          className="ContextMenu__item"
          onClick={item.onClick}
        >
          {item.text}
        </button>
      ))}
    </div>
  </Portal>
));

export default ContextMenu;
