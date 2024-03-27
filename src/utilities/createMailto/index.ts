import type { MailtoOptions } from "./types"

import compact from "../compact"

type CreateMailto = (e: string) => (o?: MailtoOptions) => string
const createMailto: CreateMailto =
	email =>
	(options = {}) => {
		const { bcc, cc, subject, replyTo } = options

		const opts = compact([
			subject ? `subject=${subject}` : undefined,
			bcc ? `bcc=${bcc.join(",")}` : undefined,
			cc ? `cc=${cc.join(",")}` : undefined,
			replyTo ? `reply-to=${replyTo}` : undefined,
		])

		return `mailto:${email}${opts.length ? `?${opts.join("&")}` : ""}`
	}

export default createMailto
