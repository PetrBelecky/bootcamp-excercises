import React from 'react';

export default class Celebrity extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props)

    return (
      <div className="celebrity">

        <img src={this.props.photo} alt={this.props.name} />

        <div className="text">
          <h2>{this.props.name}</h2>
          <div className="earnings">
            <h3>Earnings:</h3>
            {this.props.earnings}
          </div>
          <div className="age">
            <h3>Age:</h3>
            {this.props.age}
          </div>

          <div className="citizenship">
            <h3>Citizenship:</h3>
            {this.props.citizenship}
          </div>

          <div className="events">
            <ul>

              {
                this.props.events.map((obj) => {
                  return (
                    <li>{obj}</li>
                  )
                })

              }

            </ul>

          </div>

        </div>

      </div>
    );
  }
}