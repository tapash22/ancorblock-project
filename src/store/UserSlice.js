// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunk Actions
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userCredentials) => {
    const request = await axios.post('https://reqres.in/api/login', userCredentials);
    const response = await request.data.data;
    localStorage.setItem('user', JSON.stringify(response));
    return response;
  }
);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData) => {
    const request = await axios.post('https://reqres.in/api/register', userData);
    const response = await request.data.data;
    localStorage.setItem('user', JSON.stringify(response));
    return response;
  }
);

// Slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    loading: false,
    user: null,
    error: null,
  },
  reducers: {
    loginUserSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);

        if (action.error.message === 'Request failed with status code 401') {
          state.error = 'Access Denied! Invalid Credentials';
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        state.error = action.error.message;
      });
  },
});

export const { loginUserSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
