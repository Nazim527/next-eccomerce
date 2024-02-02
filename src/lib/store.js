"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from '@/lib/features/basketSlice';
import authSlice from "./auth/authSlice";


const rootReducer = combineReducers({
  card: counterReducer,
  auth: authSlice,
},);

export const store = configureStore({
  reducer: rootReducer,
 });