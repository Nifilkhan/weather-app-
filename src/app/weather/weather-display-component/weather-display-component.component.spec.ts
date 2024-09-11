import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDisplayComponentComponent } from './weather-display-component.component';

describe('WeatherDisplayComponentComponent', () => {
  let component: WeatherDisplayComponentComponent;
  let fixture: ComponentFixture<WeatherDisplayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherDisplayComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
