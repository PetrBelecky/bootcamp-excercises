import React from 'react';
import './week.css';

import { Day } from '../Day/day.jsx';

import { forecast } from '../forecast.js';

export class Week extends React.Component {
  render() {

    return (
      <div className="container">
        <h1>Weekly Weather Forecast</h1>

        <div className="week-forecast">
          {
            forecast.map((obj) => {
              return (
                <Day
                  key={obj.weekday}
                  day={obj.weekday}
                  dayTemp={`${obj.tempDay}°`}
                  nightTemp={`${obj.tempNight}°`}
                  weather={obj.weather}
                />q
              )
            })
          }
        </div>
      </div>
    )
  }
}

