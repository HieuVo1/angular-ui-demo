import { TestBed } from '@angular/core/testing';

import { SendmailService } from './sendmail.service';

describe('SendmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendmailService = TestBed.get(SendmailService);
    expect(service).toBeTruthy();
  });
});
