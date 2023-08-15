import { Box, Button, Container, Typography } from '@mui/material'
import { useState } from 'react'
import { LoginForm, MetaHead, RegisterForm } from '../components'

const LoginPage = () => {
	const [isLoginForm, setIsLoginForm] = useState<boolean>(true)

	return (
		<>
			<MetaHead title="Login" name="Login Page" content='Please, login to your account' />
			<Container sx={{ py: 4 }}>
				{isLoginForm ? <LoginForm setIsLoginForm={setIsLoginForm} /> : <RegisterForm setIsLoginForm={setIsLoginForm} />}
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