// registro.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { FormRegistroComponent } from './components/form-registro/form-registro.component';



@NgModule({
  declarations: [
    RegistroComponent,
    FormRegistroComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    FormRegistroComponent

  ]
})
export class RegistroModule { }
