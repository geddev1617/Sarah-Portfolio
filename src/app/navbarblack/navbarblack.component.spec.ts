import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarblackComponent } from './navbarblack.component';

describe('NavbarblackComponent', () => {
  let component: NavbarblackComponent;
  let fixture: ComponentFixture<NavbarblackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarblackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarblackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
