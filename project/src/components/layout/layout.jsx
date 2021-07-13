import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import
  {
  AppRoute,
  AuthorizationStatus
} from '../../const.js';

function Layout (props) {
  const {
    className,
    children,
    login,
    authorizationStatus,
  } = props;

  return (
    <div className={className}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                { authorizationStatus === AuthorizationStatus.AUTH
                 ? 
                }
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}

const mapStateToProps = (state) => ({
  login: state.login,
  places: state.places,
  sortBy: state.sortBy,
  authorizationStatus: state.authorizationStatus,
});

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
  login: PropTypes.string,
  authorizationStatus: PropTypes.string.isRequired,
};

export { Layout };
export default connect(mapStateToProps, null)(Layout);
