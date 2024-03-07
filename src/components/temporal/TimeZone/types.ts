import type { Temporal } from "temporal-polyfill"
import { Formattable, HTMLAttributes } from "../../../types"

export type TimeZoneProps = HTMLAttributes & {
	display?: "name" | "offset" | "both" | undefined
	localTime?: string | Temporal.Instant | undefined
	timeZone: string | Temporal.TimeZone | Temporal.ZonedDateTime
} & Formattable
