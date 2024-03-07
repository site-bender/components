import type { Temporal } from "temporal-polyfill"
import type { HTMLAttributes, Override, Person } from "../../../../types"

export type BylineProps = Override<
	HTMLAttributes,
	{
		ariaLabel?: string | undefined
		authors: Person | Array<Person>
		datePublished?: string | Temporal.PlainDate | undefined
	}
>
