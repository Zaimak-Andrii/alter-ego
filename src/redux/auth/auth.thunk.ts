import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginService, LogoutService } from '@/services/auth.service';
import { AuthType } from '@/types/auth.type';

// Fake login
export const loginThunk = createAsyncThunk<
  string,
  AuthType,
  { rejectValue: string }
>('auth/login', async (credential, { rejectWithValue }) => {
  try {
    const response = await loginService(credential);

    if (!response.data) {
      return rejectWithValue(response.message!);
    }

    return response.data.login;
  } catch (err) {
    return rejectWithValue((err as Error).message);
  }
});

// Fake logout
export const logoutThunk = createAsyncThunk('auth/logout', () =>
  LogoutService()
);
