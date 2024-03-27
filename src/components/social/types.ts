import type { HTMLAttributes, Override } from "../../types"

export type IconProps = {
	fill?: string | undefined
	height?: string | undefined
	innerFill?: string | undefined
	width?: number | string | undefined
}

export type SocialLinkProps = Override<
	HTMLAttributes,
	{
		fill?: string | undefined
		height?: string | undefined
		hideClass?: string | undefined
		hoverFill?: string | undefined
		href?: string | undefined
		innerFill?: string | undefined
		title: string
		url?: string | undefined
		width?: string | undefined
	}
>
