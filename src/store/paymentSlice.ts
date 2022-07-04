import { createSlice , createEntityAdapter , createAsyncThunk , PayloadAction } from '@reduxjs/toolkit';
import api from '../instance/api';
import { RootState } from '../instance/store';
import { dictornaryToArray } from '../utils/array';

const paymentAdapter = createEntityAdapter<any>({})

export const fetchPayment = createAsyncThunk(
    'payment/list',
    async ( t ) => {
      let rs = await api.get("/payment")
      return rs.data
    }
)


export const paymentSlice = createSlice({
  name: 'payment',
  initialState : paymentAdapter.getInitialState(),
  reducers: {
    addPayment : paymentAdapter.addOne,
    editPayment : paymentAdapter.updateOne,
    delPayment : paymentAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPayment.fulfilled, (state, action : PayloadAction<any[]>) => {

        paymentAdapter.setAll(state , action.payload)
    })
  }

});

export const { addPayment , editPayment , delPayment } = paymentSlice.actions;
export const selectPayment = (state: RootState) => dictornaryToArray(state.payment.entities);
export default paymentSlice.reducer;