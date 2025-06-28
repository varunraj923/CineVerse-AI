// App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Body from './components/Body.jsx'; // ✅ correct import
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const App = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </Provider>
  );
  
};

export default App;

