import { HTMLAttributes, Override } from "../../../types"

export type CardsProps = Override<
	HTMLAttributes,
	{
		content?: HTMLAttributes | undefined
		type?: string | undefined
	}
>
