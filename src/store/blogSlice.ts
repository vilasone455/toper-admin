import { createSlice , createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '../instance/store';
import { dictornaryToArray } from '../utils/array';

const blogAdapter = createEntityAdapter<any>({})

export const blogSlice = createSlice({
  name: 'blog',
  initialState : blogAdapter.getInitialState(),
  reducers: {
    addBlog : blogAdapter.addOne,
    editBlog : blogAdapter.updateOne,
    delBlog : blogAdapter.removeOne,
  },
});

export const { addBlog , editBlog , delBlog } = blogSlice.actions;
export const selectBlog = (state: RootState) => dictornaryToArray(state.blog.entities);
export default blogSlice.reducer;