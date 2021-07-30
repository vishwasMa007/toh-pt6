import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcompSiblingComponent } from './customcomp-sibling.component';

describe('CustomcompSiblingComponent', () => {
  let component: CustomcompSiblingComponent;
  let fixture: ComponentFixture<CustomcompSiblingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomcompSiblingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomcompSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
