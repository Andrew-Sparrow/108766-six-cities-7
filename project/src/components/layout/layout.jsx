import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import SignIn from '../sign-in/sign-in';
import SignOut from '../sign-out/sign-out';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus, getLogin} from '../../store/user/selectors';

function Layout(props) {
  const {children, className} = props;
  const login = useSelector(getLogin);
  const authorizationStatus = useSelector(getAuthorizationStatus);

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
                {authorizationStatus === AuthorizationStatus.AUTH
                  ? <SignOut login={login} />
                  : <SignIn/>}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {children}
    </ div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
};

export default Layout;
