import { createContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';
import { decryptData, encryptData } from '../../../utilities/Crypto';

const ENCRYPT_SECRET = process.env.SAMPLE_PROJECT_ENCRYPT_SECRET;

type UserProviderType = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  saveUser: () => {},
  refreshUser: () => {},
  removeUser: () => {},
});

const AuthProvider: React.FC<UserProviderType> = (props) => {
  const [cookies, setCookies, removeCookie] = useCookies(['user']);

  const saveUser = (user: User) => {
    try {
      if (!ENCRYPT_SECRET) return null;
      const encrypted_user = encryptData(ENCRYPT_SECRET, user);
      setCookies('user', encrypted_user);
      return true;
    } catch {
      return false;
    }
  };

  const refreshUser = (user: User) => {
    try {
      if (!ENCRYPT_SECRET) return null;
      const encrypted_user = encryptData(ENCRYPT_SECRET, user);
      setCookies('user', encrypted_user);
      return true;
    } catch {
      return false;
    }
  };

  const removeUser = () => {
    try {
      removeCookie('user');
      return true;
    } catch {
      return false;
    }
  };

  const user = useMemo(() => {
    try {
      if (!ENCRYPT_SECRET) return null;
      const user = cookies.user;
      return decryptData<User>(ENCRYPT_SECRET, user) ?? null;
    } catch {
      return null;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        saveUser,
        refreshUser,
        removeUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
