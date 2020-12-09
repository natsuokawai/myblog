import { Link } from "gatsby"
import React from "react"
import Links from "../Links/links"

import "./header.scss"

const Header = props => (
	<header className={`Header ${props.className}`}>
		<Link to="/" className="Header__logo">
			<h1 className="Header__logo__text">
				{!props.siteTitle || props.siteTitle === ""
					? `Undefined`
					: props.siteTitle}
			</h1>
		</Link>
		<Links className="Header__Links" />
	</header>
)

export default Header
