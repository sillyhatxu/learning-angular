import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panle-c',
  templateUrl: './panle-c.component.html',
  styleUrls: ['./panle-c.component.scss']
})
export class PanleCComponent implements OnInit {

  constructor() { }

  //EventEmitter实现子组件传值给父组件
  @Output() toparent = new EventEmitter()

  ngOnInit() {
  }

  requestData() {
    this.toparent.emit('panel-c value')
  }
}
