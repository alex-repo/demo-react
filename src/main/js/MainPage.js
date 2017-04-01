import React from 'react';

import TabsExampleControlled from './TabsExampleControlled';
import PageHeader from './PageHeader';

export default class MainPage extends React.Component {

    render() {
        return (
          <div>
              <PageHeader />
              <TabsExampleControlled />
          </div>
        );
    }
}