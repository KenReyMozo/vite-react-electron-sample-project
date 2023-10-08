import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { AuthContext } from "./context/AuthContext"


const Layout : React.FC = () => {

    // const { user } = useContext(AuthContext)


    return (
        <>
            <Outlet/>
        </>
    )
}

export default Layout