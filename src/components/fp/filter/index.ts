export type Filter = <A>(f: (a: A) => boolean) => (arr: Array<A>) => Array<A>

const filter: Filter = f => arr => arr.filter(f)

export default filter
