import { HTMLAttributes, MDXInstance, Override } from "../../../types"


export type CodeBlockProps<T> = Override<
	HTMLAttributes,
	{
		caption?: string | undefined
		hideClass?: string | undefined
		index?: number | undefined
		isIndexed?: boolean | undefined
		legend?: Partial<HTMLAttributes> | undefined
		lineNumberingWidth?: number | undefined
		snippet?: MDXInstance<T> | undefined
		type?: string | undefined
	}
>
