import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  public transitions: number;

  constructor() {
    this.transitions = 0;
  }
  transition() {
      this.transitions++;
      console.log('Transitions made: ', this.transitions);
  }
}
