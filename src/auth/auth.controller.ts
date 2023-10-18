import { Body, Controller, HttpCode, HttpStatus, Logger, Post, UseGuards } from '@nestjs/common'
import { AuthService } from '@auth/auth.service'
import { AuthDto } from '@auth/dto'
import { Tokens } from '@auth/types'
import { RtGuard } from '@root/common/guards'
import { GetCurrentUser, GetCurrentUserId, Public } from '@root/common/decorators'

@Controller('auth')
export class AuthController {
	private readonly logger = new Logger(AuthController.name)

	constructor(private authService: AuthService) {}

	@Public()
	@Post('local/signup')
	@HttpCode(HttpStatus.CREATED)
	signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
		return this.authService.signupLocal(dto)
	}

	@Public()
	@Post('local/signin')
	@HttpCode(HttpStatus.OK)
	signinLocal(@Body() dto: AuthDto): Promise<Tokens> {
		return this.authService.signinLocal(dto)
	}

	@Post('logout')
	@HttpCode(HttpStatus.OK)
	logout(@GetCurrentUserId() userId: number) {
		return this.authService.logout(userId)
	}

	@Public()
	@UseGuards(RtGuard)
	@Post('refresh')
	@HttpCode(HttpStatus.OK)
	refreshTokens(
		@GetCurrentUser('refreshToken') refreshToken: string,
		@GetCurrentUserId() userId: number,
	) {
		return this.authService.refreshTokens(userId, refreshToken)
	}
}
