import { Component ,OnInit} from '@angular/core';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {ChangeDetectionStrategy} from '@angular/core';

import { DataflowService } from '../app/dataflow.service';

import{Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
//   myControl = new FormControl();
//   options: string[] = ['Tata Consultancy service', 'Infosys', 'HCL Technologies','Wipro','Redington India Ltd','Google'
//                        ,'Microsoft','Adobe','Collabgenics','Smartvibes','Amazon','Flipkart','Flipk'];
//   filteredOptions: Observable<string[]>;
//   constructor(private Dataflow:DataflowService, private router:Router){}
//   public popular=[]
//   p:any=[];
//   ngOnInit() {
//     this.filteredOptions = this.myControl.valueChanges.pipe(
//         startWith(''),
//         map(value => this._filter(value))
//       );
//   }

//   private _filter(value: string): string[] {
    
//     if((value.length)>=3)
//     {
//       const filterValue = value.toLowerCase();
//       if((this.options.filter(option => option.toLowerCase().includes(filterValue))).length==1)
//       {
      
//       }
//       return this.options.filter(option => option.toLowerCase().includes(filterValue));
//     }
//   }
//   getdata(value)
//   {
//   console.log("val",value);
//   const data={'search':value}
//   if(value.length>=3)
//   {
//     this.Dataflow.getSmartphone(data).subscribe(c => {
    
//     this.p=c;
// console.log(this.p)
//   });
   
//   }
//   }
  
}
