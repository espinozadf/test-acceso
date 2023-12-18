// modules.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from '../main/login/login.component';

@NgModule({
  declarations: [
    ModulesComponent,
    InicioComponent,
    RegistroComponent,
    NavbarComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule
  ],

})
export class ModulesModule {}
