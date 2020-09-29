import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubynavComponent } from './rubynav.component';

describe('RubynavComponent', () => {
  let component: RubynavComponent;
  let fixture: ComponentFixture<RubynavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubynavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
