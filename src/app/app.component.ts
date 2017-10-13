import { Component } from '@angular/core';

//装饰器
@Component({
  selector: 'app-root',
  //模板
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//控制器  一个简单的typescript类
export class AppComponent {
  title = 'app';
}
