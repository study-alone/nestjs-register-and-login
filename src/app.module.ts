import { Module } from '@nestjs/common'
import { AuthModule } from '@auth/auth.module'
import { PrismaModule } from '@orm/prisma.module'
import { APP_GUARD } from '@nestjs/core'
import { AtGuard } from '@root/common/guards'

@Module({
	imports: [AuthModule, PrismaModule],
	providers: [
		{
			provide: APP_GUARD,
			useClass: AtGuard,
		},
	],
})
export class AppModule {}
