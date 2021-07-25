import React, {
  useEffect,
  Fragment
} from 'react';

import { useDispatch } from 'react-redux';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Link,
  useParams,
  useHistory
} from 'react-router-dom';

import PlaceCommentForm from './place-comment-form';
import PlaceCommentList from './place-comment-list';
import { PlaceFavoriteButton } from './place-favorite-button';
import withLayout from '../hocs/with-layout';
import PlaceImageList from './place-images-list';
import PlaceGoodList from './place-goods-list';
import { neighbourhoodPlaces } from '../../mock/neighbourhood-places';
import PlaceNearPlaceList from './place-near-place-list';
import LoadingScreen from '../loading-screen/loading-screen.jsx';

import {
  fetchCommentsList,
  fetchNearbyPlacesList,
  addToFavorite
} from '../../store/api-actions';

import { removeNearbyPlaces } from '../../store/actions';
import { removeComments } from '../../store/actions';

import {
  AuthorizationStatus,
  AppRoute
} from '../../const.js';

import Utils from '../../utils/utils';
import Map from '../map/map';

function Place(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    places,
    nearbyPlaces,
    comments,
    isCommentsLoaded,
    isNearbyPlacesLoaded,
    authorizationStatus,
    favoriteClickHandler,
  } = props;

  const place = places.find((placeItem) => placeItem.id === +id);

  const width = Utils.getWidthByRating(place.rating);

  useEffect(() => {
    dispatch(fetchCommentsList(id));
    dispatch(fetchNearbyPlacesList(id));

    return () => {
      dispatch(removeNearbyPlaces());
      dispatch(removeComments());
    };
  }, [id, dispatch]);

  const onClick = (evt) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push(AppRoute.SIGN_IN);
    } else {
      favoriteClickHandler(place.id, !place.isFavorite);
    }
  };

  return (
    <Fragment>
      <main className="page__main">
        <section className="property">
          < PlaceImageList images={ place.images } />
          <div className="property__container container">
            <div className="property__wrapper">
              { place.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>) }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  { place.description }
                </h1>
                <PlaceFavoriteButton place={ place } onClick={ onClick } />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={ { width: `${ width }%` } } />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{ Math.round(place.rating) }</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  { place.type }
                </li>
                <li className="property__feature property__feature--bedrooms">
                  { place.bedrooms } Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max { place.maxAdults } adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{ place.price }</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                < PlaceGoodList goods={ place.goods } />
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={ `property__avatar-wrapper ${ place.host.isPro && 'property__avatar-wrapper--pro' } user__avatar-wrapper` }>
                    <img
                      className="property__avatar user__avatar"
                      src={ place.host.avatarUrl }
                      width={ 74 }
                      height={ 74 }
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    { place.host.name }
                  </span>
                  { place.host.isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  ) }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    { place.description }
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                { isCommentsLoaded
                  ?
                  <Fragment>
                    <h2 className="reviews__title">Reviews · <span className="reviews__amount">{ comments.length }</span></h2>
                    < PlaceCommentList reviews={ comments } />
                  </Fragment>
                  : <LoadingScreen /> }
                { authorizationStatus === AuthorizationStatus.AUTH && < PlaceCommentForm /> }
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              activeCityName={ place.city.name }
              city={ place.city }
              points={ neighbourhoodPlaces }
              selectedPoint={ place }
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            { isNearbyPlacesLoaded
              ? <PlaceNearPlaceList nearbyPlaces={ nearbyPlaces } commonPlaces={ places } />
              : <LoadingScreen /> }
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={ 64 } height={ 33 } />
        </Link>
      </footer>

    </Fragment>
  );
}

Place.propTypes = {
  places: PropTypes.array,
  comments: PropTypes.array,
  nearbyPlaces: PropTypes.array,
  isCommentsLoaded: PropTypes.bool.isRequired,
  isNearbyPlacesLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  favoriteClickHandler: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  favoriteClickHandler(idPlace, isFavoritePlace) {
    dispatch(addToFavorite(idPlace, isFavoritePlace));
  },
});

const mapStateToProps = (state) => ({
  places: state.places,
  comments: state.comments,
  nearbyPlaces: state.nearbyPlaces,
  isCommentsLoaded: state.isCommentsLoaded,
  isNearbyPlacesLoaded: state.isNearbyPlacesLoaded,
  authorizationStatus: state.authorizationStatus,
});

const withLayoutPlace = withLayout(Place);

export { withLayoutPlace };
export default connect(mapStateToProps, mapDispatchToProps)(withLayoutPlace);
