import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, interval, Observer } from 'rxjs';
import { map, filter, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  myNumbersObservable: Subscription;
  customObservable: Subscription;

  constructor() { }
  ngOnInit() {
    // const myNumbers = interval(1000)
    //   .pipe(
    //     map(
    //       (number: number, index: number) => {
    //         return number * 2;
    //       }
    //     ));

    // this.myNumbersObservable = myNumbers.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // )
    // const myObservable = Observable.create((observer: Observer<any>) => {
    //   setTimeout(() => {
    //     observer.next('first package')
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('second package')
    //   }, 4000);
    //   setTimeout(() => {
    //     observer.complete()
    //   }, 5000);
    //   setTimeout(() => {
    //     observer.next('third package')
    //   }, 6000);
    // })
    // .pipe(  
    //   map(
    //     (val: string) =>{
    //         return '{status: 200, response: ' + val + '}';
    //     }
    //   )
    // );


    // this.customObservable = myObservable.subscribe(
    //   (val: String) => { console.log('data returned: ', val) },
    //   (error: String) => { console.log('error: ', error) },
    //   () => { console.log('completed') },
    // );

    const arrayObservale = [
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
      { key: 'c', value: 3 },
      { key: 'd', value: 4 },
      { key: 'e', value: 5 },
      { key: 'f', value: 6 },
      { key: 'g', value: 7 },
      { key: 'h', value: 8 },
      { key: 'i', value: 9 },
      { key: 'j', value: 10 },
      { key: 'k', value: 11 },
      { key: 'l', value: 12 },
    ]
    const testArrayObseravle = Observable.create((observer: Observer<{ key: string, value: number }>) => {
      setTimeout(() => {
        for (let i = 0; i < arrayObservale.length; i++)
          observer.next(arrayObservale[i]);
        observer.complete();
      }, 1500);
    })
      .pipe(
        filter(
          (data: { key: string, value: number }) => {
            return data.value % 2 == 0;
          }
        )
        // ,map(
        //   (data: { key: string, value: number }, index: number) => {
        //     return data.key + ' : ' + data.value + ' : ' + index;
        //   }
        // )
        ,mergeMap(
          (data: { key: string, value: number }, index: number) => {
            return Observable.create((observer2: Observer<string>) => {
                observer2.next('status: 200');
                observer2.next('response: '+ index + ', responseType: string, number');
                observer2.next('data: {'+data.key + ' : ' + data.value+'}');
                observer2.next('___________________________________________________');
                observer2.complete();
            })
          }
        )
      );

    testArrayObseravle.subscribe(
      (val: string) => {
        console.log(val);
      }
    )
  }

  ngOnDestroy() {
    this.customObservable.unsubscribe();
    this.myNumbersObservable.unsubscribe();
  }

}
