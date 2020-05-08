import { TestBed } from '@angular/core/testing';

import { PostCandidateService } from './post-candidate.service';

describe('PostCandidateService', () => {
  let service: PostCandidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostCandidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
