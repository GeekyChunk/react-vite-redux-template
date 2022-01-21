import { configureStore } from '@reduxjs/toolkit'
import ThunkMiddleware from 'redux-thunk'
import appReducer from './slice/appSlice'

export const store = configureStore({
    reducer: {
        app: appReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ThunkMiddleware),
})
