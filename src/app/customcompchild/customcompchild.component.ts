import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustommanipulateserviceService } from '../custommanipulateservice.service';

@Component({
  selector: 'app-customcompchild',
  templateUrl: './customcompchild.component.html',
  styleUrls: ['./customcompchild.component.css']
})
export class CustomcompchildComponent implements OnInit {
  dataOf$!: Observable<any>;
  dataFrom$!: Observable<any>;

  constructor(private custommanipulateserviceService:CustommanipulateserviceService) { }

  ngOnInit(): void {
    console.log("child componay data");
    // this.dataFrom$ = this.custommanipulateserviceService.receiveDataFromObservables()
    //  this.dataOf$ = this.custommanipulateserviceService.receiveDataOfObservable();
    // this.dataFrom$.subscribe((values)=>{
    //   console.log("data from dataFrom",values)

    // })
    // this.dataOf$.subscribe((values)=>{
    //   console.log("data from dataOf",values)

    // })

    this.custommanipulateserviceService.receiveDataObservable().subscribe((obs)=>{
      console.log("pure observable data",obs);

    })
  }

}
