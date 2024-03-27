export type Beacon = {
	href?: string
	firstCarbon: number
	grade: string
	percentage: number
	repeatCarbon: number
}

export type Ecograder = {
	href?: string
	score: number
}

export type WebCarbon = {
	count: number
	href?: string
	percentage: number
}

export type CarbonCount = {
	beacon?: Beacon | undefined | null
	ecograder?: Ecograder | undefined | null
	webCarbon?: WebCarbon | undefined | null
}
