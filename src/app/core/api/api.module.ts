import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpringFoxApiService } from './spring-fox-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SpringFoxApiService]
})
export class ApiModule { }
