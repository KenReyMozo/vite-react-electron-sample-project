import BulletList from "@/components/bullet-list/BulletList"
import SignInApi from "@/firebase-manager/auth/AuthApi"
import useFirebaseAuth from "@/firebase-manager/auth/AuthHook"
import AuthProvider from "@/firebase-manager/auth/AuthProvider"
import { clearLogin, editLogin } from "@/redux/login-reducer"
import { selectLogin } from "@/redux/login-selector"
import { Button, Divider,TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const LoginPage : React.FC = () => {

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { user } = useFirebaseAuth({ redirect : '/user/home', fallback_to : '/'})

	const _login = useSelector(selectLogin);

	const onChangeLogin = (e: RCE<HTMLInputElement>) => {
		const { name, value } = e.target;
		setLoginErrors([]);
		dispatch(editLogin({[name]: value}));
	}

	const [isSignUp, setIsSignUp] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const [loginErrors, setLoginErrors] = useState<string[]>([])

	const ShowNotification = () => {
		new Notification("My Notification", {
			body: "This is a sample notification body",
		})
	}


	const onSubmitLoginForm = async (e : React.FormEvent) => {
		e.preventDefault()
		setLoginErrors([])
		setIsLoading(true)
		const credentials = await SignInApi(_login)
		setIsLoading(false)
		if(typeof(credentials) === 'string'){
			setLoginErrors([credentials])
			return;
		}
		ShowNotification()
		dispatch(clearLogin())
		navigate('/user/home')
	}

	return (
		<div className="page flex flex-col items-center justify-center">
			{!isSignUp &&
			<form className={`flex flex-col gap-4 swing_in_top_fwd min-w-[20rem] bg-gray-200 p-4 rounded-lg`}
				onSubmit={onSubmitLoginForm}>
				<Typography variant='h6' className="text-center">
					Login
				</Typography>
				<Divider/>
				<TextField
					size='small'
					label="Email"
					variant="outlined"
					value={_login.email}
					disabled={user === undefined || isLoading}
					placeholder="admin@email.com"
					name="email"
					onChange={onChangeLogin}
					error={!_login.email}
					/>
				<TextField
					size='small'
					label="Password"
					variant="outlined"
					value={_login.password}
					disabled={user === undefined || isLoading}
					placeholder="***********"
					name="password"
					type='password'
					onChange={onChangeLogin}
					error={!_login.password}
					/>
				<BulletList
					items={loginErrors}
					hide={false}/>
				<div className="grid gap-6 mb-6 md:grid-cols-2">
					<Button type="submit"
						variant='contained'
						disabled={user === undefined || isLoading}>
						Login
					</Button>
					<Button
						disabled={user === undefined || isLoading}
						variant='outlined'
						onClick={()=>setIsSignUp(prev => !prev)}>
						Sign Up
					</Button>
				</div>
			</form>
			}
			{isSignUp && 
			<form className={`flex flex-col gap-4 swing_in_top_fwd min-w-[20rem] bg-gray-200 p-4 rounded-lg`}
				onSubmit={onSubmitLoginForm}>
				<Typography variant='h6' className="text-center">
					Sign Up
				</Typography>
				<Divider/>
				<TextField
					size='small'
					label="Email"
					variant="outlined"
					value={_login.email}
					disabled={user === undefined || isLoading}
					placeholder="admin@email.com"
					name="email"
					onChange={onChangeLogin}
					error={!_login.email}
					/>
				<TextField
					size='small'
					label="Password"
					variant="outlined"
					value={_login.password}
					disabled={user === undefined || isLoading}
					placeholder="***********"
					name="password"
					type='password'
					onChange={onChangeLogin}
					error={!_login.password}
					/>
				<div className="grid gap-6 mb-6 md:grid-cols-2 mt-4">
					<Button type="submit"
						variant='contained'
						disabled={user === undefined || isLoading}>
						Sign Up
					</Button>
					<Button
						variant='outlined'
						disabled={user === undefined || isLoading}
						onClick={()=>setIsSignUp(prev => !prev)}>
						Login
					</Button>
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
