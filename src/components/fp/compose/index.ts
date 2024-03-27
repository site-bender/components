export type Compose = <A, B, C>(f: (x: B) => C, g: (x: A) => B) => (x: A) => C

const compose: Compose = (f, g) => x => f(g(x))

export default compose
