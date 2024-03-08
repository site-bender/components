import { Formattable, HTMLAttributes, LinkProps, Override } from "../../../types"


export type StringProps = Override<
	HTMLAttributes,
	{
		link?: Partial<LinkProps> | undefined
		type?: "Text" | "CssSelectorType" | "PronounceableText" | "XPathType" | undefined
		value?: string | undefined
	} & Formattable
>
