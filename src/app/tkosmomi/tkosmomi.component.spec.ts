import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TkosmomiComponent } from './tkosmomi.component';

describe('TkosmomiComponent', () => {
  let component: TkosmomiComponent;
  let fixture: ComponentFixture<TkosmomiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TkosmomiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TkosmomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
