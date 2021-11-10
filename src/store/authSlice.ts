import { createSlice , PayloadAction } from '@reduxjs/toolkit';
import { defaultUser, User } from '../interface/User';

interface AuthState{
    user : User
    token : string
}

const initState : AuthState = {
    user : defaultUser,
    token : ""
}

export const authSlice = createSlice({
  name: 'auth',
  initialState : initState,
  reducers: {
    setToken: (state, action : PayloadAction<string> ) => {
        state.token = action.payload
    },
    setUser: (state, action : PayloadAction<User> ) => {
      state.user = action.payload
    },
  },
});

export const { setUser , setToken } = authSlice.actions;

export default authSlice.reducer;