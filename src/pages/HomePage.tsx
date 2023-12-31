/* eslint-disable react-refresh/only-export-components */
import { Typography, Container, Button } from '@mui/material'
import withAuthGuard from '../hocs/with-auth-guard'
import { MetaHead } from '../components'
import { useNavigate } from 'react-router-dom'
import { AppDispatch } from '../context'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../context/actions/authActions'

const HomePage = () => {
	const navigate = useNavigate()

	const dispatch: AppDispatch = useDispatch()

	const logoutHandler = () => {
		dispatch(logoutUser())
		navigate("/login")
	}

	return (
		<>
			<MetaHead title="Home" name="Home Page" content='Welcome to the shopping cart!' />
			<Container sx={{ py: 2 }}>
				<Typography variant="h4">Working on it..</Typography>
				<Button
					variant="contained"
					sx={{ textTransform: "capitalize", mt: 2 }}
					onClick={logoutHandler}
				>
					Logout
				</Button>
			</Container>
		</>
	)
}

export default withAuthGuard(HomePage)