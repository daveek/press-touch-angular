import { Component } from '@angular/core';
import { Indicator, IndicatorAnimations } from './indicator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: IndicatorAnimations
})
export class AppComponent  {
  eventText = '';
  indicators;

  constructor() {
    this.indicators = new Indicator();
  }

  onPress(evt) {
    const gestureIndicator = this.indicators.display(
      evt.center.x,
      evt.center.y,
      50
    );

    let time = 0;
    gestureIndicator.interval = setInterval(() => {
    gestureIndicator.size += 1;
    }, 10);
    this.eventText += `(${evt.center.x}, ${evt.center.y})<br/>`;
  }

  onPressUp(evt) {
    const indicator = this.indicators.gestureIndicators[0];
    if (indicator) {
      clearInterval(indicator.interval);
      this.indicators.hide(indicator);
    }
  }
}
