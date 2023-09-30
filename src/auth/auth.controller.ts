import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from 'src/auth/auth.service'
import { AuthDto } from 'src/auth/dto'
import { Tokens } from 'src/auth/types'

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('/local/signup')
	signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
		return this.authService.signupLocal(dto)
	}

	@Post('/local/signin')
	signinLocal(@Body() dto: AuthDto): Promise<Tokens> {
		return this.authService.signinLocal(dto)
	}

	@Post('/logout')
	logout() {
		return this.authService.logout()
	}

	@Post('/refresh')
	refreshTokens() {
		return this.authService.refreshTokens()
	}
}
