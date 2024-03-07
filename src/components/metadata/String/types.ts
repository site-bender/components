import { Formattable, HTMLAttributes, LinkProps, Override } from "../../../types"


export type StringProps = Override<
	HTMLAttributes,
	{
		link?: Partial<LinkProps> | undefined
		property?: string | undefined
		type?: "Text" | "CssSelectorType" | "PronounceableText" | "XPathType" | undefined
		value?: string | undefined
	} & Formattable
>
