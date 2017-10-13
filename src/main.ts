//用来关闭angular的开发者模式
import { enableProdMode } from '@angular/core';
//使用哪个模块来启动整个应用
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//主模块
import { AppModule } from './app/app.module';
//环境配置
import { environment } from './environments/environment';

//生产环境
if (environment.production) {
  enableProdMode();
}

//启动应用
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
