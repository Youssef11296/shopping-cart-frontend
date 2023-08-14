import { Box, Button, Container, Typography } from '@mui/material'
import { useState } from 'react'
import { LoginForm, MetaHead, RegisterForm } from '../components'

const LoginPage = () => {
	const [isLoginForm, setIsLoginForm] = useState<boolean>(true)

	return (
		<>
			<MetaHead title="Home" name="Home Page" content='Welcome to the shopping cart!' />
			<Container sx={{ py: 4 }}>
				{isLoginForm ? <LoginForm /> : <RegisterForm />}
				<Box sx={{
					width: "fit-content",
					margin: "1rem auto 0"
				}}>
					{isLoginForm ?
						<Typography>
							Not have an account?
							<Button
								onClick={() => setIsLoginForm(!isLoginForm)}
								sx={{ textTransform: "capitalize" }}
							>
								Register
							</Button>
						</Typography> :
						<Typography>
							Already have an account?
							<Button
								onClick={() => setIsLoginForm(!isLoginForm)}
								sx={{ textTransform: "capitalize" }}
							>
								Login
							</Button>
						</Typography>
					}
				</Box>
			</Container>
		</>
	)
}

export default LoginPage