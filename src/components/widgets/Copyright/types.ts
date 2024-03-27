import { HTMLAttributes, Override } from "../../../types"
import type { Organization, Person } from "../../../types/schema.org"

export type CopyrightProps = Override<
	HTMLAttributes,
	{
		copyrightHolder: string | Organization | Person
		copyrightNotice?: string | undefined
		copyrightYear: string | number
		name?: string | boolean
		useSymbol?: boolean | undefined
	}
>
