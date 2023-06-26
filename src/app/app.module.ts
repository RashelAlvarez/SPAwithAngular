import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas

import {FeatureRoutingModule} from './app.routes';

//Servicios

import { CatalogoService } from './services/catalogo.services';


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DetalleCatalogoComponent } from './components/detalle-catalogo/detalle-catalogo.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    CatalogoComponent,
    FooterComponent,
    DetalleCatalogoComponent,
    BuscadorComponent,
   
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule
  ],
  providers: [
    CatalogoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
