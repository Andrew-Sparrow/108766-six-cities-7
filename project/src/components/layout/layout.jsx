import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { AppRoute} from '../../const.js';

function Layout (props) {
  const {
    className,
    children,
    login,
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
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={ AppRoute.FAVORITES }>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{ login }</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
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
});

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object,
  login: PropTypes.string,
};

export { Layout };
export default connect(mapStateToProps, null)(Layout);
