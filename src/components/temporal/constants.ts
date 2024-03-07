import type { DateTimeFormatOptions } from "../../types"
import { TIME_ZONE } from "../constants"

export const CALENDAR = {
	BUDDHIST: "buddhist",
	CHINESE: "chinese",
	COPTIC: "coptic",
	DANGI: "dangi",
	ETHIOPIC: "ethiopic",
	GREGORY: "gregory",
	HEBREW: "hebrew",
	INDIAN: "indian",
	ISLAMIC: "islamic",
	ISO8601: "iso8601",
	JAPANESE: "japanese",
	PERSIAN: "persian",
	ROC: "roc",
}

export const DEFAULT_CALENDAR = CALENDAR.ISO8601

export const DEFAULT_DATE_OPTIONS: Partial<DateTimeFormatOptions> = {
	// weekday: "long",
	year: "numeric",
	month: "short",
	day: "numeric",
	formatMatcher: "basic",
}

export const DEFAULT_DATE_TIME_OPTIONS: Partial<DateTimeFormatOptions> = {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric",
	hour: "numeric",
	minute: "2-digit",
	hour12: false,
	hourCycle: "h23",
	formatMatcher: "basic",
}

export const DEFAULT_MONTH_DAY_OPTIONS: Partial<DateTimeFormatOptions> = {
	month: "long",
	day: "numeric",
	formatMatcher: "basic",
}

export const DEFAULT_TIME_OPTIONS: Partial<DateTimeFormatOptions> = {
	hour: "numeric",
	minute: "2-digit",
	hour12: false,
	hourCycle: "h23",
	formatMatcher: "basic",
}

export const DEFAULT_TIME_ZONE: keyof typeof TIME_ZONE = "Europe/London"

export const DEFAULT_YEAR_MONTH_OPTIONS: Partial<DateTimeFormatOptions> = {
	month: "long",
	year: "numeric",
	formatMatcher: "basic",
}

export const DEFAULT_ZONED_DATE_TIME_OPTIONS: Partial<DateTimeFormatOptions> = {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric",
	hour: "numeric",
	minute: "2-digit",
	hour12: false,
	hourCycle: "h23",
	formatMatcher: "basic",
	timeZoneName: "short",
}
