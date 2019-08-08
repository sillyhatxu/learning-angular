import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string // 通过input接收父组件传值

  @Input() name: string // 通过input接收父组件传值



  constructor() {


  }/* 构造函数*/

  ngOnInit() {/*生命周期函数，加载触发的方法 */

  }

}
