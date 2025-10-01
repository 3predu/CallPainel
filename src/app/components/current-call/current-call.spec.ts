import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCall } from './current-call';

describe('CurrentCall', () => {
  let component: CurrentCall;
  let fixture: ComponentFixture<CurrentCall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentCall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentCall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
