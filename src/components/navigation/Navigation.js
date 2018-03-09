import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import * as routes from '../../routes';

const Navigation = (props, { loggedUser }) => {
  return <div>{loggedUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>;
};

Navigation.contextTypes = {
  loggedUser: PropTypes.object,
};

const NavigationAuth = () => (
  <div
    css={{
      margin: '0 auto',
      maxWidth: 600,
    }}
  >
    <ul
      css={{
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    >
      <li css={{ float: 'left' }}>
        <Link to={routes.HOME}>
          <h3
            css={{
              display: 'inline-bock',
              margin: 0,
              float: 'left',
            }}
          >
            This is my Gatsby test site
          </h3>
        </Link>
      </li>
      <li css={{ float: 'right' }}>
        <Link
          css={{
            float: 'right',
            marginRight: '10px',
          }}
          to={routes.PAGE2}
        >
          Page2
        </Link>
      </li>
      <li css={{ float: 'right' }}>
        <Link
          css={{
            float: 'right',
            marginRight: '10px',
          }}
          to={routes.HOME}
        >
          Home
        </Link>
      </li>
    </ul>
  </div>
);

const NavigationNonAuth = () => (
  <div
    css={{
      margin: '0 auto',
      maxWidth: 600,
    }}
  >
    <ul
      css={{
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    >
      <li css={{ float: 'left' }}>
        <Link to={routes.HOME}>
          <h3
            css={{
              display: 'inline-bock',
              margin: 0,
              float: 'left',
            }}
          >
            This is my Gatsby test site
          </h3>
        </Link>
      </li>
      <li css={{ float: 'right' }}>
        <Link
          css={{
            float: 'right',
            marginRight: '10px',
          }}
          to={routes.HOME}
        >
          Home
        </Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
