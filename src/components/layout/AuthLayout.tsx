import { Outlet } from "react-router-dom"
import SideBar from "../sidebar/Sidebar"
import style from './AuthLayout.module.scss'
import useFirebaseAuth from "@/firebase-manager/auth/AuthHook"
import Navbar from "../navbar/Navbar"
import { FaSignOutAlt } from "react-icons/fa"
import Button from "../button/Button"
import { SignOutApi } from "@/firebase-manager/auth/AuthApi"

const AuthLayout : React.FC = () => {

    const { user } = useFirebaseAuth({ fallback_to : '/'})

    const onSignOut = () => {
        SignOutApi()
    }

    if(!user)
    return (
        <>...</>
    )

    return (
        <>
        <SideBar/>
        <main className={`${style.container} bg-gray-700`}>
        <Navbar user={user}>
            <Button.Dark onClick={onSignOut}>
                <FaSignOutAlt/>
            </Button.Dark>
        </Navbar>
        <Outlet/>
        </main>
        </>
    )
}

export default AuthLayout