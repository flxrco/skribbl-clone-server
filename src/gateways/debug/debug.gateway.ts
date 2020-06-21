import {
  SubscribeMessage,
  WebSocketGateway,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets'
import { Socket } from 'socket.io'

@WebSocketGateway()
export class DebugGateway {
  @SubscribeMessage('started')
  handleStartedEvent(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket
  ): void {
    const event = {
      ...data,
      timestamp: new Date(),
    }

    client.broadcast.emit('started', event)
  }

  @SubscribeMessage('moved')
  handleOngoingEvent(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket
  ): void {
    const event = {
      ...data,
      timestamp: new Date(),
    }

    client.broadcast.emit('moved', event)
  }

  @SubscribeMessage('finished')
  handleFinishedEvent(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket
  ): void {
    const event = {
      ...data,
      timestamp: new Date(),
    }

    client.broadcast.emit('finished', event)
    client.emit('finished', event)
  }
}
