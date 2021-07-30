import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { CustommanipulateserviceService } from '../custommanipulateservice.service'

@Component({
       selector: 'app-customcomp',
       templateUrl: './customcomp.component.html',
       styleUrls: ['./customcomp.component.css'],
})
export class CustomcompComponent implements OnInit {
       displayName!: string

       @ViewChild('value') value1!: ElementRef

       constructor(
              private custommanipulateserviceService: CustommanipulateserviceService
       ) {}
       name!: string
       cChexBox!: string
       cradio!: string

       ngOnInit() {
              this.custommanipulateserviceService
                     .receiveData()
                     .subscribe((value) => {
                            console.log('data received from subscribe', value)
                     })
       }
       // onSubmit(event:any){
       //   console.log("debug 2",event.target.textName.value);
       //   this.displayName=event.target.textName.value;
       // }

       manipulateName() {
              // console.log("debug 1 textBoc",this.value1.nativeElement.value);
              // console.log("debug 1 chexBox",this.cChexBox);
              // console.log("debug 1 radio",this.cradio);
              this.displayName = this.value1.nativeElement.value
              //this.custommanipulateserviceService.sendData(this.value1.nativeElement.value);

              // this.custommanipulateserviceService.returnGet()
       }
}
