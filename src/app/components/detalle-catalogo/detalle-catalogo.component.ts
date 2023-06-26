import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoService } from '../../services/catalogo.services';


@Component({
  selector: 'app-detalle-catalogo',
  templateUrl: './detalle-catalogo.component.html',
  styleUrls: ['./detalle-catalogo.component.css']
})
export class DetalleCatalogoComponent  {

  catalogo:any={};

  constructor(private activatedRoute: ActivatedRoute,
              private _catalogoService: CatalogoService) { 
  this.activatedRoute.params.subscribe(params => {
    console.log(params['id']);/*el array debe ser la misma variable que esta donde se define la ruta como parametros */ 
    this.catalogo=this._catalogoService.getCatalogoDetalle(params['id']);
  });
}

}
