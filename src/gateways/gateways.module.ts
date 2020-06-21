import { Module } from '@nestjs/common';
import { DebugGateway } from './debug.gateway';

@Module({
  providers: [DebugGateway]
})
export class GatewaysModule {}
