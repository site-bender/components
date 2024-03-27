import type { QRCodeOptions, QRCodeSegment } from "qrcode"

import QRCode from "qrcode"

type GenerateQRCode = (
	c: string | Array<QRCodeSegment>,
) => (o?: QRCodeOptions) => Promise<string>
const generateQRCode: GenerateQRCode =
	content =>
	async (options = {}) => {
		const opts = {
			scale: 8,
			type: "svg" as "svg" | "utf8" | undefined,
			width: 360,
			...options,
		}

		try {
			return await QRCode.toString(content, opts)
		} catch (err: unknown) {
			console.error(err)
			return new Promise(() => (err as Error).message)
		}
	}

export default generateQRCode
