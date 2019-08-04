import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  title="Basic Component";

  msg:any;

  msg1:string='This is stirng type'

  public publicUsername = "public sillyhat"

  protected protectedUserName = "protected sillyhat"

  private privateUserName = "private sillyhat"

  public h2 ="";

  //数组
  public list=[];

  public objList=[];
  //也可以
  //public objList:any[];

  public testMap = new Map<String, String>();

  public numberValue=0

  btnFlag=false;
  //对象
  public obj = {
    name:"heihei"
  }
  constructor() {
      this.h2 = "<h2>This is h2 show.</h2>"

   }/* 构造函数*/

  ngOnInit() {/*生命周期函数，加载触发的方法 */
    this.msg = "This is msg from database."
    this.list = ['aaa','bbb','ccc']
    this.addValue();
    this.testMap.set("a","aaaaa");
    this.testMap.set("b","bbbbb");
    this.testMap.set("c","ccccc");
    this.testMap.set("d","ddddd");
    this.testMap.set("e","eeeee");
  
    this.objList = [
      {
        name:"name-a",
        age:15,
      },
      {
        name:"name-b",
        age:22,
      },
      {
        name:"name-c",
        age:23,
      },
      {
        name:"name-d",
        age:18,
      }
    ]
  }

  getMsg(){
    alert(this.msg + this.numberValue)
    this.addValue();
  }

  addValue(){
    this.numberValue++
  }

  keyupFn(e){
    console.log('input change');
    console.log(e)
    if(e.keyCode == 13){
      alert("输入了回车");
    }
  }

  run(e){
    console.log(e)
  }

}
