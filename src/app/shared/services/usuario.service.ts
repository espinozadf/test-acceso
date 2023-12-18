import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  registerUser(data: any){
    return this.http.post(environment.api_url+'/register', data);
  }

  // loginUser(data: any){
  loginUser(data: any): Observable<any>{
    // return this.http.post(environment.api_url+'/login', data);
    return this.http.post<any>(`${environment.api_url}/login`, data);
  }


}
