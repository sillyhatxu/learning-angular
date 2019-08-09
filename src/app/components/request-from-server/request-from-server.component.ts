import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ajax } from 'rxjs/ajax';
import { map, retry, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-request-from-server',
  templateUrl: './request-from-server.component.html',
  styleUrls: ['./request-from-server.component.scss']
})
export class RequestFromServerComponent implements OnInit {

  public items: any[];

  public jsonpItems: any[];

  public rxjsItems: any[];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  requestData() {
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
    // this.http.get(url).subscribe(function (data:{a:string}) {
    //   console.log(data)
    //   // _that.items = JSON.parse(data['_body']).data
    //   _that.items = data.a
    // }, function (err) {
    //   console.log(err)
    // })
  }

  requestDataRXJS() {
    var _that = this;

    var url = "http://word.xushikuan.com/words"
    const apiData = ajax(url).pipe(
      retry(3), // Retry up to 3 times before failing
      map(res => {
        if (!res.response) {
          throw new Error('Value expected!');
        }
        return res.response;
      }),
      catchError(err => of([]))
    );

    apiData.subscribe({
      next(data) {
        console.log(data);
        _that.rxjsItems = data.data
      },
      error(err) {
        console.log('errors already caught... will not run');
      }
    });
  }






  //后端不允许跨域，可以用这种方式
  requestJsonpData() {
    var _that = this;

    // var url = "http://word.xushikuan.com/words?page=1&callback=JSONP_CALLBACK"
    // var url = "http://word.xushikuan.com/words?page=1&callback=__ng_jsonp__.__req0"
    // this.jsonp.get(url).subscribe(function (data) {
    //   console.log(data)
    // }, function (err) {
    //   console.log(err)
    // })

    // var url = "http://word.xushikuan.com/words?page=1&limit=20"

    // this.http.jsonp(url, 'callback').subscribe(resp => _that.resp = resp);
    // console.log(this.resp)

    let headers = new Headers({ 'Content-Type': 'application/json' });
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

    // this.http.put(this.url, JSON.stringify(bodyObj), { headers: headers })
    //   .subscribe(response => {
    //     console.log(response.json());
    //   });

    // get(url: string, options: { headers?: HttpHeaders | { [header: string]: string | string[]; }; observe?: "body"; params?: HttpParams | { [param: string]: string | string[]; }; reportProgress?: boolean; responseType: "arraybuffer"; withCredentials?: boolean; }): Observable<ArrayBuffer>



    var url = "http://word.xushikuan.com/words?page=1&limit=20"
    // var res = this.http.jsonp(url, 'callback').pipe(

    // )
    // console.log(res)




    // var url = "http://word.xushikuan.com/words?page=1&callback=JSONP_CALLBACK"
    // this.jsonp.get(url).subscribe(function (data) {
    //   console.log(data)
    //   // console.log()
    //   // _that.items = JSON.parse(data['_body']).data
    //   // _that.items = data['data']
    // }, function (err) {
    //   alert("test")
    //   console.log(err)
    // });

    // let params = new URLSearchParams();
    // params.set('page', "1"); // the user's search value
    // params.set('format', 'json');
    // params.set('callback', `__ng_jsonp__.__req${this.times}.finished`);
    // this.times = this.times + 1;
    // // TODO: Add error handling
    // this.http.jsonp.get(url, { search: params }).subscribe(function (data) {
    //   console.log(data)
    // }, function (err) {
    //   console.log(err)
    // })


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
