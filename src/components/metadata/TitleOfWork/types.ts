import type {
	Formattable,
	HTMLAttributes,
	LinkProps,
	Override,
} from "../../../types"

export type TitleOfWorkProps = Override<
	HTMLAttributes,
	{
		link?: LinkProps | undefined
		title?: string | undefined
		type?: string | undefined
	} & Formattable
>
