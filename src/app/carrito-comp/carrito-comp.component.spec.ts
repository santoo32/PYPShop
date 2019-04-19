import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoCompComponent } from './carrito-comp.component';

describe('CarritoCompComponent', () => {
  let component: CarritoCompComponent;
  let fixture: ComponentFixture<CarritoCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
