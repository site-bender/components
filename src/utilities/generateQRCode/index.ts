import type { QRCodeOptions, QRCodeSegment } from "qrcode"

import QRCode from "qrcode"

export default async function generateQRCode(
	content: string | Array<QRCodeSegment>,
	options: QRCodeOptions = {},
): Promise<string> {
	const opts = {
		scale: 8,
		type: "svg" as "svg" | "utf8" | undefined,
		width: 360,
		...options,
	}

	try {
		return await QRCode.toString(content, opts)
	} catch (err: unknown) {
		console.log("Uh oh!", err)
		return new Promise(() => (err as Error).message)
	}
}
