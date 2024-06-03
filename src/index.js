const { from, of, interval } = require('rxjs');
const { concatMap, delay, mapTo, map, takeUntil, takeWhile, take } = require('rxjs/operators');

const array = [1, 2, 3, 4, 5];

// Create an observer function
const observer = {
  next: (value) => console.log(value),
  error: (err) => console.error('Error: ', err),
  complete: () => {
    // console.log('this.........', globalThis)
    console.log('Completed')
    // subscription.unsubscribe();
  }
};

// Create an observable from the array
const observable = from(array).pipe(
  // Use concatMap to map each value to an observable that emits after a delay
  concatMap(value => 
    // Create an observable that emits the value after a 2-second delay
    of(value).pipe(
      delay(1000)
    )
  )
);

const observable2 = interval(1000)
.pipe(
  // take(array.length),
  takeWhile(val => val < array.length),
  map((value) =>{ 
    if(value < array.length){
      return array[value]
    }
      observer.complete();
    }
  )
)

//MergeMap practice!
// First create a view template in using handlebars and then create input fields there and
// then use mergeMap to get the value of the input fields and then display the value in the console in service file




// Subscribe to the observable using the observer function

// observable.subscribe(observer);
const subscription =  observable2.subscribe(observer);
















// const {Observable, map, tap, timer, interval} = require('rxjs');
// const { throttleTime,delay } = require('rxjs/operators');

// const data = [1, 2, 3, 4, 5];

// const api = (data) => {
//    console.log("api called", data)
// }

// const observable = new Observable((subscriber)=>{
//   data.forEach((value)=>{
//     subscriber.next(value);
//   })
// }).pipe(
//     tap((data) => {
//       delay(1000);
//       api(data);
//     }), 
    
// )

// const observer = {
//     next: (data) => console.log("data in next",data),
//     error: (error) => console.error(error),
//     complete: () => console.log('Completed')
// }

// observable.subscribe(observer);