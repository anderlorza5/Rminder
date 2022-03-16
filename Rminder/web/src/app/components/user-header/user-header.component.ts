import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css','../../apoyo/css/sb-admin-2.min.css','../../apoyo/vendor/fontawesome-free/css/all.min.css']
})
export class UserHeaderComponent implements OnInit {

  usuarios: Usuario|null;
  idUsuario=0;

  constructor(private _userService: UsuariosService, private activatedRoute: ActivatedRoute,public router: Router) {
    this.idUsuario = 0;
    this.usuarios = null;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any) => {this.idUsuario=parameters.get("idUsuario")})
    this._userService.getUsuarioId(this.idUsuario).subscribe(apiUsers => this.usuarios=apiUsers)
  }

  onClick(){
    this.router.navigate(['/nueva/'+this.idUsuario])

  }

}
