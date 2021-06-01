import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

function App(props) {
  const places = props.places;
  return (
    <Main places={places}/>
  );
}

App.propTypes = {
  places: PropTypes.object,
};

export default App;
