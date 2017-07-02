import React, { Component } from 'react';
import HelloComponent from 'components/hello';

class HomePage extends Component {
    render() {
        return (
          <div className="page">
              <HelloComponent />
          </div>
        );
    }
}

export default HomePage;