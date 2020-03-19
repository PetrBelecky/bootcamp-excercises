import React from 'react';

/* <li>
The Shawshank redemption
<div className="rating">9.2</div>
</li> */

export default class MoviesListShort extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      loaded: false,
      data: []
    };

    this.url = 'http://laravel.test/api/best';
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    if (this.url) {
      this.setState({
        loading: true,
        loaded: true,
        data: []
      })

      fetch(this.url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            loaded: true,
            data: data
          })
        })
        .finally(this.setState({
          loading: false
        }));
    }
  }

  render() {

    let content = (
      <div className="message">
        <div className="loader"><div></div><div></div><div></div><div></div></div>
                Loading
      </div>
    )
    if (!this.state.loading && this.state.loaded) {

      content = (
        <>
          <ul>
            {
              // body of map function should be without curly braces
              // otherwise JSX interpretter will fail
              this.state.data.map(movie =>
                (<li>
                  {movie.name}
                  <div className="rating">{movie.rating}</div>
                </li>)
              )
            }
          </ul>
        </>
      )
    }

    return (
      <section className="top-rated">

        <h2>Top rated movies & shows</h2>

        {content}

      </section>
    );
  }
}