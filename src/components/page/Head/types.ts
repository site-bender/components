import type { HTMLAttributes, Metadata, Override } from "../../../types"

export type HeadProps = Override<
	HTMLAttributes,
	{
		metadata?: Metadata | undefined
		siteTitle?: string | undefined
	}
>
