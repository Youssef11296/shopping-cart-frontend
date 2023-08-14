import { FC } from 'react'
import { Helmet } from 'react-helmet'
import { BRAND } from '../../utils/constants'

interface Props {
	title: string,
	content: string,
	name: string
}

const MetaHead: FC<Props> = ({ title, name, content }) => {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<meta name={name} content={content} />
			<title>{BRAND.name} | {title}</title>
		</Helmet>
	)
}

export default MetaHead