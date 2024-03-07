import { Formattable, HTMLAttributes, LinkProps, Override } from "../../../types"


export type TelephoneProps = Override<
	HTMLAttributes,
	{
		link?: Partial<LinkProps> | undefined
		property?: string | undefined
		tel?: string | undefined
		type?: "Text" | undefined
		useTel?: boolean | undefined
	} & Formattable
>
