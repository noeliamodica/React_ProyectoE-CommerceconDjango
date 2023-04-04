import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: "",
    fullname: "",
    password: "",
  }

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
        state.email = action.payload.email;
        state.fullname = action.payload.fullname;
        state.password = action.payload.password;
    },

    unsetUser: (state) => {
      state.email = "";
      state.fullname = "";
      state.password = "";
    }
   },
})

// Action creators are generated for each case reducer function
export const { setUser, unsetUser } = userSlice.actions

export default userSlice.reducer