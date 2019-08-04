
//引入模块
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',/*表示使用这个组件的名称*/
  templateUrl: './app.component.html',/*html*/
  styleUrls: ['./app.component.scss']/*css*/
})
export class AppComponent {//数据
  title = 'learning-angular';
  hello = 'Hello World Angular :)'
}
