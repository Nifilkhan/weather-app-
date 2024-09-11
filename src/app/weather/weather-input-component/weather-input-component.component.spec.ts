import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInputComponentComponent } from './weather-input-component.component';

describe('WeatherInputComponentComponent', () => {
  let component: WeatherInputComponentComponent;
  let fixture: ComponentFixture<WeatherInputComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherInputComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
