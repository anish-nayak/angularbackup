import { TestBed } from '@angular/core/testing';

import { GetElectionService } from './get-election.service';

describe('GetElectionService', () => {
  let service: GetElectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetElectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
