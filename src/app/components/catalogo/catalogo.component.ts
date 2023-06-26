import { Component, OnInit } from '@angular/core';
import { CatalogoService, Catalogo } from '../../services/catalogo.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  //se declara una propiedad private para que solo puede ser acceddida por esta misma clase
  catalogo:Catalogo[]=[];

  constructor( private _catalogoService: CatalogoService , private router:Router ) {
   
    this.catalogo = this._catalogoService.getCatalogo();
    console.log(this.catalogo);

   }

  ngOnInit(): void {
  }

  //se define el metodo con el parametro enviado, ademas se debe importar la linea 3 y se define la ruta en el archivo app.routes.ts
  verDetalle(idx:number){
    this.router.navigate(['/detalle',idx]);
  }
}
