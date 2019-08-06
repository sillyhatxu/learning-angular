import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../services/storage.service'; //引入服务

@Component({
  selector: 'app-demo-todo-list',
  templateUrl: './demo-todo-list.component.html',
  styleUrls: ['./demo-todo-list.component.scss']
})
export class DemoTodoListComponent implements OnInit {

  /* 第一种引入方式 */
  //public storage = new StorageService();

  public username: any = ''

  public items = []

  /* 推荐引入方式 */
  constructor(private storage: StorageService) {
    console.log(this.storage)
    var todolist = this.storage.getItem("todolist")
    if(todolist){
      this.items = todolist
    }
  }

  ngOnInit() {
  }

  addData() {
    if (this.username === "") {
      return
    }
    var obj = {
      username: this.username,
      status: 1,
    }
    this.items.push(obj)
    this.username = ""
  }

  addEnter(e) {
    if (e.keyCode == 13) {
      var obj = {
        username: this.username,
        status: 1,
      }
      this.username = ""
      var todoList = this.storage.getItem("todolist")
      if(todoList){
        todoList.push(obj)
        this.storage.setItem("todolist",todoList);
      }else{
        var array = [];
        array.push(obj)
        this.storage.setItem("todolist",array);
      }
      this.items.push(obj)
    }
  }

  updateStatus(index, status) {
    this.items[index].status = status
    var todoList = this.storage.getItem("todolist")
    todoList[index].status = status
    this.storage.setItem("todolist",todoList);
  }

  deleteData(index) {
    this.items.splice(index, 1)
  }

  
}
