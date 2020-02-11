import './todoitem.scss';
import { Toggle } from '../Toggle/toggle.jsx';

import React from 'react';

const items = ['walk the dog', 'buy a milk', 'learn React', 'rule the world']

export class TodoItem extends React.Component {

  render() {
    return (
      <>
        {
          items.map(item => {
            return (
              <div className="todo">
                <p>{item}</p>
                <Toggle />
              </div>
            )
          })
        }
      </>
    )
  }
}