import type {
	AriaRole,
	AstroPage,
	HTMLAttributes,
	LinkProps,
	Override,
} from "../../../types"

export type TrailProps = Override<
	HTMLAttributes,
	{
		fallback?: LinkProps | undefined
		fullWidth?: boolean | undefined
		hideClass?: string | undefined
		includeCurrentPage?: boolean | undefined
		pages?: Array<AstroPage> | undefined
		role?: AriaRole | undefined
	}
>
