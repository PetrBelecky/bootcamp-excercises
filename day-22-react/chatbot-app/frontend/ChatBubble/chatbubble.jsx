import './chatbubble.scss';
import React from 'react';

import { conversation } from '../chat.js';
import { LikeButton } from '../LikeButton/likebutton.jsx'

import unicorn from './img/unicorn.png';
import cleverbot from './img/cleverbot.png';

export class ChatBubble extends React.Component {
  render() {
    return (
      <ul className="chat__bubbles">
        {
          conversation.map(item => {

            if (item.name === 'Unicorn') {
              return (
                <div

                  className={`chat__wrapper ${item.side}`}>
                  <img src={unicorn} />
                  <li>
                    {item.text}
                    <LikeButton />
                  </li>
                </div>
              )
            } else {
              return (
                <div className={`chat__wrapper ${item.side}`}>
                  <img src={cleverbot} />
                  <li>
                    {item.text}
                    <LikeButton />
                  </li>
                </div>
              )
            }
          })
        }
      </ul>
    )
  }
}