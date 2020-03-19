import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    // this state is container OBJECT
    this.state = {
      loading: true,
      character: null,
      characterFilmography: [],
    }
  }

  fetchPersonAPI = async () => {
    const randNumber = Math.ceil(Math.random() * 20);

    try {
      const response = await fetch(
        `https://swapi.co/api/people/${randNumber}`
      );

      const person = await response.json();

      this.setState({
        character: {
          name: person.name,
          birthYear: person.birth_year,
          homeworld: person.homeworld,
        },
      });

      await this.fetchFilmAPI(person.films);

    } catch (error) {
      console.error(error);
    }
  }

  fetchFilmAPI = async (arrayOfFilms) => {

    let films = [];

    try {
      arrayOfFilms.forEach(async (oneFilm) => {
        const response = await fetch(oneFilm);
        const film = await response.json();
        films.push(film);
      });

      this.setState((previousState) => {
        return {
          ...previousState,
          characterFilmography: films,
          loading: false
        }
      })

    } catch (error) {
      console.error(error);
    }
  }

  async componentDidMount() {
    await this.fetchPersonAPI();
  }

  render() {


    return (
      <div>
        {this.state.loading ?
          'loading...' :
          <>
            <p>
              <strong>Name: </strong>{this.state.character.name}
            </p>
            <p>
              <strong>Birth: </strong>{this.state.character.birthYear}
            </p>
            <p>
              <strong>Homeworld: </strong>{this.state.character.homeworld}
            </p>
            <p><strong>Films: </strong></p>
          </>
        }
      </div>

    )
  }
}

export default App;
