import { useEffect, useState } from "react"
import { User } from "@firebase/auth"
import { useNavigate } from "react-router-dom"
import { getAuth } from "firebase/auth"
import firebaseApp from "../FirebaseManager"

const auth = getAuth(firebaseApp)

type UseFirebaseAuthType = {
	redirect? : string
	fallback_to? : string
}

const useFirebaseAuth = (props? : UseFirebaseAuthType) => {

	const navigate = useNavigate()
	const [user, setUser] = useState<User | null>()

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			setUser(authUser)

			if(!props) return
	
			if(!authUser){
				if(props.fallback_to)
					navigate(props.fallback_to, {replace : true})
				return
			}
			else{
				if(props.redirect)
					navigate(props.redirect, {replace : true})
			}
			
			
		})
	
		return () => {
			// Unsubscribe the listener when the component unmounts.
			unsubscribe();
		}
	},[])

	return {
		user,
		setUser,
	}
}

export default useFirebaseAuth