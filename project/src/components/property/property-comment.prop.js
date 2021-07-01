import PropTypes from 'prop-types';

export default PropTypes.shape({
  'comment': PropTypes.string.isRequired,
  'date': PropTypes.string.isRequired,
  'id': PropTypes.number.isRequired,
  'rating': PropTypes.number.isRequired,
  'user': PropTypes.shape({
    'avatarUrl': PropTypes.string.isRequired,
    'isPro': PropTypes.bool,
    'id': PropTypes.number.isRequired,
    'name': PropTypes.string.isRequired,
  }),
});
