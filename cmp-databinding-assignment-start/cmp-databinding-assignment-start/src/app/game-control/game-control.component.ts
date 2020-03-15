import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() onTick: EventEmitter<{}> = new EventEmitter<{'value': number}>();
  @Output() increment: number;
  intervalRef: any;
  started: boolean = false;
  constructor() {
    this.increment = 0;
   }

  ngOnInit() {
  }

  start(){
    if(!this.started){
      this.emitIncrement();
      this.intervalRef = setInterval(()=>{ this.emitIncrement(); }, 1000);
      this.started=true;
    }
  }

  stop(){
    console.log("Clearing interval");
    this.started = false;
    clearInterval(this.intervalRef);
  }

  emitIncrement(){
    this.onTick.emit({'value': this.increment});
    console.log("Event emitted with increment ", this.increment);
    this.increment++;
  }
}
