import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Userslice"
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist";


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer: {
        user: persistedReducer, // Use the persisted reducer
    },
});

export const persistor = persistStore(store);
