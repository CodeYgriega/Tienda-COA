import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateOrderButtonComponent } from './generate-order-button.component';

describe('GenerateOrderButtonComponent', () => {
  let component: GenerateOrderButtonComponent;
  let fixture: ComponentFixture<GenerateOrderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateOrderButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateOrderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
