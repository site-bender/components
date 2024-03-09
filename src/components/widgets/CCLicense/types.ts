import { HTMLAttributes, LinkProps, Override } from "../../../types"

export type CCLicenseProps = Override<
	HTMLAttributes,
	{
		byAttribution?: boolean | undefined
		fill?: string | undefined
		link?: Partial<LinkProps> | undefined
		noDerivatives?: boolean | undefined
		nonCommercial?: boolean | undefined
		shareAlike?: boolean | undefined
		size?: string | undefined
		stroke?: string | undefined
	}
>

export type CCSvgProps = {
	fill: string
	license?: string | undefined
	size: string
	stroke: string
}

export type LicenseAttributes = {
	byAttribution?: boolean | undefined
	noDerivatives?: boolean | undefined
	nonCommercial?: boolean | undefined
	shareAlike?: boolean | undefined
}

export type LicenseData = {
	href: string
	license: string
}
