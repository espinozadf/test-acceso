import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  // Otras rutas específicas del módulo Inicio
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioRoutingModule {}
