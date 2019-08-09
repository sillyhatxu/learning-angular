import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-panle-b',
  templateUrl: './panle-b.component.html',
  styleUrls: ['./panle-b.component.scss']
})
export class PanleBComponent implements OnInit {

  public title: string
  public name: string
  public items: any[];

  constructor(private http: HttpClient) {
    this.title = "This is panle b title"
    this.name = "This is panle b name"
  }

  ngOnInit() {
  }

  requestData(e) {
    console.log(e)
    var _that = this;
    var url = "http://word.xushikuan.com/words"
    this.http.get(url).subscribe(function (data: { data: any }) {
      console.log(data)
      // _that.items = JSON.parse(data['_body']).data
      // _that.items = data['data']
      _that.items = data.data
    }, function (err) {
      console.log(err)
    })
  }
}
