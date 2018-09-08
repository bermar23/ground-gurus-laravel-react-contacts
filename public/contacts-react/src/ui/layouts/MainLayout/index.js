import React from 'react';

import Header from 'ui/partials/Header';

class MainLayout extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />

        <div className="container" style={{ marginTop: '10px' }}>
          <div className="row justify-content-center">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default MainLayout;