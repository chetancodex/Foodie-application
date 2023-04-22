import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureLogoComponent } from './feature-logo.component';

describe('FeatureLogoComponent', () => {
  let component: FeatureLogoComponent;
  let fixture: ComponentFixture<FeatureLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
