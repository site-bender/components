import {
	Formattable,
	HTMLAttributes,
	LinkProps,
	Override,
} from "../../../types"

export type UrlProps = Override<
	HTMLAttributes,
	{
		link?: Partial<LinkProps> | undefined
		type?: "URL" | undefined
		url?: string | undefined
	} & Formattable
>
