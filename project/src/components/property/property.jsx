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

import PropertyCommentForm from './property-comment-form';
import PropertyCommentList from './property-comment-list';
import withLayout from '../hocs/with-layout';
import PropertyImagesList from './property-images-list';
import PropertyGoodsList from './property-goods-list';
import { neighbourhoodPlaces } from '../../mock/neighbourhood-places';
import PropertyNearPlacesList from './property-near-places-list';
import LoadingScreen from '../loading-screen/loading-screen.jsx';

import {
  fetchCommentsList,
  fetchNearbyPlacesList,
  addToFavorite
} from '../../store/api-actions';

import { ActionCreator } from '../../store/actions';

import {
  AuthorizationStatus,
  AppRoute
} from '../../const.js';

import Utils from '../../utils/utils';
import Map from '../map/map';

function Property ( props ) {
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

  const hotelFromServer = places.find((place) => place.id === +id);

  const adaptedPlaceForClient = hotelFromServer;

  const width = Utils.getWidthByRating(adaptedPlaceForClient.rating);

  useEffect(() => {
    dispatch(fetchCommentsList(id));
    dispatch(fetchNearbyPlacesList(id));

    return () => {
      dispatch(ActionCreator.removeNearbyPlaces());
      dispatch(ActionCreator.removeComments());
    };
  }, [id, dispatch]);

  const onFavoriteClick = (evt) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push(AppRoute.LOGIN);
    } else {
      favoriteClickHandler(adaptedPlaceForClient.id, !adaptedPlaceForClient.isFavorite);
    }
  };

  return (
    <Fragment>
      <main className="page__main">
        <section className="property">
          < PropertyImagesList images={adaptedPlaceForClient.images} />
          <div className="property__container container">
            <div className="property__wrapper">
              {adaptedPlaceForClient.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>)}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  { adaptedPlaceForClient.description }
                </h1>
                <button
                  className={`property__bookmark-button button ${adaptedPlaceForClient.isFavorite ? 'property__bookmark-button--active' : ''}`}
                  type="button"
                  onClick={(evt) => { onFavoriteClick(evt); }}
                >
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${width}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{ Math.round(adaptedPlaceForClient.rating) }</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {adaptedPlaceForClient.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  { adaptedPlaceForClient.bedrooms } Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max { adaptedPlaceForClient.maxAdults } adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{ adaptedPlaceForClient.price }</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                < PropertyGoodsList goods={ adaptedPlaceForClient.goods } />
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${adaptedPlaceForClient.host.isPro && 'property__avatar-wrapper--pro'} user__avatar-wrapper`}>
                    <img
                      className="property__avatar user__avatar"
                      src={adaptedPlaceForClient.host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    { adaptedPlaceForClient.host.name}
                  </span>
                  {adaptedPlaceForClient.host.isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    { adaptedPlaceForClient.description }
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                {isCommentsLoaded
                  ?
                  <Fragment>
                    <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
                    < PropertyCommentList reviews={comments} />
                  </Fragment>
                  : <LoadingScreen />}
                { authorizationStatus === AuthorizationStatus.AUTH && < PropertyCommentForm />}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              activeCityName={adaptedPlaceForClient.city.name}
              city={adaptedPlaceForClient.city}
              points={neighbourhoodPlaces}
              selectedPoint={adaptedPlaceForClient}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            { isNearbyPlacesLoaded
              ? < PropertyNearPlacesList nearbyPlaces={nearbyPlaces}/>
              : <LoadingScreen />}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </Link>
      </footer>

    </Fragment>
  );
}

Property.propTypes = {
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

const withLayoutProperty =  withLayout(Property);

export { withLayoutProperty };
export default connect(mapStateToProps, mapDispatchToProps)(withLayoutProperty);

