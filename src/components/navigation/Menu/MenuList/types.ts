import type { AstroPage, HTMLAttributes, Override } from "../../../../types"

export type MenuListProps = Override<
	HTMLAttributes,
	{
		links: Array<string>
		listItems?: HTMLAttributes | undefined
		pages: Array<AstroPage>
		prefix?: string | undefined
		depth?: number | undefined
	}
>
