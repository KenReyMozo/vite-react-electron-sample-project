import BulletList from '@/components/bullet-list/BulletList';
import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import SignInApi from '@/firebase-manager/auth/AuthApi';
import useFirebaseAuth from '@/firebase-manager/auth/AuthHook';
import AuthProvider from '@/firebase-manager/auth/AuthProvider';
import { CleanText } from '@/utilities/DataHandler';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useFirebaseAuth({ redirect: '/user/home', fallback_to: '/' });
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [loginErrors, setLoginErrors] = useState<string[]>([]);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const onChangeLoginData = (e: RCE<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginErrors([]);
    const clean_value = CleanText(value);
    setLoginData((prev) => ({ ...prev, [name]: clean_value }));
  };

  const ShowNotification = () => {
    new Notification('My Notification', {
      body: 'This is a sample notification body',
    });
  };

  const onSubmitLoginForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginErrors([]);
    setIsLoading(true);
    const credentials = await SignInApi(loginData);
    setIsLoading(false);
    if (typeof credentials === 'string') {
      setLoginErrors([credentials]);
      return;
    }
    ShowNotification();
    navigate('/user/home');
  };

  return (
    <div className="page flex flex-col items-center justify-center">
      {!isSignUp && (
        <form className={`swing_in_top_fwd min-w-[20rem] bg-gray-200 p-4 rounded-lg`} onSubmit={onSubmitLoginForm}>
          <Input
            label="Email"
            type="email"
            inputMode="email"
            name="email"
            value={loginData.email}
            placeholder="sample@email.com"
            onChange={onChangeLoginData}
            disabled={user === undefined || isLoading}
            required
          />
          <Input
            label="Password"
            inputMode="text"
            placeholder="************"
            disabled={user === undefined || isLoading}
            type="password"
            name="password"
            onChange={onChangeLoginData}
            required
          />
          <BulletList items={loginErrors} hide={false} />
          <div className="grid gap-6 mb-6 md:grid-cols-2 mt-4">
            <Button.Dark type="submit" disabled={user === undefined || isLoading}>
              Login
            </Button.Dark>
            <Button.Alternative disabled={user === undefined || isLoading} onClick={() => setIsSignUp((prev) => !prev)}>
              Sign Up
            </Button.Alternative>
          </div>
        </form>
      )}
      {isSignUp && (
        <form className={`swing_in_top_fwd min-w-[20rem] bg-gray-200 p-4 rounded-lg`} onSubmit={onSubmitLoginForm}>
          <Input
            label="Email"
            type="email"
            inputMode="email"
            disabled={user === undefined || isLoading}
            placeholder="sample@email.com"
            required
          />
          <Input
            label="Password"
            inputMode="text"
            placeholder="************"
            disabled={user === undefined || isLoading}
            type="password"
            required
          />
          <div className="grid gap-6 mb-6 md:grid-cols-2 mt-4">
            <Button.Alternative type="submit" disabled={user === undefined || isLoading}>
              Sign Up
            </Button.Alternative>
            <Button.Dark disabled={user === undefined || isLoading} onClick={() => setIsSignUp((prev) => !prev)}>
              Login
            </Button.Dark>
          </div>
        </form>
      )}
      <div className="my-2">
        <AuthProvider.Google onAuth={() => {}} />
      </div>
    </div>
  );
};

export default LoginPage;
