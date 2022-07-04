import { createSlice , createEntityAdapter , createAsyncThunk , PayloadAction} from '@reduxjs/toolkit';
import api from '../instance/api';
import { RootState } from '../instance/store';
import { Pricing } from '../interface/Pricing';
import { dictornaryToArray } from '../utils/array';

const pricingAdapter = createEntityAdapter<Pricing>({ selectId: (b) => b._id,  })

export const fetchPricing = createAsyncThunk(
  'pricing/list',
  async ( t ) => {
    let rs = await api.get("/pricing")

    return rs.data
  }
)


export const pricingSlice = createSlice({
  name: 'pricing',
  initialState : pricingAdapter.getInitialState(),
  reducers: {
    addPricing : pricingAdapter.addOne,
    editPricing : pricingAdapter.updateOne,
    delPricing : pricingAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPricing.fulfilled, (state, action : PayloadAction<Pricing[]>) => {
     
      pricingAdapter.setAll(state , action.payload)
    })
  }
});

export const { addPricing , editPricing , delPricing } = pricingSlice.actions;
export const selectPricing = (state: RootState) => dictornaryToArray(state.pricing.entities);
export default pricingSlice.reducer;