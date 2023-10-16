import { Outlet } from "react-router-dom"
import SideBar from "../sidebar/Sidebar"
import style from './AuthLayout.module.scss'


const AuthLayout : React.FC = () => {

    // const { user } = useContext(AuthContext)

    return (
        <>
        <SideBar/>
        <main className={`${style.container} bg-gray-700`}>
        <Outlet/>
        </main>
        </>
    )
}

export default AuthLayout