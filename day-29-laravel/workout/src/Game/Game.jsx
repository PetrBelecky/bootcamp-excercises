import React from 'react';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="game">
                <div className="game__img-wrapper"><img src={this.props.image_url} /></div>
                <div className="game__text-wrapper">
                    <h2> {this.props.name}</h2>
                    <p className="game__rating">Rating: {this.props.rating} %</p>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}