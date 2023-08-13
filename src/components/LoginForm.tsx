/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from 'formik';
import { TextField, Button, Grid, Typography, Box, Card } from '@mui/material'
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
	const navigate = useNavigate()

	const formik: any = useFormik({
		initialValues: {
			email: '',
			password: '',
			submit: null
		},
		validationSchema: Yup.object({
			email: Yup
				.string()
				.email('Please, input a valid email')
				.required('Email is required'),
			password: Yup
				.string()
				.max(255)
				.required('Password is required')
		}),
		onSubmit: async (_values, helpers) => {
			try {
				window.localStorage.setItem("token", "sometoken123")
				navigate("/")
				toast.success("Successfulyy, logged in")
			} catch (err: any) {
				helpers.setStatus({ success: false });
				helpers.setErrors({ submit: err.response.data.message });
				helpers.setSubmitting(false);
			}
		}
	})

	return (
		<Card sx={{ padding: "2rem", width: 400, margin: "auto" }}>
			<form
				noValidate
				onSubmit={formik.handleSubmit}
			>
				<>
					<Typography textAlign="center" mb={4} variant="h4">Login</Typography>
					<>
						<Grid display="flex" flexDirection="column"
							maxWidth={500}
							margin="auto"
						>
							<Box mb={3} display="flex" flexDirection="column">
								<Typography>Email</Typography>
								<TextField
									error={!!(formik.touched.email && formik.errors.email)}
									fullWidth
									helperText={formik.touched.email && formik.errors.email}
									name="email"
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
									type="email"
									value={formik.values.email}
								/>
							</Box>
							<Box mb={3} display="flex" flexDirection="column">
								<Typography>Passowrd</Typography>
								<TextField
									error={!!(formik.touched.password && formik.errors.password)}
									fullWidth
									helperText={formik.touched.password && formik.errors.password}
									name="password"
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
									type="password"
									value={formik.values.password}

								/>
							</Box>
							<Button
								variant="contained"
								type="submit"
								sx={{ textTransform: "capitalize", width: "fit-content", margin: 'auto' }}
							>
								Submit
							</Button>
						</Grid>
					</>
				</>
			</form>
		</Card>
	)
}

export default LoginForm