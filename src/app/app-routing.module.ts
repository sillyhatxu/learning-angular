import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  declarations:[/*引入当前项目运行的组件；自定义组件都需要引用并且在这个里面配置*/

  ],
  imports: [/*当前项目依赖于哪些模块*/
    RouterModule.forRoot(routes)]
  ,
  providers:[],/*定义的服务*/
  exports: [RouterModule]
})
export class AppRoutingModule { }
