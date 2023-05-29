import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PortifolioContext from './PortifolioContext';

function PortifolioProvider({ children }) {
  const [defaultState] = useState([]);


  const valueContext = {
    defaultState,
  };

  return (
    <PortifolioContext.Provider value={ valueContext }>
      { children }
    </PortifolioContext.Provider>
  );
}

PortifolioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PortifolioProvider;
