import type { AstroPage, HTMLAttributes, Override } from "../../../types"

export type MenuProps = Override<
	HTMLAttributes,
	{
		links: Array<string>
		list?: HTMLAttributes | undefined
		listItems?: HTMLAttributes | undefined
		pages: Array<AstroPage>
		depth?: number | undefined
	}
>
