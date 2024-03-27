import type { HTMLAttributes, Override } from "../../../types"

export type SkipLinkProps = Override<
	HTMLAttributes,
	{
		href?: string | undefined
		label?: string | undefined
	}
>
