import { Component ,OnInit} from '@angular/core';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {ChangeDetectionStrategy} from '@angular/core';

import { DataflowService } from '../dataflow.service';

import{Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent implements OnInit {

    myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  constructor(private Dataflow:DataflowService, private router:Router){}
  public popular=[]
  p:any=[];
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    
    if((value.length)>=3)
    {
      const filterValue = value.toLowerCase();
      if((this.options.filter(option => option.toLowerCase().includes(filterValue))).length==1)
      {
      
      }
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
  }
  getdata(value)
  {
    
  this.options=[]
  const data={'search':value}
  if(value.length>=3)
  {
    this.Dataflow.getSmartphone(data).subscribe(c => {
    this.p=c;
    for(let i=0;i<this.p.jsonData.length;i++)
  {
    this.options.push(this.p.jsonData[i]['NameoftheCompnay'])
  }
  });
  
  }
  }

  getResult(val){
    this.router.navigate(['/home'], { queryParams: { val }, queryParamsHandling: 'merge' });
}
}
