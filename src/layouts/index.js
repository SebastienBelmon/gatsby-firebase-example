import React, { Component } from 'react';
import Link from 'gatsby-link';

import withAuth from '../hoc/withAuth.js';

import Navigation from '../components/navigation/Navigation';

class Index extends Component {
  render() {
    const { children } = this.props;
    return (
      <div css={{ margin: '3rem auto', maxWidth: 600 }}>
        <Navigation />
        <div className="main">{children()}</div>
      </div>
    );
  }
}

export default withAuth(Index);
