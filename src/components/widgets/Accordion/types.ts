import type { HTMLAttributes } from "../../../types"

export type AccordionProps = HTMLAttributes & {
	content?: Partial<HTMLAttributes> | undefined
	open?: boolean | undefined
	summary?: Partial<HTMLAttributes> | undefined
	title?: string | undefined
}
