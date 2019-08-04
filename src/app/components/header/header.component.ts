import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title="Code Title Component";

 
  constructor() {
      

   }/* 构造函数*/

  ngOnInit() {/*生命周期函数，加载触发的方法 */
   
  }

}
