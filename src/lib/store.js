"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from '@/lib/features/basketSlice';


const rootReducer = combineReducers({
  card: counterReducer,
},);

export const store = configureStore({
  reducer: rootReducer,
 });