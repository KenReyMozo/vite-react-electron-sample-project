import { ReactNode } from 'react';
import style from './Navbar.module.scss';
import { User } from '@firebase/auth';

type NavbarType = {
  user: User;
  children?: ReactNode;
};

const Navbar: React.FC<NavbarType> = (props) => {
  const { user, children } = props;

  return (
    <div className={`${style.container} bg-gray-600`}>
      <div className="flex items-center text-white">
        <img src="/vite.svg" className={style.profile_picture} />
        <span className="ml-2">{user.displayName ?? '...'}</span>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
