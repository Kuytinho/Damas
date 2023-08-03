// Provider.js
import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [user, setUser] = useState(null);


  const parada = { user, setUser }
  return (
    <Context.Provider value={parada}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
