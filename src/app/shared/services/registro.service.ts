import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Registro } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
// Escucha para actualizar tabla
  private actualizarTablaSubject = new Subject<void>();
  actualizarTablaObservable = this.actualizarTablaSubject.asObservable();

  // Mantén una única fuente para ambos estados
  private personaSource = new Subject<any>();
  persona$ = this.personaSource.asObservable();

  constructor(private http: HttpClient) { }

  validarRut(rut_cod: string): Observable<any> {
    return this.http.post<{ existe: boolean; persona?: any; mensaje?: string | undefined }>(`${environment.api_url}/registros`, { rut_cod });
  }
  actualizarPersona(persona: any) {
    console.log('Actualizando Persona:', persona);
    this.personaSource.next(persona);
  }
  getRegistros(): Observable<Registro[]>{
    return this.http.get<Registro[]>(`${environment.api_url}/registros`);
  }
  activarActualizacionTabla() {
    this.actualizarTablaSubject.next();
  }
  getLast(): Observable<Registro>{
    return this.http.get<Registro>(`${environment.api_url}/getLast`);
  }
  private mensajeFuente = new Subject<string>();
  mensaje$ = this.mensajeFuente.asObservable();

  enviarMensaje(mensaje: string) {
    this.mensajeFuente.next(mensaje);
  }
}
