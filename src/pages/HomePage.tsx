/* eslint-disable react-refresh/only-export-components */
import { Typography, Container } from '@mui/material'
import withAuthGuard from '../hocs/with-auth-guard'
import { MetaHead } from '../components'

const HomePage = () => {
	return (
		<>
			<MetaHead title="Home" name="Home Page" content='Welcome to the shopping cart!' />
			<Container>
				<Typography variant="h5">Working on it..</Typography>
			</Container>
		</>
	)
}

export default withAuthGuard(HomePage)