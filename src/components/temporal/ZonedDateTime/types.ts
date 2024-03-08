import type { Temporal } from "temporal-polyfill"
import type {
	DateTimeFormatOptions,
	Formattable,
	HTMLAttributes,
	Override,
} from "../../../types"

export type ZonedDateTimeProps = Override<
	HTMLAttributes,
	{
		calendar?: Temporal.CalendarLike | undefined
		day?: number | string | undefined
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
		offset?: string
		options?: DateTimeFormatOptions | undefined
		second?: number | string | undefined
		timeZone?: string | Temporal.TimeZoneLike | undefined
		year?: number | string | undefined
		zonedDateTime?: string | Temporal.ZonedDateTimeLike
	} & Formattable
>
