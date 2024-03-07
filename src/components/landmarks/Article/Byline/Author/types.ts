import type { HTMLAttributes, Override, Person } from "../../../../../types"

export type AuthorProps = Override<
	HTMLAttributes,
	{
		ariaLabel?: string | undefined
		person: Person
	}
>
