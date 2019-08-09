import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() run

  @Input() getDataFromChild

  public msginfo = "This is footer msg";
  constructor() { }

  ngOnInit() {
  }

  sendParent() {
    this.getDataFromChild(this.msginfo)/*子组件调用父组件的方法 */
  }
}
