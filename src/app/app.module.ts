// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ModulesComponent } from './modules/modules.component';
import { LoginModule } from './main/login/login.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ModulesComponent
    // LoginComponent
    // Otros componentes de nivel superior
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
    // LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
