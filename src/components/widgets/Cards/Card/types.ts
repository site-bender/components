import { HTMLAttributes, LinkProps, PictureProps, Override } from "../../../../types"


export type CardProps = Override<
	HTMLAttributes,
	{
		description?: Partial<HTMLAttributes> | undefined
		heading?: Partial<HTMLAttributes> | undefined
		href?: string | undefined
		isInvertible?: boolean | undefined
		link?: Partial<LinkProps> | undefined
		picture?: PictureProps | undefined
		title?: string | undefined
		type?: string | undefined
		wrapper?: Partial<HTMLAttributes> | undefined
	}
>
