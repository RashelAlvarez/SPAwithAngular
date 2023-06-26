import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CatalogoService {


    private catalogo:Catalogo[]=[
        {
            nombre:"Aretes clásicos con caída",
            descripcion: "Aretes elaborados en plata esterlina (brillante, hipoalergénica y resistente). Estilo clásico.",
            precio:"$12.00",
            img:"assets/img/aretesclasicos.PNG"
            },
            
            {
            nombre:"Aretes Ear cuffs estrella",
            descripcion:"Elaborados en plata esterlina, aretes estilo piercing (a presión, no requiere perforación).",
            precio: "$8.00",
            img:"assets/img/aretes.PNG"
            
            },
            
            {
            nombre:"Anillo de promesa 'Original'",
            descripcion:"Anillo elaborado en plata esterlina 925. Comúnmente, el anillo de promesa se entrega durante el noviazgo y cada pareja le da un significado, desde un compromiso de permanecer juntos, hasta una promesa de un futuro matrimonio.",
            precio:"$18.00",
            img:"assets/img/anillopromesa.PNG"
            
            },
            
            {
            nombre:"Anillo tallado de hombre",
            descripcion:"Elaborado en plata esterlina 925.",
            precio: "$18.00",
            img:"assets/img/anillo.png"
            
            },
            
            {
            nombre:"Brazalete doble con corazones",
            descripcion:"Brazalete de lujo elaborado en plata esterlina 925. Resistente, brillante, despreocúpate de quitártelo cuando estés en contacto con agua. Mide 16.25 cm ajustable hasta 18.75 cm.",
            precio:" $24.00",
            img:"assets/img/brazalete.PNG"
            
            },
            
            {
            nombre:"Brazalete con corazón",
            descripcion:"Brazalete de lujo elaborado en plata esterlina 925.  Resistente, brillante, despreocúpate de quitártelo cuando estés en contacto con agua. Mide 15 cm ajustable a 17.5 cm.",
            precio:"$22.00",
            img:"assets/img/brazaletecorazon.PNG"
            
            },
            
            
            {
            nombre:"Cadena de inicial",
            descripcion:"Cadenas ajustables elaboradas en acero inoxidable. Variedad de letras disponibles.",
            precio:"$14.00",
            img:"assets/img/cadena.PNG"
            },
            
            {
            nombre:"Cadena estetoscopio de corazón",
            descripcion:"Elaborado en plata esterlina 925.",
            precio:"$19.80",
            img:"assets/img/cadenastetoscopio.PNG"
            },
            
            {
            nombre:"Gafas cat eye",
            descripcion:"Cada par de gafas incluyen su funda",
            precio:"$16.80",
            img:"assets/img/gafas.PNG"
            }
    ];

     getCatalogo():Catalogo[]{
        return this.catalogo;
    }

    

    getCatalogoDetalle(idx:any){
        return this.catalogo[idx];
    }

    constructor(){
        console.log("Servicio listo para usar");
    }

    buscarArticulo(termino:string){
        let Articulos:Catalogo[]=[];
        termino=termino.toLowerCase();

        for (let catalogo of this.catalogo) {
           let nombre = catalogo.nombre.toLocaleLowerCase();
           if (nombre.indexOf(termino)>=0) {
               Articulos.push(catalogo)
           }
            
        }
        return Articulos;
    }



    


}

    //validar que sean las misma caracteristicas para el catalogo
export interface Catalogo{
    nombre:string;
    descripcion:string;
    precio:string;
    img:string;
};