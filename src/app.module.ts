import { Module } from '@nestjs/common'
import { WsGatewaysModule } from './ws-gateways/ws-gateways.module';

@Module({
  imports: [WsGatewaysModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
