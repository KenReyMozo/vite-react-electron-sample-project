import Button from "@/components/button/Button"
import Input from "@/components/input/Input"
import useFirebaseAuth from "@/firebase-manager/auth/AuthHook"
import AuthProvider from "@/firebase-manager/auth/AuthProvider"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginPage : React.FC = () => {

	const navigate = useNavigate()
	const { user } = useFirebaseAuth({ redirect : '/user/home', fallback_to : '/'})

	const ShowNotification = () => {
		new Notification("My Notification", {
			body: "This is a sample notification body",
		})
	}

	const [isSignUp, setIsSignUp] = useState(false)

	const onSubmitLoginForm = async (e : React.FormEvent) => {
		e.preventDefault()
		ShowNotification()
		navigate('/user/home')
	}
	return (
		<div className="page flex flex-col items-center justify-center">
			{!isSignUp &&
			<form className={`swing_in_top_fwd min-w-[20rem] bg-gray-200 p-4 rounded-lg`}
				onSubmit={onSubmitLoginForm}>
				<Input
					label="Username"
					inputMode="text"
					placeholder="username"
					disabled={user === undefined}
					required/>
				<Input
					label="Password"
					inputMode="text"
					placeholder="************"
					disabled={user === undefined}
					type="password"
					required/>
				<div className="grid gap-6 mb-6 md:grid-cols-2 mt-4">
					<Button.Dark type="submit">
						Login
					</Button.Dark>
					<Button.Alternative
						onClick={()=>setIsSignUp(prev => !prev)}>
						Sign Up
					</Button.Alternative>
				</div>
			</form>
			}
			{isSignUp && 
			<form className={`swing_in_top_fwd min-w-[20rem] bg-gray-200 p-4 rounded-lg`}
				onSubmit={onSubmitLoginForm}>
				<Input
					label="Email"
					type="email"
					inputMode="email"
					disabled={user === undefined}
					placeholder="sample@email.com"
					required/>
				<Input
					label="Password"
					inputMode="text"
					placeholder="************"
					disabled={user === undefined}
					type="password"
					required/>
				<div className="grid gap-6 mb-6 md:grid-cols-2 mt-4">
					<Button.Alternative type="submit"
						disabled={user === undefined}>
						Sign Up
					</Button.Alternative>
					<Button.Dark
						disabled={user === undefined}
						onClick={()=>setIsSignUp(prev => !prev)}>
						Login
					</Button.Dark>
				</div>
			</form>
			}
			<div className='my-2'>
				<AuthProvider.Google onAuth={()=>{}}/>
			</div>
		</div>
	)
}

export default LoginPage
