import { TestBed } from '@angular/core/testing';

import { MessagepasserService } from './messagepasser.service';

describe('MessagepasserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagepasserService = TestBed.get(MessagepasserService);
    expect(service).toBeTruthy();
  });
});
