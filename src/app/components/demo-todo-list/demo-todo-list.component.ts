import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-todo-list',
  templateUrl: './demo-todo-list.component.html',
  styleUrls: ['./demo-todo-list.component.scss']
})
export class DemoTodoListComponent implements OnInit {

  public username:any=''

  public items=[]

  constructor() { }

  ngOnInit() {
  }

  addData(){
    var obj = {
      username:this.username,
      status:1,
    }
    this.items.push(obj)
    this.username = ""
  }

  addEnter(e){
    if(e.keyCode == 13){
       var obj = {
      username:this.username,
      status:1,
      }
      this.items.push(obj)
      this.username = ""
    }
  }

  deleteData(index){
    this.items.splice(index,1)
  }

  updateStatus(index,status){
     this.items[index].status = status
  }
}
