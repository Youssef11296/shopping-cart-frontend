import { Box, Typography } from '@mui/material'
import { Link } from '@mui/material'
import { BRAND } from '../../utils/constants'

const MainFooter = () => {
	return (
		<Box>
			<Typography variant="body1">Founded and Developed By <Link href={BRAND.owner.linkedin} target="_blank">{BRAND.owner.name}</Link></Typography>
		</Box>
	)
}

export default MainFooter