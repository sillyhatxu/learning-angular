import { Component, OnInit,NgModule } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.scss']
})
export class TwoWayDataBindingComponent implements OnInit {
  
  search:any;

  constructor() { 
    this.search = 'search content'
  }


  ngOnInit() {
  
  }

}
