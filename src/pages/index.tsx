import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/Utils/seo"
import Posts from "../components/Posts/posts"

export default function IndexPage(props) {
	return (
		<Layout>
			{/* siteTitle specifies that the title will the siteTitle alone */}
			<SEO title="siteTitle" />
			<Posts />
		</Layout>
	)
}
