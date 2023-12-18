// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main/login/login.component';
import { ModulesComponent } from './modules/modules.component';
import { InicioComponent } from './modules/inicio/inicio.component';
import { RegistroComponent } from './modules/registro/registro.component';
import { AuthGuard } from './shared/guards/auth.guards';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '', component: ModulesComponent, children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] },
      { path: 'registro', component: RegistroComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
