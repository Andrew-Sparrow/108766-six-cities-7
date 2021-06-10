import PropTypes from 'prop-types';

export default PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      bedroom: PropTypes.number.isRequired,
      city: PropTypes.shape({
        location: PropTypes.shape({
          latitute: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired,
        }).isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
      goods: PropTypes.arrayOf(PropTypes.string).isRequired,
      host: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        is_pro: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
      }),
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      is_favorite: PropTypes.bool.isRequired,
      is_premium: PropTypes.bool.isRequired,
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }),
      max_adults: PropTypes.number.isRequired,
      preview_image: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
);
