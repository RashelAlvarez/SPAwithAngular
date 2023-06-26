import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Catalogo, CatalogoService } from 'src/app/services/catalogo.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
   termino:string='';
   catalogo:Catalogo[]=[];
  
  constructor(private activadRoute:ActivatedRoute,
    private _catalogoService:CatalogoService,  private router:Router) {
  
    
   }

  ngOnInit() {
   
    this.activadRoute.params.subscribe(params=>{
      this.termino= params['termino'];
      this.catalogo=this._catalogoService.buscarArticulo(params['termino']);
      console.log(this.catalogo);
      });
  }

  verDetalle(idx:number){
    this.router.navigate(['/detalle',idx]);
  }

}
