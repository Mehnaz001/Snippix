import { configureStore } from '@reduxjs/toolkit'
import SnippixReducer from './redux/SnippixSlice'

export const store = configureStore({
  reducer: { 
    snippix : SnippixReducer ,
  },
})