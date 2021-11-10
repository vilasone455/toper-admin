import { createSlice , createEntityAdapter } from '@reduxjs/toolkit';

const pricingAdapter = createEntityAdapter<any>({})

export const pricingSlice = createSlice({
  name: 'pricing',
  initialState : pricingAdapter.getInitialState(),
  reducers: {
    addPricing : pricingAdapter.addOne,
    editPricing : pricingAdapter.updateOne,
    delPricing : pricingAdapter.removeOne,
  },
});

export const { addPricing , editPricing , delPricing } = pricingSlice.actions;

export default pricingSlice.reducer;