import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  // const { user } = useContext(AuthContext)

  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
