import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiDocComponent } from './api-doc/api-doc.component';
import { ApiDocInfoComponent } from './api-doc-info/api-doc-info.component';
import { ApiDocTagComponent } from './api-doc-tag/api-doc-tag.component';
import { ApiDocPathComponent } from './api-doc-path/api-doc-path.component';
import { ApiDocMethodComponent } from './api-doc-method/api-doc-method.component';
import { ApiDocOperateComponent } from './api-doc-operate/api-doc-operate.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ConsoleuiModule } from 'console-ui-ng';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule.forRoot(),
    ConsoleuiModule,
  ],
  declarations: [ApiDocComponent, ApiDocInfoComponent, ApiDocTagComponent,
    ApiDocPathComponent, ApiDocMethodComponent, ApiDocOperateComponent],
  exports: [ApiDocComponent]
})
export class ApiDocModule { }
