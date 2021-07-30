import { Component, OnInit } from '@angular/core';
import { CustommanipulateserviceService } from '../custommanipulateservice.service';

@Component({
  selector: 'app-customcomp-sibling',
  templateUrl: './customcomp-sibling.component.html',
  styleUrls: ['./customcomp-sibling.component.css']
})
export class CustomcompSiblingComponent implements OnInit {
  fromSibling: any;

  constructor( private custommanipulateserviceService:CustommanipulateserviceService) { }

  ngOnInit(): void {
    this.custommanipulateserviceService.receiveData().subscribe((val)=>{
     this.fromSibling=val;
      console.log("data from Customcomp to CustomcompSiblingComponent",val);

    })
  }

}
