import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule, HttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BasicComponent } from './components/basic/basic.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { DemoTodoListComponent } from './components/demo-todo-list/demo-todo-list.component';


import { StorageService } from './services/storage.service';
import { RequestFromServerComponent } from './components/request-from-server/request-from-server.component';
import { PanleAComponent } from './components/panle-a/panle-a.component';
import { PanleBComponent } from './components/panle-b/panle-b.component';
import { PanleCComponent } from './components/panle-c/panle-c.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component'; //引入服务


@NgModule({
  declarations: [/* 引入当前项目运行的组件 */
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    TwoWayDataBindingComponent,
    DemoTodoListComponent,
    RequestFromServerComponent,
    PanleAComponent,
    PanleBComponent,
    PanleCComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [/* 当前项目依赖的模块 */
    HttpClientJsonpModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [/* 当前项目引入服务 */
    StorageService,
  ],
  bootstrap: [AppComponent]/*默认启动的组件 */
})
export class AppModule { }
