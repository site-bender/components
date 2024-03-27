import { HTMLAttributes, Override } from "../../../types"

export type FigureProps = Override<
	HTMLAttributes,
	{
		caption?: string | undefined
		figcaption?: Partial<HTMLAttributes> | undefined
		index?: number | undefined
		isIndexed?: boolean | undefined
	}
>
