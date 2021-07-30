import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, from, Observable, of } from 'rxjs'

@Injectable({
       providedIn: 'root',
})
export class CustommanipulateserviceService {
       mediator = new BehaviorSubject('')
       obs!: Observable<number>

       constructor(private http: HttpClient) {}

       sendData(data: any) {
              this.mediator.next(data)
       }

       receiveData(): Observable<any> {
              return this.mediator
       }

       receiveDataFromObservables(): Observable<any> {
              return from(['a', 'b', 'c', 'd', 'e'])
       }

       receiveDataOfObservable(): Observable<any> {
              return of(['a', 'b', 'c', 'd', 'e'])
       }

       receiveDataObservable(): Observable<any> {
              const observable = new Observable((val) => {
                     val.next(11)
                     val.next(21)
                     val.next(31)
              })

              return observable
       }

       returnGet() {
              return this.http
                     .get(
                            'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8'
                     )
                     .subscribe(
                            (data) => {
                                   console.log('data fetched from GET', data)
                            },
                            (error) => {
                                   console.log('error occcured', error)
                            }
                     )
       }
}
