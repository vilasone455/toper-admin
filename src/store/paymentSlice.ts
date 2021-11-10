import { createSlice , createEntityAdapter } from '@reduxjs/toolkit';

const paymentAdapter = createEntityAdapter<any>({})

export const paymentSlice = createSlice({
  name: 'payment',
  initialState : paymentAdapter.getInitialState(),
  reducers: {
    addPayment : paymentAdapter.addOne,
    editPayment : paymentAdapter.updateOne,
    delPayment : paymentAdapter.removeOne,
  },
});

export const { addPayment , editPayment , delPayment } = paymentSlice.actions;

export default paymentSlice.reducer;