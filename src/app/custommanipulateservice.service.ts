import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustommanipulateserviceService {

  mediator = new BehaviorSubject('');
  obs!: Observable<number>;

  constructor() { }



  sendData(data:any){
    this.mediator.next(data)
  }

  receiveData():Observable<any>{
  return this.mediator;
  }

  receiveDataFromObservables():Observable<any>{
    
    return from(['a','b','c','d','e']);
    }

    receiveDataOfObservable():Observable<any>{
    
      return of(['a','b','c','d','e']);
      }
  

  receiveDataObservable():Observable<any>{
    
       
    const observable = new Observable(val => {
      val.next(11);
      val.next(21);
      val.next(31);
    })
  
return observable;

    

        }


}
