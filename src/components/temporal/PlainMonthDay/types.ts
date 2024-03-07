import type { Temporal } from "temporal-polyfill"
import type {
	DateTimeFormatOptions,
	Formattable,
	HTMLAttributes,
	Override,
} from "../../../types"

export type PlainMonthDayProps = Override<
	HTMLAttributes,
	{
		calendar?: Temporal.CalendarLike | undefined
		day?: number | undefined
		era?: string | undefined
		eraYear?: string | undefined
		locales?: string | Array<string> | undefined
		month?: number | string | undefined
		monthCode?: string | undefined
		options?: DateTimeFormatOptions | undefined
		plainMonthDay?: string | Temporal.PlainMonthDayLike | undefined
		property?: string | undefined
		year?: number | string | undefined
	} & Formattable
>
