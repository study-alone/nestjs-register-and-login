import { ExecutionContext, Logger, createParamDecorator } from '@nestjs/common'
import { Request } from 'express'

export const GetCurrentUser = createParamDecorator(
	(data: string | undefined, context: ExecutionContext) => {
		const logger = new Logger('GetCurrentUser')
		logger.log({ data })
		const request = context.switchToHttp().getRequest<Request>()

		if (!data) return request.user

		return request.user[data]
	},
)
