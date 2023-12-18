//registro-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistroComponent } from './registro.component';

const routes: Routes = [
  { path: '', component: RegistroComponent },
  // Otras rutas específicas del módulo Registro
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroRoutingModule {}
