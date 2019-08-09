import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAComponent } from './components/page-a/page-a.component'
import { PageBComponent } from './components/page-b/page-b.component'
import { PageCComponent } from './components/page-c/page-c.component'


const routes: Routes = [
  {
    path: 'page-a',
    component: PageAComponent,
    children: []
  },
  {
    path: 'page-b',
    component: PageBComponent,
    children: []
  },
  {/* 动态路由     :params   */
    path: 'page-c/:id',
    component: PageCComponent,
    children: []
  },
  {/* 默认路由 */
    path: '',
    redirectTo: 'page-a',
    pathMatch: 'full'
  },
  {/* 匹配不到路由时跳转的页面 */
    path: '**',
    redirectTo: 'page-b',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [/*引入当前项目运行的组件；自定义组件都需要引用并且在这个里面配置*/

  ],
  imports: [/*当前项目依赖于哪些模块*/
    RouterModule.forRoot(routes)]
  // RouterModule.forRoot(routes, { useHash: true, enableTracing: true })]
  ,
  providers: [],/*定义的服务*/
  exports: [RouterModule]
})
export class AppRoutingModule { }
