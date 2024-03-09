import { HTMLAttributes, LinkProps, Override } from "../../../types"


export type LogoProps = Override<
	HTMLAttributes,
	{
		link?: LinkProps | undefined
		logo?: string | undefined
	}
>
