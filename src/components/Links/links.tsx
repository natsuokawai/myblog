import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./links.scss"

import { FaGithub, FaTwitter } from "react-icons/fa"
import { GrGatsbyjs } from "react-icons/gr"

// Edit these to add or remove social media icons.
const socialMediaAccounts = [
	{ id: 1, icon: FaGithub, url: "http://github.com/natsuokawai" },
	{
		id: 2,
		icon: FaTwitter,
		url: "http://twitter.com/natsuokawai",
	},
]

const Links = ({ className }) => (
	<div className={`Links ${className}`}>
		{/* <Link to="/" className="Links__item">
			Posts
		</Link>
		<Link to="/about" className="Links__item">
			About
		</Link> */}
		{socialMediaAccounts.map(account => (
			<a
				href={account.url}
				key={account.id}
				className={`${className}__container`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<account.icon className={`Links__icon ${className}__icon`} />
			</a>
		))}
	</div>
)

export default Links
