import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CimesebavimoComponent } from './cimesebavimo.component';

describe('CimesebavimoComponent', () => {
  let component: CimesebavimoComponent;
  let fixture: ComponentFixture<CimesebavimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CimesebavimoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CimesebavimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
