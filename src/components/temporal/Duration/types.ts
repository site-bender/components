import type { Temporal } from "temporal-polyfill"
import type { Formattable, HTMLAttributes, Override } from "../../../types"

export type DurationProps = Override<
	HTMLAttributes,
	{
		duration: string | Temporal.Duration
	} & Formattable
>
