import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaildripComponent } from './maildrip.component';

describe('MaildripComponent', () => {
  let component: MaildripComponent;
  let fixture: ComponentFixture<MaildripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaildripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaildripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
