import React from 'react';

import MainLayout from 'ui/layouts/MainLayout';
import ContactListPanel from 'ui/components/ContactListPanel';
import ContactFormPanel from 'ui/components/ContactFormPanel';

class HomePage extends React.Component {
  render() {
    return (
      <MainLayout>
        <ContactListPanel />
        <ContactFormPanel />
      </MainLayout>
    );
  }
}

export default HomePage;