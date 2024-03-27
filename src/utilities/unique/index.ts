type Unique = <T>(arr: Array<T>) => Array<T>
const unique: Unique = arr =>
	arr.filter((value, index, self) => self.indexOf(value) === index)

export default unique
