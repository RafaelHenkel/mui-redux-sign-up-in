import { createSlice } from '@reduxjs/toolkit';

interface UserType {
  id?: number;
  email: string;
  password: string;
}

const initialState: UserType[] = [];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push({ ...action.payload, id: state.length + 1 });
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
