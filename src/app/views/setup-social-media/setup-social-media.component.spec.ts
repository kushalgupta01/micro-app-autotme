import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupSocialMediaComponent } from './setup-social-media.component';

describe('SetupSocialMediaComponent', () => {
  let component: SetupSocialMediaComponent;
  let fixture: ComponentFixture<SetupSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupSocialMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
