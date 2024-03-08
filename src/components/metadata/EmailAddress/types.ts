import { Formattable, HTMLAttributes, LinkProps, Override } from "../../../types"
import { MailtoOptions } from "../../../utilities/createMailto/types"


export type EmailProps = Override<
	HTMLAttributes,
	{
		email?: string | undefined
		link?: Partial<LinkProps> | undefined
		mailtoOptions?: MailtoOptions | undefined
		type?: "ContactPoint" | "Organization" | "Person" | undefined
		useMailto?: boolean | undefined
	} & Formattable
>
