import type { Temporal } from "temporal-polyfill"
import type {
	DateTimeFormatOptions,
	Formattable,
	HTMLAttributes,
	Override,
} from "../../../types"

export type PlainDateProps = Override<
	HTMLAttributes,
	{
		calendar?: Temporal.CalendarLike | undefined
		day?: number | undefined
		era?: string | undefined
		eraYear?: number | undefined
		locales?: string | Array<string> | undefined
		month?: number | undefined
		monthCode?: string | undefined
		options?: DateTimeFormatOptions | undefined
		plainDate?: string | Temporal.PlainDateLike | undefined
		year?: number | undefined
	} & Formattable
>
