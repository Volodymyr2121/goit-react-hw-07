import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfigContacts = {
  key: 'contacts',
  storage,
}
 
const persistedContactsReducer = persistReducer(persistConfigContacts, contactsReducer);


const persistConfigFilter = {
  key: 'filter',
  storage,
}
 
const persistedFilterReducer = persistReducer(persistConfigFilter, filtersReducer);


export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: persistedFilterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)