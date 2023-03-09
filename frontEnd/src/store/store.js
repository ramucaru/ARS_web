// import { createStore } from "redux";
// import cartReducer from "./reducer/cartReducer";

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import counterSlice from "./reducer/cartReducer"
import { configureStore } from '@reduxjs/toolkit'

const persistConfig = {
    key: 'counter',
    storage,
};

const reducers = combineReducers({ counter: counterSlice });

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// const store = createStore(cartReducer);

// export default store;