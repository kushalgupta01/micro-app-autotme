import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaLinkRendererComponent } from './social-media-link-renderer.component';

describe('SocialMediaLinkRendererComponent', () => {
  let component: SocialMediaLinkRendererComponent;
  let fixture: ComponentFixture<SocialMediaLinkRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaLinkRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaLinkRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
