import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from '@root/app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.useGlobalPipes(new ValidationPipe())
	// const reflector = new Reflector()
	// app.useGlobalGuards(new AtGuard(reflector))
	await app.listen(process.env.PORT)
}
bootstrap()
