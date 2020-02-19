import { Test, TestingModule } from '@nestjs/testing';
import { SendmailController } from './sendmail.controller';

describe('Sendmail Controller', () => {
  let controller: SendmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendmailController],
    }).compile();

    controller = module.get<SendmailController>(SendmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
