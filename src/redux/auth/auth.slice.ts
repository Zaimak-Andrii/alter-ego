import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './auth.initial';
import { loginThunk, logoutThunk } from './auth.thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginThunk.pending, state => {
        state.error = null;
        state.status = 'pending';
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.userName = payload;
        state.status = 'fulfilled';
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.error = payload!;
        state.status = 'rejected';
      })
      .addCase(logoutThunk.pending, state => {
        state.error = null;
        state.status = 'pending';
      })
      .addCase(logoutThunk.fulfilled, () => initialState);
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['userName'],
};

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export default persistedReducer;
