import PropTypes from 'prop-types';

export default PropTypes.shape({
  'id': PropTypes.number.isRequired,
  'price': PropTypes.number.isRequired,
  'bedrooms': PropTypes.number.isRequired,
  'city': PropTypes.shape({
    'location': PropTypes.shape({
      'latitude': PropTypes.number.isRequired,
      'longitude': PropTypes.number.isRequired,
      'zoom': PropTypes.number.isRequired,
    }).isRequired,
    'name': PropTypes.string.isRequired,
  }).isRequired,
  'description': PropTypes.string.isRequired,
  'goods': PropTypes.arrayOf(PropTypes.string).isRequired,
  'host': PropTypes.shape({
    'id': PropTypes.number.isRequired,
    'avatarUrl': PropTypes.string,
    'isPro': PropTypes.bool,
    'name': PropTypes.string.isRequired,
  }),
  'images': PropTypes.arrayOf(PropTypes.string).isRequired,
  'isFavorite': PropTypes.bool,
  'isPremium': PropTypes.bool,
  'location': PropTypes.shape({
    'latitude': PropTypes.number.isRequired,
    'longitude': PropTypes.number.isRequired,
    'zoom': PropTypes.number.isRequired,
  }),
  'maxAdults': PropTypes.number,
  'previewImage': PropTypes.string,
  'rating': PropTypes.number.isRequired,
  'title': PropTypes.string.isRequired,
  'type': PropTypes.string.isRequired,
});
