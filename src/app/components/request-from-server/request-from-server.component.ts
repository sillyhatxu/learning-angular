import { Component, OnInit } from '@angular/core';
import { Http, Jsonp } from '@angular/http'

@Component({
  selector: 'app-request-from-server',
  templateUrl: './request-from-server.component.html',
  styleUrls: ['./request-from-server.component.scss']
})
export class RequestFromServerComponent implements OnInit {

  public items: any[];

  public jsonpItems: any[];

  constructor(private http: Http, private jsonp: Jsonp) { }

  ngOnInit() {
  }

  requestData() {
    var _that = this;
    var url = "http://word.xushikuan.com/words"
    this.http.get(url).subscribe(function (data) {
      console.log(JSON.parse(data['_body']))
      _that.items = JSON.parse(data['_body']).data
    }, function (err) {
      console.log(err)
    })
  }

  //后端不允许跨域，可以用这种方式
  requestJsonpData() {
    var _that = this;
    var url = "http://word.xushikuan.com/words?page=1?callback=JSONP_CALLBACK"
    this.jsonp.get(url).subscribe(function (data) {
      console.log(data)
    }, function (err) {
      console.log(err)
    })
    // var url = "http://word.xushikuan.com/words"
    // let params = new URLSearchParams();
    // params.set('format', 'json');
    // params.set('callback', "JSONP_CALLBACK");

    // this.jsonp.request(url, { method: 'Get' })
    //   .subscribe(
    //     (data) => {
    //       console.log(data);
    //     },
    //     (error) => {
    //       console.log(error);
    //     });
    // this.jsonp.request(url, { search: params, method: 'Get' })
    //   .subscribe(
    //     (data) => {
    //       console.log(data);
    //     },
    //     (error) => {
    //       console.log(error);
    //     });

    // this._jsonp
    // .get(this._InstUrl, { search: params1 })
    // .map(response => { debugger; this.Result = response.json().data })
    // .subscribe(
    // (data) => {
    //     debugger
    //     console.log(this.Result);
    // },
    // (error) => {
    //     debugger
    //     console.log(error);
    // });
  }
}
