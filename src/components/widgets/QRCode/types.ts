import type { HTMLAttributes, Override } from "../../../types"

export type QROptions = {
	color: {
		dark?: string | undefined
		light?: string | undefined
	}
	errorCorrectionLevel?:
		| "H"
		| "high"
		| "L"
		| "low"
		| "M"
		| "medium"
		| "Q"
		| "quartile"
		| undefined
	margin?: number | undefined
	maskPattern?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined
	size?: number | undefined
	version?: number | undefined
	width?: number | undefined
}

export type QRCodeProps = Override<
	HTMLAttributes,
	{
		canonicalSite: string
		content?: string | undefined
		dark?: string | undefined
		isPrintOnly?: boolean | undefined
		light?: string | undefined
		message?: string | undefined
		qr?: QROptions | undefined
		size?: number | undefined
		type?: "png" | "svg" | "utf8" | undefined
		width?: number | undefined
	}
>
