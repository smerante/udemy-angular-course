import { Injectable } from '@angular/core';

export class LoggingService {

  constructor() { }

  logStatusCange(status: string) {
    console.log('A server status changed, new status is: ' + status);
  }
}
