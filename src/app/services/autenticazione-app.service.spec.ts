import { TestBed } from '@angular/core/testing';

import { AutenticazioneAppService } from './autenticazione-app.service';

describe('AutenticazioneAppService', () => {
  let service: AutenticazioneAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticazioneAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
