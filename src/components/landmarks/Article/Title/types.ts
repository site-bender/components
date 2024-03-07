import type { HTMLAttributes, Override } from "../../../../types"

export type TitleProps = Override<
	HTMLAttributes,
	{
		subtitle: string
	}
>
