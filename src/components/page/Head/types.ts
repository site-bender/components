import type { HTMLAttributes, Override } from "../../../types"

export type HeadProps = Override<
	HTMLAttributes,
	{
		config?: Record<string, unknown>
	}
>
