import React from 'react';
import Main from './Main';
import { StoreAndUpdateProviders } from './initStore';

const App = () => (
  <StoreAndUpdateProviders>
    <Main />
  </StoreAndUpdateProviders>
);

export default App;
