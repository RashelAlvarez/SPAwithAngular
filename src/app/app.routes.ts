import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { InicioComponent } from './components/inicio/inicio.component';
import { CatalogoComponent } from "./components/catalogo/catalogo.component";
import { DetalleCatalogoComponent } from './components/detalle-catalogo/detalle-catalogo.component';
import { BuscadorComponent} from './components/buscador/buscador.component';

const routes: Routes = [
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    { path: 'inicio', component: InicioComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'detalle/:id', component: DetalleCatalogoComponent },
    { path: 'buscador/:termino', component:BuscadorComponent}
 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
