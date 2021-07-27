import React from 'react';
import {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import FavoriteList from './favorite-list';
import FavoritesEmpty from './favorites-empty';
import offerProp from '../room/room.prop.js';
import withLayout from '../hocs/with-layout';
import Utils from '../../utils/utils';

function Favorites(props) {
  const {places} = props;
  const favoriteList = Utils.getFavoritePlacesSeparatedByCity(places);

  return (
    <Fragment>
      {
        favoriteList.size === 0
          ? <FavoritesEmpty />
          :
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <FavoriteList favoriteList={favoriteList} />
              </section>
            </div>
          </main>
      }
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </Link>
      </footer>
    </Fragment>
  );
}

Favorites.propTypes = {
  places: PropTypes.arrayOf(offerProp),
};

export default withLayout(Favorites, 'page page--favorites-empty');
