import { TestBed } from '@angular/core/testing';

import { AutenticazioneAppService } from './authapp.service';

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
