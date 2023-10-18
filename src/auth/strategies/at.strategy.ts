import { Injectable, Logger } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

type JwtPayload = {
	sub: string
	email: string
}

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt') {
	private readonly logger = new Logger(AtStrategy.name)

	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: 'at-secret',
		})
	}

	validate(payload: JwtPayload) {
		this.logger.log(payload)

		return payload
	}
}
