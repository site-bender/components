import { AstroPage, LinkProps } from "../../types"

export default function getTrail(
	pathname: string,
	pages: Array<AstroPage>,
	includeCurrentPage?: boolean,
): Array<LinkProps> {
	const children = pathname
		.replace(/^\//, "")
		.split("/")
		.reduce((acc, seg) => {
			const path = acc.at(-1) ? `${acc.at(-1)}/${seg}` : `/${seg}`

			if (path !== "/") {
				acc.push(path)
			}

			return acc
		}, [] as Array<string>)
		.map(href => {
			const { label, title } =
				pages.find(({ url }) => url === href)?.metadata || {}
			return {
				href,
				label: label || title,
			}
		})

	const kids = includeCurrentPage ? children : children.slice(0, -1)

	return [{ href: "/", label: "Home" }, ...kids]
}
