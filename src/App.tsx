import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainLayout from './components/mainlayout';
import Authentication from './components/authentication'

import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import routeReducer from './store/routeReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const store = createStore(routeReducer, composeWithDevTools())

function App() {
  return (
    <Provider store={store}>
      <Authentication>
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </Authentication>
    </Provider>
  );
}

export default App;
