export type Either<E, A> = Left<E> | Right<A>

export interface Left<E> {
	readonly _tag: "Left"
	readonly left: E
}

export interface Right<A> {
	readonly _tag: "Right"
	readonly right: A
}

export const left = <E, A = never>(e: E): Either<E, A> => ({
	_tag: "Left",
	left: e,
})

export const right = <A, E = never>(a: A): Either<E, A> => ({
	_tag: "Right",
	right: a,
})

export const isLeft = <E, A>(x: Either<E, A>): x is Left<E> => x._tag === "Left"
