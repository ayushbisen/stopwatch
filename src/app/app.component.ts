import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stopwatch-ngrx';
  hh = 0;
  mm = 0;
  ss = 0;
  ms = 0;
  isRunning = false;
  timerId: any;
  laps: any = [];

  public format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }

  public onStartAndResumeClick() {
    if (!this.isRunning) {
      this.timerId = setInterval(() => {
        this.ms++;

        if (this.ms >= 100) {
          this.ss++;
          this.ms = 0;
        }
        if (this.ss >= 60) {
          this.mm++;
          this.ss = 0
        }
        if (this.mm >= 60) {
          this.hh++;
          this.mm = 0
        }
      }, 10);
    } else {
      clearInterval(this.timerId);
    }
    this.isRunning = !this.isRunning;
  }

  public onResetClick() {
    this.hh = 0;
    this.mm = 0;
    this.ss = 0;
    this.ms = 0;
    clearInterval(this.timerId);
    this.laps = [];
  }

  public addLap() {
    let lapTime = `${this.format(this.hh)}:${this.format(this.mm)}:${this.format(this.ss)}:${this.format(this.ms)}`
    this.laps.push(lapTime);
  }
}
