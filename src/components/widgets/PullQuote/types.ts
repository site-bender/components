import { HTMLAttributes, Override } from "src/types"

export type PullQuoteProps = Override<
	HTMLAttributes,
	{
		author?: string | undefined
		property?: string | undefined
		type?: "Person" | "Organization" | "Thing" | undefined
	}
>
