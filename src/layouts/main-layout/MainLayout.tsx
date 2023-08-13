/* eslint-disable @typescript-eslint/no-explicit-any */
import MainFooter from './MainFooter'
import MainHeader from './MainHeader'

const MainLayout = (props: any) => {
	const { children } = props

	return (
		<>
			<MainHeader />
			<main>
				{children}
			</main>
			<MainFooter />
		</>
	)
}

export default MainLayout