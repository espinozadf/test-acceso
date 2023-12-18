// modules-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthGuard } from '../shared/guards/auth.guards';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'inicio', component: InicioComponent },
      // { path: 'registro', component: RegistroComponent },
      // { path: 'registro', loadChildren: () => import('./registro/registro.module').then(x => x.RegistroModule) },
      { path: 'registro', component: RegistroComponent, canActivate: [AuthGuard] },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
