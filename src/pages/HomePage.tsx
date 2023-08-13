/* eslint-disable react-refresh/only-export-components */
import { Typography, Container } from '@mui/material'
import withAuthGuard from '../hocs/with-auth-guard'

const HomePage = () => {
	return (
		<Container>
			<Typography variant="h5">Welcome to the Shopping Cart!</Typography>
		</Container>
	)
}

export default withAuthGuard(HomePage)