import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../store/authSlice'
import pricingSlice from '../store/pricingSlice';
import paymentReducer  from '../store/paymentSlice';
import blogReducer from '../store/blogSlice';

export const store = configureStore({
  reducer: {
    auth : authReducer,
    payment : paymentReducer,
    blog : blogReducer,
    pricing : pricingSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;