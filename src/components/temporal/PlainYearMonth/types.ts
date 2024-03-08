import type { Temporal } from "temporal-polyfill"
import type {
	DateTimeFormatOptions,
	Formattable,
	HTMLAttributes,
	Override,
} from "../../../types"

export type PlainYearMonthProps = Override<
	HTMLAttributes,
	{
		calendar?: Temporal.CalendarLike | undefined
		era?: string | undefined
		eraYear?: string | undefined
		locales?: string | Array<string> | undefined
		month?: number | string | undefined
		monthCode?: string | undefined
		options?: DateTimeFormatOptions | undefined
		plainYearMonth?: string | Temporal.PlainYearMonthLike | undefined
		year?: number | string | undefined
	} & Formattable
>
