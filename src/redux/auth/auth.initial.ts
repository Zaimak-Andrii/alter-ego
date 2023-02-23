import { Status } from '@/constants/status';

type AuthType = {
  userName: string | null;
  status: Status;
  error: string | null;
};

export const initialState: AuthType = {
  userName: null,
  status: 'idle',
  error: null,
};
