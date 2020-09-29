import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprinkbokComponent } from './sprinkbok.component';

describe('SprinkbokComponent', () => {
  let component: SprinkbokComponent;
  let fixture: ComponentFixture<SprinkbokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprinkbokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprinkbokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
