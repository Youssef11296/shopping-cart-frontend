/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthGuard from "../guards/auth-guard"

const withAuthGuard = (Component: any) => (props: any) => {
	return (
		<AuthGuard>
			<Component {...props} />
		</AuthGuard>
	)
}

export default withAuthGuard