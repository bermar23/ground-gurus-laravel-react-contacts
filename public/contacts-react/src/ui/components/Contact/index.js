import React from 'react';
import Panel from 'ui/components/Panel';

class Contact extends React.Component {
  render() {
    return (
      <li>
        <h3>{this.props.contact.name}</h3>
        <p>{this.props.contact.number}</p>
      </li>
    );
  }
}

export default Contact