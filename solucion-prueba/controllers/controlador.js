import {post} from "./../models/post.js"
import {get} from "./../models/get.js"
import {put} from "./../models/put.js"
import {delet} from "./../models/delet.js"


export function controlador(formu, event, entidad){
    const URL = 'http://localhost:3000/';
    let url =""
    let datos = Object.fromEntries(new FormData(formu));
    switch (event.target.value) {
        case "Agregar":
            url = URL + entidad
            post(url,datos);
            formu.reset();
            break;
        case "Buscar":
            url = URL + entidad + `/${datos.id}`
            get(url, formu);
            break;
        case "Modificar":
            url = URL + entidad + `/${datos.id}`
            put(url, datos);
            break;
        case 'Borrar':
            url = URL + entidad + `/${datos.id}`
            delet(url);
            formu.reset
            break;
    }
}