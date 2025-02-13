import { configureStore } from '@reduxjs/toolkit'
import slice from './slice/slice'
  

export const store = configureStore({
  reducer: {
    cart:slice
  },
})