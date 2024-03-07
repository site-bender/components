import type { HTMLAttributes } from "../../../types"
import type { Article } from "../../../types/schema.org"

export type ArticleProps = HTMLAttributes & {
	properties?: Article | undefined
}
