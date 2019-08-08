import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panle-a',
  templateUrl: './panle-a.component.html',
  styleUrls: ['./panle-a.component.scss']
})
export class PanleAComponent implements OnInit {

  public title: string
  public name: string
  constructor() {
    this.title = "This is panle a title"
    this.name = "This is panle a name"
  }

  ngOnInit() {
  }

}
