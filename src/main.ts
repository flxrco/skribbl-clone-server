import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import ConfigUtils from './utils/config.util'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(ConfigUtils.HTTP_PORT)
}
bootstrap()
