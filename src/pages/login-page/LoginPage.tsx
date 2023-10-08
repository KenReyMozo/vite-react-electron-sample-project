import React from "react"

const LoginPage : React.FC = () => {

	const ShowNotification = () => {
		new Notification("My Notification", {
			body: "This is a sample notification body",
		})

	}

	return (
		<div>
			<input/>

			<button onClick={ShowNotification}>
				Show
			</button>
		</div>
	)
}

export default LoginPage
