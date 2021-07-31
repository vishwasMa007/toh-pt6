import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, from, Observable, of } from 'rxjs'
import { catchError, filter, map, tap } from 'rxjs/operators'

@Injectable({
       providedIn: 'root',
})
export class CustommanipulateserviceService {
       mediator = new BehaviorSubject('')
       obs!: Observable<number>
       private heroesUrl = 'apizzzz/heroes1' // URL to web api
       httpOptions = {
              headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
       }

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
                            'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8',
                            this.httpOptions
                     )
                     .pipe(
                            map((data: any) => {
                                   console.log('data from server to map', data)
                                   for (let individualData of data) {
                                          if (
                                                 individualData.name ==
                                                 'Harry Potter'
                                          ) {
                                                 individualData.name = 'vishwas'
                                          }
                                   }
                                   return data
                            }),
                            filter((data: any, index: number) => {
                                   console.log(
                                          'data from server to filter',
                                          data
                                   )
                                   for (let individualData of data) {
                                          if (
                                                 individualData.name ==
                                                 'vishwas'
                                          ) {
                                                 console.log(
                                                        'data from server to subscribe',
                                                        data
                                                 )
                                                 data.splice(index, 1)
                                                 console.log(
                                                        'data from server to subscribe',
                                                        data
                                                 )
                                          }
                                   }

                                   return data
                            })
                     )
                     .subscribe((data) => {
                            console.log('data from server to subscribe', data)
                     })
              // .subscribe(
              //        (data) => {
              //               console.log('data fetched from GET', data)
              //        },
              //        (error) => {
              //               console.log('error occcured', error)
              //        }
              // )

              /** GET heroes from the server */

              // return this.http.get(this.heroesUrl).subscribe((values) => {
              //        console.log('values from Get', values)
              // })
       }
       handleError<T>(
              arg0: string,
              arg1: never[]
       ): (
              err: any,
              caught: Observable<Object>
       ) => import('rxjs').ObservableInput<any> {
              throw new Error('Method not implemented.')
       }
       log(arg0: string): void {
              throw new Error('Method not implemented.')
       }
}
