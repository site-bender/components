import type { Temporal } from "temporal-polyfill"
import type { Formattable, HTMLAttributes, Override } from "../../../types"

export type InstantProps = Override<
	HTMLAttributes,
	{
		instant: string | Temporal.Instant
		locales?: string | Array<string> | undefined
		options?: Intl.DateTimeFormatOptions | undefined
	} & Formattable
>
