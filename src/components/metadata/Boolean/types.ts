import { HTMLAttributes, Override } from "../../../types"


export type BooleanProps = Override<
	HTMLAttributes,
	{
		labelFalse?: string | undefined
		labelTrue: string
		property?: string | undefined
		type?: string | undefined
		value: boolean
	}
>
