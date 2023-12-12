import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioEntidad } from 'src/app/A_modelo/A_dominios/G_usuario/UsuarioEntidad';
import { RUTA_PRINCIPAL, USUARIO_CREAR } from 'src/app/A_modelo/B_constantes/A_URL/F_usuario/usuarioURL';
import { RespuestaGeneral } from 'src/app/A_modelo/B_constantes/B_respuesta/RespuestaGeneral';


@Injectable({
  providedIn: 'root'
})
export class  IngresarUsuarioService{

  constructor(private http: HttpClient) { }

  ingresarUsuarios(usuario: UsuarioEntidad): Observable<RespuestaGeneral> {
    return this.http
    .post<RespuestaGeneral>(RUTA_PRINCIPAL + USUARIO_CREAR, usuario);
  }
}


