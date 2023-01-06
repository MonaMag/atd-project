import { configureStore } from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema";
import {userReducer} from "../../../entities/User/model/slice/userSlice";


export const store = configureStore<StateSchema>({
    reducer: {
       user: userReducer,
    },
    devTools: process.env.NODE_ENV === "development", //disable redux dev tools in PROD
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
