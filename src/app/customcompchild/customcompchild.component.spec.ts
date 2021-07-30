import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcompchildComponent } from './customcompchild.component';

describe('CustomcompchildComponent', () => {
  let component: CustomcompchildComponent;
  let fixture: ComponentFixture<CustomcompchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomcompchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomcompchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
