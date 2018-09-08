import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light navbar-laravel">
        <div className="container">
          <a className="navbar-brand" href="/">Contacts</a>
        </div>
      </nav>
    );
  }
}

export default Header;
