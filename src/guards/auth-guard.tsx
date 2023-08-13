/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthGuard = (props: any) => {
	const { children } = props

	const navigate = useNavigate()

	const token = window.localStorage.getItem("token")

	useEffect(() => {
		if (!token) {
			navigate("/login")
		}
	}, [token, navigate])

	return children
}

export default AuthGuard