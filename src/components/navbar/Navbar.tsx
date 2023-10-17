import { ReactNode } from 'react';
import style from './Navbar.module.scss';
import { User } from '@firebase/auth';
import { useNavigate } from 'react-router-dom';

type NavbarType = {
  user: User;
  children?: ReactNode;
};

const Navbar: React.FC<NavbarType> = (props) => {
  const { user, children } = props;

  const navigate = useNavigate()

  const onClickProfile = async () => {
    navigate('/user/profile')
  }

  return (
    <div className={`${style.container} bg-gray-600`}>
      <div className={style.profile} onClick={onClickProfile}>
        <img src="/vite.svg"/>
        <span className="ml-2">{user.displayName ?? '...'}</span>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
