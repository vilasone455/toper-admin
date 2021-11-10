import { createSlice , createEntityAdapter } from '@reduxjs/toolkit';

const userAdapter = createEntityAdapter<any>({})

export const userSlice = createSlice({
  name: 'user',
  initialState : userAdapter.getInitialState(),
  reducers: {
    addUser : userAdapter.addOne,
    editUser : userAdapter.updateOne,
    delUser : userAdapter.removeOne,
  },
});

export const { addUser , editUser , delUser } = userSlice.actions;

export default userSlice.reducer;