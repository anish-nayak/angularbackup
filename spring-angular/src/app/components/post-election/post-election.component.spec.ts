import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostElectionComponent } from './post-election.component';

describe('PostElectionComponent', () => {
  let component: PostElectionComponent;
  let fixture: ComponentFixture<PostElectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostElectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
