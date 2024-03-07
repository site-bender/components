import type { Temporal } from "temporal-polyfill"
import type { Formattable, HTMLAttributes, Override } from "../../../types"

export type YearWeekProps = Override<
	HTMLAttributes,
	{
		date?: Temporal.PlainDateLike | undefined
		week?: number | string | undefined
		year?: number | string | undefined
	} & Formattable
>
