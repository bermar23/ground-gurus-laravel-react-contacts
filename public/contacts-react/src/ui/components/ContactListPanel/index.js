import React from 'react';
import Panel from 'ui/components/Panel';
import Contact from 'ui/components/Contact';

import { getContactsAPI } from 'services/ContactsServices';

class ContactListPanel extends React.Component {

  constructor() {
    super();
    this.state = { contacts: [] };
  }

  componentDidMount() {
    getContactsAPI()
      .then((contacts) => {
        this.setState({ contacts });
      });
  }

  render() {
    let contactElements = demoContacts.map((contact) => {
      return <Contact contact={this.state.contacts} />;
    });

    return (
      <Panel width="4" title="Contact List">
        <ul>
          {contactElements}
        </ul>
      </Panel>
    );
  }
}

export default ContactListPanel