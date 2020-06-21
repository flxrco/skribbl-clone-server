import { Test, TestingModule } from '@nestjs/testing';
import { DebugGateway } from './debug.gateway';

describe('DebugGateway', () => {
  let gateway: DebugGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DebugGateway],
    }).compile();

    gateway = module.get<DebugGateway>(DebugGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
