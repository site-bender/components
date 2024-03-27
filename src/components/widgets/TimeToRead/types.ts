import type { HTMLAttributes, Override } from "../../../types"

export type TimeToReadProps = Override<
	HTMLAttributes,
	{
		header?: HTMLAttributes | undefined
		hideClass?: string | undefined
		id?: string | undefined
		readability?: number | undefined
		timeRequired?: string | undefined
		title?: string | undefined
		wordCount?: number | undefined
	}
>
