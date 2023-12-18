import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
// Importa aquí tus servicios globales

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    // Importa otros módulos necesarios
  ],
  declarations: [
    // Agrega componentes si es necesario
  ],
  providers: [
    // Agrega servicios globales
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule ya está cargado. Importa CoreModule solo en AppModule.');
    }
  }
}
