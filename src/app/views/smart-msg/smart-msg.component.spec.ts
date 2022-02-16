import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartMsgComponent } from './smart-msg.component';

describe('SmartMsgComponent', () => {
  let component: SmartMsgComponent;
  let fixture: ComponentFixture<SmartMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
