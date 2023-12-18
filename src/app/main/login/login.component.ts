
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  // token:any;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private usuarioService: UsuarioService,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      usercod: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  ingresar() {
    if (this.form.invalid) {
      return;
    }

    this.usuarioService.loginUser(this.form.value).subscribe(
      (res) => {
        if (res.token) {
          this.authService.setToken(res.token);
          this.authService.setUser(res.user);
          this.fakeLoading();
        } else {
          this.error('Usuario o contraseña ingresados son inválidos');
        }
      },
      (error) => {
        console.error('Error en la solicitud de inicio de sesión:', error);
        this.error('Error en la autenticación. Por favor, inténtalo de nuevo.');
      }
    );
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.success('Sesión iniciada correctamente');
      this.router.navigate(['registro']);
    }, 1500);
  }

  error(message: string) {
    this._snackBar.open(message, '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  success(message: string) {
    this._snackBar.open(message, '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
