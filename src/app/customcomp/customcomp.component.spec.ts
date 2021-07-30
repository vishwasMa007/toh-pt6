import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcompComponent } from './customcomp.component';

describe('CustomcompComponent', () => {
  let component: CustomcompComponent;
  let fixture: ComponentFixture<CustomcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
