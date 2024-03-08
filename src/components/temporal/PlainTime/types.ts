import type { Temporal } from "temporal-polyfill"
import type {
	DateTimeFormatOptions,
	Formattable,
	HTMLAttributes,
	Override,
} from "../../../types"

export type PlainTimeProps = Override<
	HTMLAttributes,
	{
		calendar?: Temporal.CalendarLike | undefined
		hour?: number | string | undefined
		locales?: string | Array<string> | undefined
		microsecond?: number | string | undefined
		millisecond?: number | string | undefined
		minute?: number | string | undefined
		nanosecond?: number | string | undefined
		options?: DateTimeFormatOptions | undefined
		plainTime?: string | Temporal.PlainTimeLike | undefined
		second?: number | string | undefined
	} & Formattable
>
