import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { CallDisplayComponent } from './call-display';

describe('CallDisplay', () => {
  let component: CallDisplayComponent;
  let fixture: ComponentFixture<CallDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CallDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
