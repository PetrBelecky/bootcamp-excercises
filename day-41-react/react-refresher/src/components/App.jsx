import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="page">

          <header>
            <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture.png" alt="Aperture science" className="logo" />

            <div class="user">
              <span>chell@aperture.sc</span><br />
              <a href="#">logout</a>
            </div>

            <nav>
              <a href="#">Home</a>
              <a href="#" className="current">Products</a>
              <a href="#">Stores</a>
              <a href="#">Customers</a>
            </nav>
          </header>

          <div id="main">
            <nav className="filter">
              <label htmlFor="filter">Filter</label>
              <input type="text" name="filter" id="filter" placeholder="enter search term" />
            </nav>

            <div className="content">
              <h1>Products</h1>

              <div className="product-list">

                <div className="product">
                  <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/propulsion-gel.jpg" alt="" />
                  <div className="name">Propulsion gel</div>
                </div>

                <div className="product">
                  <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/weight-cube.jpg" alt="" />
                  <div className="name">Weight cube</div>
                </div>

                <div className="product">
                  <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/friendly-cube.jpg" alt="" />
                  <div className="name">A friend</div>
                </div>

                <div className="product">
                  <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/portal-gun.jpg" alt="" />
                  <div className="name">Portal gun</div>
                </div>

                <div className="product">
                  <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/defense-robot.jpg" alt="" />
                  <div className="name">Home-defense robot</div>
                </div>

                <div className="product">
                  <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/cake.jpg" alt="" />
                  <div className="name">Cake (not a lie)</div>
                </div>

              </div>

            </div>

          </div>

          <footer>
            &copy; 2027 Aperture Laboratories
</footer>

        </div>
      </div>
    );
  }
}

export default App;
