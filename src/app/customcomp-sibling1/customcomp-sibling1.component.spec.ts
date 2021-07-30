import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcompSibling1Component } from './customcomp-sibling1.component';

describe('CustomcompSibling1Component', () => {
  let component: CustomcompSibling1Component;
  let fixture: ComponentFixture<CustomcompSibling1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomcompSibling1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomcompSibling1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
