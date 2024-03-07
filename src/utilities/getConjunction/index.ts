export default function getConjunction(length: number, index: number) {
	if (length < 2 || index === length - 1) {
		return ""
	}

	if (length === 2 && index === 0) {
		return " and "
	}

	if (index === length - 2) {
		return ", and "
	}

	return ", "
}
