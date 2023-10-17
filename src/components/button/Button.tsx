import React from "react"

type ButtonType = React.ComponentProps<"button">

const Button = (props : ButtonType) => {

	const {
		type,
		children,
		className,
		...cleanProps
	} = props

	return (
		<button
			type={type ?? "button"}
			{...cleanProps}
			className={`${className ?? ""} py-2.5 px-5 focus:ring-4 font-medium rounded-lg focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300  text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800`}>
			{children}
		</button>
	)

}

const Alternative = (props : ButtonType) => {

	return (
		<Button
			{...props}
			className={`${props.className ?? ""} focus:ring-4 font-medium rounded-lg focus:outline-none`}/>
	)
}

const Dark = (props : ButtonType) => {

	return (
		<Button
			{...props}
			className={`${props.className ?? ""} text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`}/>
	)
}

const Light = (props : ButtonType) => {

	return (
		<Button
			{...props}
			className={`${props.className ?? ""} text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}/>
	)
}

const Green = (props : ButtonType) => {


	return (
		<Button
			{...props}
			className={`${props.className ?? ""}text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 text-sm dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}/>
	)
}

const Red = (props : ButtonType) => {

	return (
		<Button
			{...props}
			className={`${props.className ?? ""} text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 text-sm dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}/>
	)
}

const Yellow = (props : ButtonType) => {

	return (
		<Button
			
			{...props}
			className={`${props.className ?? ""} text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 text-sm dark:focus:ring-yellow-900`}/>
	)
}

const Purple = (props : ButtonType) => {

	return (
		<Button
			{...props}
			className={`${props.className ?? ""} text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 text-sm dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`}/>
	)
}

export default Object.assign(Button, {
	Alternative,
	Dark,
	Light,
	Green,
	Red,
	Yellow,
	Purple,
})