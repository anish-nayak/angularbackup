import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetElectionComponent } from './get-election.component';

describe('GetElectionComponent', () => {
  let component: GetElectionComponent;
  let fixture: ComponentFixture<GetElectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetElectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
