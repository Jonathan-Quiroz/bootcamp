function item (nombre, descripcion, precio_de_costo, clasificacion, porcentaje_de_ganancia, precio_ultimos_6_meses, cantidades_vendidas, fecha_de_caducidad){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio_de_costo = precio_de_costo;
    this.clasificacion = clasificacion;
    this.porcentaje_de_ganancia = porcentaje_de_ganancia;
    this.cantidades_vendidas = cantidades_vendidas;
    this.fecha_de_caducidad = fecha_de_caducidad;
    this.precio_ultimos_6_meses = precio_ultimos_6_meses;

    this.precio_de_venta = function(){
        return ((this.precio_de_costo * this.porcentaje_de_ganancia)+ this.precio_de_costo).toFixed(2)
    }
    this.caducidad = function(){
        let today = new Date().getTime();
        let fecha_de_caducidad = new Date (this.fecha_de_caducidad).getTime();
        let dias = ((fecha_de_caducidad - today)/(1000*60*60*24)).toFixed(0);
        return dias;
    }

    this.precio_promedio = function(){
        let calculo_Precio = this.precio_ultimos_6_meses.reduce(
            (acumulador, elemento)=>{
                return acumulador+= elemento
        },0
        )
        return (calculo_Precio/this.precio_ultimos_6_meses.length).toFixed(2);
        
    }
}


const limon = new item (`limon`, `Articulo comestible`, 5, `verduras`, 0.5, [4,5,3,6,5,3], 100, `2021/04/10`)
const tomate = new item (`tomate`, `Articulo comestible`, 13, `verduras`, 0.5, [14,15,13,16,15,13], 150, `2021/04/15`)
const coco = new item (`coco`, `Articulo comestible`, 26, `fruta`, 0.5, [24,25,23,26,25,23], 50, `2021/04/8`)
const elote = new item (`elote`, `Articulo comestible`, 15, `verduras`, 0.5, [14,15,13,16,15,13], 340, `2021/04/7`)
const aguacate = new item (`aguacate`, `Articulo comestible`, 68, `verduras`, 0.5, [64,65,63,66,65,63], 24, `2021/04/15`)
const sandia = new item (`sandia`, `Articulo comestible`, 50, `fruta`, 0.5, [54,55,53,56,55,53], 150, `2021/04/23`)
const chile = new item (`chile`, `Articulo comestible`, 55, `verduras`, 0.5, [54,55,53,56,55,53], 100, `2021/04/25`)
const jamaica = new item (`jamaica`, `Articulo comestible`, 45, `verduras`, 0.5, [44,45,43,46,45,43], 8, `2021/05/5`)


document.write ("La fecha de caducidad del producto " + limon.nombre + " es " + limon.fecha_de_caducidad + " y quedan <label style='color:red;'>" + limon.caducidad()+ " </label> días para su vencimiento" + "<br>")

document.write ("El precio de venta del producto " + limon.nombre + " es de " + limon.precio_de_venta() + " piedrolares <br>")

document.write ("El precio promedio de historico de los ultimos 6 meses del producto " + limon.nombre + " es de " + limon.precio_promedio() + " piedrolares <br>")

const items_en_tienda = [] 
items_en_tienda.push(limon,tomate,coco,elote,aguacate,sandia,chile,jamaica);
/* console.log(items_en_tienda); */

const mas_de_50 = items_en_tienda.filter(element => element.cantidades_vendidas>50)
console.log(mas_de_50);

const menos_de_10 = items_en_tienda.filter(element => element.cantidades_vendidas<10)
console.log(menos_de_10);

const caduca_en_15 = items_en_tienda.filter(element => element.caducidad()<15)
console.log(caduca_en_15);
console.log(limon.caducidad());