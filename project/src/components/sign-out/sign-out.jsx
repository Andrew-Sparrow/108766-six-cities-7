import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../const.js';

function SignOut(props) {
  const { login } = props;

  return (
    <Fragment>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={ AppRoute.FAVORITES }>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{ login }</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to={ AppRoute.ROOT }>
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ Fragment>
  );
}

SignOut.propTypes = {
  login: PropTypes.string,
};

export default SignOut;
