import React from 'react';
import PropTypes from 'prop-types';
import withAuthorization from '../hoc/withAuthorization';

const Page2 = (props, { loggedUser }) => {
  return <div>Hello page 2</div>;
};

Page2.contextTypes = {
  loggedUser: PropTypes.object,
}

//? c'est une fonction que l'on doit fournir au HOC
//? pour savoir si on doit authorisé ou pas l'user
//? à voir la page
const authCondition = (loggedUser) => !!loggedUser;

export default withAuthorization(Page2, authCondition);
