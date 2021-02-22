/** OBJETOS **/

class item {
    constructor(nombre, prenda, precio, stock, color) {
        this.nombre = nombre;
        this.prenda = prenda;
        this.precio = precio;
        this.stock = stock;
        this.color = color;
    }
}

const item1 = new item("Old Skool", "shoes", 65, 10, "pea green color");
const item2 = new item("Old Skool", "shoes", 65, 20, "classic color");
const item3 = new item("Love Hate", "Pullover Hoodie", 59.5, 6, "black");
const item4 = new item("La Costa Slide-On", "sandals", 35, 4, "red");
const item5 = new item("New Varsity Crew", "sock", 10, 20, "multi");
const item6 = new item("Vans Embarcadero", "pants", 54.5, 14, "beige");
const item7 = new item("Love Hate Classic", "tshirt", 29.5, 12, "white");
const item8 = new item("X Where's Waldo?", "tshirt", 54.5, 15, "pink");
const item9 = new item("New Varsity Pocket", "tshirt", 29.5, 13, "black");
const item10 = new item("Anaheim Factory Sk8-Hi", "shoes", 100, 19, "black");
const item11 = new item("Love You To Death", "shoes", 60, 24, "white");
const item12 = new item("Classic Sport Sk8-Hi", "shoes", 70, 16, "blue");
const item13 = new item("Old Skool Bandana", "shoes", 65, 14, "white");
const item14 = new item("UltraRange EXO Hi MTE", "shoes", 125, 6, "brown");
const item15 = new item("Old Skool blue", "shoes", 65, 8, "blue");
const item16 = new item("CLASSIC V BOYFRIEND", "jacket", 80, 8, "blue");
const item17 = new item("SK8-HI MTE 2.0 DX", "shoes", 110, 32, "blue");
const item18 = new item("IN THE KNOW", "jacket", 69.5, 13, "white");
const item19 = new item("CORE BASIC WOMENS BEANIE", "jacket", 70.5, 3, "black");
const item20 = new item("VANS JACKET MTERQ", "jacket", 50, 2, "black");
const item21 = new item("UA SK8-HI MTE 2.0 DX", "jacket", 118, 5, "green");
const item22 = new item("DRILL LONG CHORE VANS", "shoes", 180, 12, "pink");
const item23 = new item("CORE BASIC WOMENS BEANIE", "hat", 18, 10, "pink");
const item24 = new item("STANDARD MID MTE", "shoes", 129.95, 10, "pink");
const item25 = new item("SHELBY SHOES VANS MTE", "shoes", 110, 19, "black");
const item26 = new item("GALACTIC SPIRAL PUFFER", "hat", 12, 15, "pink");
const item27 = new item("SHELBY VANS JACKET MTE", "jacket", 180, 12, "blue");
const item28 = new item("EMBERS SHOES VANS", "shoes", 130, 15, "black");
const item29 = new item("ULTRARANGE EXO HI MTE", "jogging suit", 125, 15, "pink");
const item30 = new item("VANS MODE CLASSIC", "shoes", 110, 31, "white");

//******** *********/

let carrito = [];

if (localStorage.getItem("carrito") != null) {
    let carritoStorage = JSON.parse(localStorage.getItem("carrito"));
    carrito = carritoStorage;
  }

/** FUNCIONES **/

//agregar al carrito
function carro(producto) {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
}

//vaciar carrito
function vaciar(){
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    carrito = carrito;
}


//eliminar item
function eliminar(id){
    carrito.pop(id);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    carrito = carrito;
}


//ver carrito
function verCarrito() {
    var shop;
    for (let i = 0; i < carrito.length; i++) {

        shop += `
       <div class="verCarritos">
            
        <div id=${i}>

        <button class="btn-delate" onclick="eliminar(${i});" >x</button>

             ${carrito[i].nombre}
 
             Price: $${carrito[i].precio}

        </div>  

       </div>
                `;

    document.getElementById("verproductos").innerHTML = shop;
    document.getElementById("cantidad").innerHTML =  carrito.length;
    Total();
    
    
    
        
    }
}

function Total() {
    var total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
        
    }
document.getElementById("total").innerHTML = `$ ${total}`;
}


$(document).ready(function(){

    $("#see").on( "click", function() {
        $('#verproductos').show(); //muestro mediante id
     });

     $("#hide").on( "click", function() {
        $('#verproductos').hide(); //muestro mediante id
     });

     $("#clear").on( "click", function() {
        vaciar();
        $('#cart').load(document.URL +  ' #cart');
     });

     $(".btn-delate").on( "click", function() {
        location.reload();

     });
    
     $(".add-to-cart").click(function(){
        
        $('.add-to-cart').animate({           
            down: '150px',
            fontSize: '2.5rem',
        }, 'slow', function () { $(this).removeAttr('style'); });
        $('.add-to-cart').html('ADDED ITEM!')

    });
    

});

