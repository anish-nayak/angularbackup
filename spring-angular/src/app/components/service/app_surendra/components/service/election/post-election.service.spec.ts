import { TestBed } from '@angular/core/testing';

import { PostElectionService } from './post-election.service';

describe('PostElectionService', () => {
  let service: PostElectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostElectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
