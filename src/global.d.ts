declare namespace NodeJS {
	interface ProcessEnv {
		readonly DATABASE_URL: string
		readonly PORT: number
	}
}

declare namespace Express {
	interface User {
		sub: number // id
		email: string
		iat: number
		exp: number
		refreshToken: string
	}
}
