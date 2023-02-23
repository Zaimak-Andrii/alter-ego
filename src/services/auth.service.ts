import { AuthType } from '@/types/auth.type';

type ResponseType<T> = {
  status: string;
  data?: T;
  message?: string;
};

export const loginService = async (
  credential: AuthType
): Promise<ResponseType<{ login: string }>> => {
  const { login, password } = credential;

  return new Promise(resolve => {
    const mLogin = 'admin';
    const mPassword = '12345';

    setTimeout(() => {
      if (login === mLogin && password === mPassword) {
        resolve({ status: 'success', data: { login } });
      } else {
        resolve({
          status: 'error',
          message: 'Incorrect login or password',
        });
      }
    }, 1000);
  });
};

export const LogoutService = async (): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};
