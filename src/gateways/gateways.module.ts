import { Module } from '@nestjs/common'
import { DebugGateway } from './debug/debug.gateway'

@Module({
  providers: [DebugGateway],
})
export class GatewaysModule {}
