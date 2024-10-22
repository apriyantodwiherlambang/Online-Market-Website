import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingGalleryComponent } from './landing-gallery.component';

describe('LandingGalleryComponent', () => {
  let component: LandingGalleryComponent;
  let fixture: ComponentFixture<LandingGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
