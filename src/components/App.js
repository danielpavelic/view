import React, { PropTypes } from 'react';
import Header from '../components/common/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="container">
          <div className="row">
            <div className="col-md-12">
              <Header />
            </div>
          </div>
        </header>
        <section className="container">
          <div className="row">
            <div className="col-md-12">
              {this.props.children}
            </div>
          </div>
        </section>
      </div>
      );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;