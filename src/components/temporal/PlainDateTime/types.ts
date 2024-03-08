import type { Temporal } from "temporal-polyfill"
import type {
	DateTimeFormatOptions,
	Formattable,
	HTMLAttributes,
	Override,
} from "../../../types"

export type PlainDateTimeProps = Override<
	HTMLAttributes,
	{
		calendar?: Temporal.CalendarLike | undefined
		day?: number | undefined
		era?: string | undefined
		eraYear?: string | undefined
		hour?: number | string | undefined
		locales?: string | Array<string> | undefined
		microsecond?: number | string | undefined
		millisecond?: number | string | undefined
		minute?: number | string | undefined
		month?: number | string | undefined
		monthCode?: string | undefined
		nanosecond?: number | string | undefined
		options?: DateTimeFormatOptions | undefined
		plainDateTime?: string | Temporal.PlainDateTimeLike | undefined
		second?: number | string | undefined
		year?: number | string | undefined
	} & Formattable
>
