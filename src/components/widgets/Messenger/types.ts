import type { HTMLAttributes, Override } from "../../../types"

export type MessengerProps = Override<
	HTMLAttributes,
	{
		heading?: HTMLAttributes | undefined
		hideClass?: string | undefined
		hideTitle?: boolean | undefined
		type?: "danger" | "warning" | "success" | "info" | undefined
	}
>
