import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { Request } from 'express'

export const GetCurrentUserId = createParamDecorator(
	(data: undefined, context: ExecutionContext): number => {
		const request = context.switchToHttp().getRequest<Request>()

		return request.user.sub
	},
)
