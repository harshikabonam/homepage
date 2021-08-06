import { Component, OnInit } from '@angular/core';
 
import { ActivatedRoute } from '@angular/router';
import { DataflowService } from '../dataflow.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private Dataflow:DataflowService,private route: ActivatedRoute) { }
public p=[]
public a:any=[]
public bool=true;
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params:any) => 
      this.p=(params.params['val']));
      const data={'search':this.p}
        this.Dataflow.getSmartphone(data).subscribe(c => {
        this.a=c;
    this.bool=false;
      });
      
    }
  }
