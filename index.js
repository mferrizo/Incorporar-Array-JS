//FUNCIONES DEL SISTEMA DE STOCK
//El Encargado del deposito puede consultar información de diferentes productos y su stock.
//Si el mismo no se encuentra, lo puede sumar al stock. 
//Tambien puede filtar de forma especifica por articulo

//Creacion de un objeto con una clase constructora
class articulo{
    constructor(id, categoria, producto, precio, cantidad){
        this.id = id,
        this.categoria = categoria,
        this.producto = producto,
        this.precio = precio
        this.cantidad = cantidad
    }//Se agrega un metodo y lo muestra por Alert y Por consola asi muestra el Total
    verDatos(){
        alert(`Stock en En Sistema:\nID: ${this.id}\nCategoria: ${this.categoria}\nProducto: ${this.producto}\nPrecio de Costo: ${this.precio}\nStock: ${this.cantidad} `)
        console.log(`Stock en En Sistema:\nID: ${this.id}\nCategoria: ${this.categoria}\nProducto: ${this.producto}\nPrecio de Costo: ${this.precio}\nStock: ${this.cantidad} `)
    }
}

//Crea la Instanciación de Objetos - STOCK DE ARTICULOS PARA LA VENTA CON CANTIDAD EN INVENTARIO
const producto1 = new articulo(0, "Caja", "Verde", 75, 11)
const producto2 = new articulo(1, "Caja", "Roja", 100, 8)
const producto3 = new articulo(2, "Sidra", "Real", 400, 17)
const producto4 = new articulo(3, "Sidra", "Del Valle", 450, 9)
const producto5 = new articulo(4, "Pan Dulce", "Nevares", 300, 26)
const producto6 = new articulo(5, "Pan Dulce", "Aires de Lujan", 350, 20)
const producto7 = new articulo(6, "Turron", "Georgalos", 100, 14)
const producto8 = new articulo(7, "Turron", "Arcor", 120, 18)
const producto9 = new articulo(8, "Budin", "Nevares", 200, 88)
const producto10 = new articulo(9, "Budin", "Aires de Lujan", 250, 33)
const producto11 = new articulo(10, "Lata de Conserva", "Durazno en Almibar Molto", 500, 10)
const producto12 = new articulo(11, "Lata de Conserva", "Anana en Almibar", 600, 12)
const producto13 = new articulo(12, "Confitados", "Garrapiñadas Georgalo", 60, 90)
const producto14 = new articulo(13, "Confitados", "Confites de Mani", 90, 90)

//ARRAY CON LOS PRODUCTOS
const stock = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14]

//Funcion que Muestra el Stock recorriendo el listado de Articulos con Array ForEach

function mostrarStock(array){
    alert("Su Stock sera mostrado en PopUp y Tambien por Consola")
    console.log("Su Stock sera mostrado en PopUp y Tambien por Consola")
    array.forEach((deposito)=>{
        deposito.verDatos()
    })
}

//Funcion para agregar un nuevo Articulo al Stock con Array Push
function nuevoProducto(array){
    let CategoriaNueva = prompt("Ingrese la Categoria del Producto")
    let productoNuevo = prompt("Ingrese el Nuevo Producto")
    let precioSiniva = prompt("Ingrese el precio de costo del producto")
    let stockNew = prompt("Ingrese el Stock del producto")
    let productoCreado = new articulo(stock.length, CategoriaNueva, productoNuevo, precioSiniva,stockNew)
    array.push(productoCreado)
    alert(`El Articulo ha sido agregado exitosamente.Por Favor Revise El nuevo Stock en la opcion 1`)
}

//Borrar un producto usando Splice
function eliminamosArticulo(stock){
    let posicion1 = prompt("Para eliminar un producto, indique el ID del mismo")
    let posicion2 = prompt("Indique el ID del producto siguiente para poder eliminar el primero. Si desea eliminar mas de uno, indique el ID del producto hasta donde quiera que sean eliminados.")
    borrarArticulo = confirm("Desea eliminar el/los productos seleccionados?")
        if (borrarArticulo == true){
            stock.splice(posicion1, posicion2)
            alert("El/los productos fueron eliminados de la base de datos. Revise el menú para confirmar")
        }else{
            alert("Seleccione otra opción del menú")
        }
    }   

//Funcion Que busca un Articulo por el ID. Utiliza Find, muestra el resultado en consola
function buscarPorID(){
    let buscarProducto = prompt("Ingrese el ID del Producto requerido")
    let idEncontrado = stock.find((cajaNavidad)=> cajaNavidad.id == buscarProducto)
    if(idEncontrado == undefined){
        alert("No hay stock de este producto. Si desea ingresarlo por favor ingrese la opcion 2 en el menu anterior")
    } else{
        alert("Los resultado de la busqueda se muestran en la consola")
        console.log(`Coincidencias de Busqueda`)
        alert(idEncontrado)
        console.log(idEncontrado)
    }
}

//Menu Del sistema - POP UP del usuario

function sistemadeStock(){
    let ingresoUsuario = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver Stock del Deposito
                        2 - Agregar un Articulo al Stock 
                        3 - Eliminar producto del stock
                        4 - Buscar un producto con su ID:                       
                        0 - Para salir
                        `))
    menu(ingresoUsuario)
}

//Funcion Switch que llama a las funciones antes creadas en base a la seleccion del usuario
function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias por Utilizar nuestro sistema de Stock`)
    break    
        case 1:
            mostrarStock(stock)
      	break 
   	    case 2: 
           nuevoProducto(stock)
      	break 
   	    case 3: 
           borrarUnProducto(stock)
      	break
        case 4: 
            buscarPorID()
      	break
      	break
        default: 
    alert(`Si Finalizo su trabajo y desea salir, presione 0`)
    }
}

//Para salir del Sistema de Stock y vuelve a la pantalla principal dle html
let salir 
while(salir != true){
    sistemadeStock()
    
}