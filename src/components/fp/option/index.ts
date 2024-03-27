export type Option<A> = Some<A> | None

export interface Some<A> {
	readonly _tag: "Some"
	readonly value: A
}

export interface None {
	readonly _tag: "None"
}

export const none: Option<never> = { _tag: "None" }

export const some = <A>(x: A): Option<A> => ({ _tag: "Some", value: x })

export const isNone = <A>(x: Option<A>): x is None => x._tag === "None"
