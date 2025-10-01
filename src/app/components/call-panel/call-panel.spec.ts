import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { CallPanelComponent as CallPanel } from './call-panel';

describe('CallPanel', () => {
  let component: CallPanel;
  let fixture: ComponentFixture<CallPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(CallPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
