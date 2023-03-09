import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import Puthusu from "./app";
import store from './store/store';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
  let persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Puthusu />
      </PersistGate>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
