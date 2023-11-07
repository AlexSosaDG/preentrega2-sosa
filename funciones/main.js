/**
 * La clase PromptOpcion representa una opción individual que el usuario puede elegir.
 * - 'nombre' es un string que describe la opción.
 * - 'accion' es una función que se ejecutará cuando se elija esta opción.
 *
 * permite agrupar la descripción de una opción
 */
class PromptOpcion {
    constructor(nombre, accion) {
        this.nombre = nombre;
        this.accion = accion;
    }
}

/*
 * La clase PromptMenu representa un menú completo de opciones que se presentará al usuario.
 * - 'pregunta' es un string que se mostrará al usuario, pidiéndole que elija una opción.
 * - 'opciones' es un array de objetos PromptOpcion, cada uno representando una opción que el usuario puede elegir.
 *
 * agrupa todas las opciones posibles bajo una sola pregunta,
 */
class PromptMenu {
    constructor(pregunta, opciones) {
        this.pregunta = pregunta;
        this.opciones = opciones;
    }
}
//funciones

function tiempoDeEspera() {
    let minutos = Math.max();
}



function elegirGuarniciones(guarniciones) {
    let guarnicionesElegidas = [];
        let guarnicionElegida = null;
        let guarnicionValida = false;
        while (!guarnicionValida || guarnicionElegida === null) {
            guarnicionElegida = prompt("Eleguir guarnicion: " + guarniciones.map((guarnicion, index) => (index + 1) + ". " + guarnicion) + " 0. Salir");
            guarnicionValida = !isNaN(Number(guarnicionElegida)) && guarnicionElegida >= 0 && guarnicionElegida <= guarniciones.length;
            if (!guarnicionValida) {
                alert("Por favor, elija una opción válida.");
            }
        }
        if (Number(guarnicionElegida) > 0) {
            guarnicionesElegidas.push(guarniciones[guarnicionElegida - 1]);
        } 
    return guarnicionesElegidas;
}

function elegirAderezos(aderezos) {
    let aderezosElegidos = [];
    let esOpcionSalir = false;
    while (!esOpcionSalir && aderezosElegidos.length < aderezos.length) {
        let aderezoElegido = null;
        let aderezoValido = false;
        while (!aderezoValido || aderezoElegido === null) {
            aderezoElegido = prompt("Agregue aderezos: " + aderezos.map((aderezo, index) => (index + 1) + ". " + aderezo) + " 0. Salir");
            aderezoValido = !isNaN(Number(aderezoElegido)) && aderezoElegido >= 0 && aderezoElegido <= aderezos.length;
            if (!aderezoValido) {
                alert("Por favor, elija una opción válida.");
            }
        }
        if (Number(aderezoElegido) === 0) {
            esOpcionSalir = true;
        } else {
            aderezosElegidos.push(aderezos[aderezoElegido - 1]);
        }
    }
    return aderezosElegidos;
}

function elegirIngredientes(ingredientes, maxCantIng) {
    let ingredientesElegidos = [];
    let esOpcionSalir = false;
    while (!esOpcionSalir && ingredientesElegidos.length < ingredientes.length && ingredientesElegidos.length < maxCantIng) {
        let ingredienteElegido = null;
        let ingredienteValido = false;
        while (!ingredienteValido || ingredienteElegido === null) {
            ingredienteElegido = prompt("Agregue un ingrediente: " + ingredientes.map((ingrediente, index) => (index + 1) + ". " + ingrediente) + " 0. Salir");
            ingredienteValido = !isNaN(Number(ingredienteElegido)) && ingredienteElegido >= 0 && ingredienteElegido <= ingredientes.length;
            if (!ingredienteValido) {
                alert("Por favor, elija una opción válida.");
            }
        }
        if (Number(ingredienteElegido) === 0) {
            esOpcionSalir = true;
        } else {
            ingredientesElegidos.push(ingredientes[ingredienteElegido - 1]);
        }
    }
    return ingredientesElegidos;
}

class Comida {
    constructor(nombre, cantidadIngredientes, ingredientes, aderezos, guarniciones, precio, tiempoDeCoccion) {
        this.nombre = nombre;
        this.cantidadIngredientes = cantidadIngredientes;
        this.ingredientes = ingredientes;
        this.aderezos = aderezos;
        this.guarniciones = guarniciones;
        this.precio = precio;
        this.tiempoDeCoccion = tiempoDeCoccion;
    }
}
//arrays
const aLaPlancha = ["Suprema de pollo", "Churrasco", "Bife"];
const rellenoEmpanada = ["Pollo", "Carne", "Jamón y queso"]
const aderezos = ["Mayonesa", "Ketchup", "Mostaza"];
const ingredientesSimples = ["Lechuga", "Tomate"];
const ingredientesCompletos = ["Lechuga", "Tomate", "Jamón", "Queso", "Huevo"];
const ingredientesMilanesa = ["Carne", "Pollo"];
const ingredientesTarta = ["Jamón", "Queso", "Huevo"];
const adicionalMenuDelDía = ["Queso rallado", "Pan", "Sal"];
const ingredientesTortilla = ["Cebolla", "Jamón", "Queso"];
const guarnicion = ["Papas fritas", "Puré de papa", "Ensalada", "Arroz con queso"];

const cortesALaPlancha = [
    new Comida("Suprema de pollo", [], [], [], guarnicion, 2200, 20),
    new Comida("Bife", [], [], [], guarnicion, 2300, 20),
    new Comida("Churrasco", [], [], [], guarnicion, 2400, 20),
]

const sanguches = [
    new Comida("Sanguche de pollo simple", 0, [], aderezos, [], 1500, 7),
    new Comida("Sanguche de pollo clásico", 2, ingredientesSimples, aderezos, [], 1600, 7),
    new Comida("Sanguche de pollo completo", 5, ingredientesCompletos, aderezos, [], 1700, 7),
    new Comida("Sanguche de carne simple", 0, [], aderezos, [], 1800, 7),
    new Comida("Sanguche de carne clásico", 2, ingredientesSimples, aderezos, [], 1900, 7),
    new Comida("Sanguche de carne completo", 5, ingredientesCompletos, aderezos, [], 2000, 7),
];
const empanadas = [
    new Comida("Empanada de pollo", [], [], [], [], 300, 5),
    new Comida("Empanada de carne", [], [], [], [], 300, 5),
    new Comida("Empanada de jamón y queso", [], [], [], [], 300, 5),
];

const tarta = [
    new Comida("Tartas", 3, ingredientesTarta, [], [], 1400, 30),
];

const milanesasaConGuarnicion = [
    new Comida("Milanesa simple con guarnición", 1, ingredientesMilanesa, [], guarnicion, 2200, 20),
    new Comida("Milanesa clásica con guarnición", 1, ingredientesMilanesa, [], guarnicion, 2200, 20),
    new Comida("Milanesa napolitana con guarnición", 1, ingredientesMilanesa, [], guarnicion, 2200, 20),
];

const tortilla = [
    new Comida("Tortilla de papa simple", 0, [], adicionalMenuDelDía, [], 1400, 20),
    new Comida("Tortilla de papa rellena", 2, ingredientesTortilla, adicionalMenuDelDía, [], 1800, 20),
    new Comida("Tortilla de papa completa", 3, ingredientesTortilla, adicionalMenuDelDía, [], 2000, 20),
];

const menuDelDia = [
    new Comida("Ravioles con Tuco", 3, adicionalMenuDelDía, [], [], 1700, 60),
    new Comida("Pastel de papa", 3, adicionalMenuDelDía, [], [], 1700, 60),
];


class ItemPedido {
    constructor(nombre, ingredientes, aderezos, guarnicion, precio, tiempoDeCoccion) {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.aderezos = aderezos;
        this.guarnicion = guarnicion;
        this.precio = precio;
        this.tiempoDeCoccion = tiempoDeCoccion;
    }
}

class Categoria {
    constructor(nombre, comidas) {
        this.nombre = nombre;
        this.comidas = comidas;
    }
}

const cartaCompleta = [
    new Categoria("Sanguches", sanguches),
    new Categoria("Milanesa al plato con guarnición", milanesasaConGuarnicion),
    new Categoria("A la plancha con guarnición", cortesALaPlancha),
    new Categoria("Tortilla de papa", tortilla),
    new Categoria("Tartas", tarta),
    new Categoria("Menú del día", menuDelDia),
];

function salir() {
    alert("Gracias por visitarnos!");
}


const opcionesConfirmarPedido = [
    new PromptOpcion(" 0. Cancelar", salir),
    new PromptOpcion(" 1. Agregar comida", elegirCategoria),
    new PromptOpcion(" 2. Quitar comida", quitarComida), //nuevas funciones------
    new PromptOpcion(" 3. Ver pedido completo", verPedidoFinal), //nuevas funciones------
    new PromptOpcion(" 4. Confirmar pedido", confirmarPedido), //nuevas funciones------  
];

const promptConfirmarPedido = new PromptMenu("¿Que desea hacer ahora?", opcionesConfirmarPedido);

let pedidoFinal = [];
function elegirComida(categoriaElegida) {
    const comidas = categoriaElegida.comidas;
    const promptComidas = new PromptMenu("¿Qué comida va a elegir?", comidas);
    let indexComidaElegida = null
    let esComidaValida = false;
    while (!esComidaValida || !indexComidaElegida) {
        indexComidaElegida = prompt(promptComidas.pregunta + " " + promptComidas.opciones.map((opcion, index) => (index + 1) + '. ' + opcion.nombre))
        esComidaValida =
            !isNaN(Number(indexComidaElegida)) &&
            indexComidaElegida > 0 &&
            indexComidaElegida <= promptComidas.opciones.length;
        if (!esComidaValida) {
            alert('La opcion elegida no es una comida.');
        }
    }
    const comidaElegida = comidas[indexComidaElegida - 1];
    let cantidadElegida = null;
    let esCantidadValida = false;
    while (!esCantidadValida || !cantidadElegida) {
        cantidadElegida = prompt("Ingrese la cantidad de: " + comidaElegida.nombre);
        esCantidadValida = !isNaN(Number(cantidadElegida)) &&
            cantidadElegida > 0 &&
            cantidadElegida <= 100;
        if (!esCantidadValida) {
            alert('La cantidad elegida es inválida, vuelva a intentar.');
        }
    }

    for (let index = 0; index < cantidadElegida; index++) {
        alert('Vamos a armar: ' + comidaElegida.nombre + ' #' + (index + 1));
        let ingredientesElegidos = [];
        if (comidaElegida.cantidadIngredientes > 0) {
            ingredientesElegidos = elegirIngredientes(comidaElegida.ingredientes, comidaElegida.cantidadIngredientes);
        }

        let aderezosElegidos = [];
        if (comidaElegida.aderezos.length > 0) {
             aderezosElegidos = elegirAderezos(comidaElegida.aderezos);
        }

        let guarnicionesElegidas = [];
        if (comidaElegida.guarniciones.length > 0) {
            guarnicionesElegidas = elegirGuarniciones(comidaElegida.guarniciones);
        }
        pedidoFinal.push(new ItemPedido(comidaElegida.nombre, ingredientesElegidos, aderezosElegidos, guarnicionesElegidas, comidaElegida.precio, comidaElegida.tiempoDeCoccion));
    }

    const confirmacionElegida = prompt(promptConfirmarPedido.pregunta + " " + promptConfirmarPedido.opciones.map((opcion) => opcion.nombre));
    opcionesConfirmarPedido[confirmacionElegida].accion();
}


function quitarComida(){
   
    let eliminarPlato = null;
    let platoValido = false;
    while (!platoValido || eliminarPlato === null) {
        eliminarPlato = prompt("¿Qué comida quiere quitar? " + pedidoFinal.map((itemPedido, index) => (index + 1) + ". " + itemPedido.nombre));
        platoValido = !isNaN(Number(eliminarPlato)) && eliminarPlato >= 0 && eliminarPlato <= pedidoFinal.length;
        if (!platoValido) {
            alert("Por favor, elija una opción válida.");
        }
    }
    pedidoFinal.splice(eliminarPlato - 1, 1);
    eliminarPlato = prompt("¿Quiere eliminar otro plato? " + pedidoFinal.map((itemPedido, index) => (index + 1) + ". " + itemPedido.nombre +"0. Continuar"));

    const continuar = prompt(promptConfirmarPedido.pregunta + " " + promptConfirmarPedido.opciones.map((opcion) => opcion.nombre));
    opcionesConfirmarPedido[continuar].accion();
}

function verPedidoFinal() {

    let verListaPedido = alert("Este es su pedido: " + pedidoFinal.map((itemPedido, index) => (index + 1) + ". "  + itemPedido.nombre  + " $" + itemPedido.precio));
    
    const continuar = prompt(promptConfirmarPedido.pregunta + " " + promptConfirmarPedido.opciones.map((opcion) => opcion.nombre));
    opcionesConfirmarPedido[continuar].accion();
}


function  confirmarPedido(precios){
    const totalCosto = precios += pedidoFinal.precio;
    let sumaTotal = prompt("El total de su compra es: " + pedidoFinal.precio() ) ;

}

// --------PASO 2 - B  -------------
function buscarCategoria() {
    let categoriaEncontrada = null;
    let esPalabraValida = false;
    while (!esPalabraValida || !categoriaEncontrada) {
        const palabraClave = prompt("Escriba una palabra clave.");
        categoriaEncontrada = cartaCompleta.filter((categoria) =>
            categoria.nombre.toLowerCase().includes(palabraClave.toLowerCase())
        )[0];
        if (!categoriaEncontrada) {
            alert("No encontramos esa palabra pero puede revisar nuestra carta.");
            console.log(cartaCompleta.toString());
        } else {
            esPalabraValida = true;
        }
    }
    elegirComida(categoriaEncontrada);
}




/*
 * opcionesInicio es un array de objetos PromptOpcion. Cada objeto representa una acción específica
 * que el usuario puede elegir realizar, como "Ver la carta", "Buscar" o "Salir".
 */
const opcionesInicio = [
    new PromptOpcion(" 0. Salir", salir),
    new PromptOpcion(" 1. Ver la carta", elegirCategoria),
    new PromptOpcion(" 2. Buscar por palabra clave", buscarCategoria),  
];



/*
 * promptInicio es una instancia de PromptMenu, que toma una pregunta y el array de opciones como argumentos.
 * Esto crea un menú completo que luego se puede presentar al usuario para que haga una selección.
 */
const promptInicio = new PromptMenu("Buenas! ¿Que desea hacer?", opcionesInicio);


//---------------------------PASO 1--------------------------
function iniciar() {
    //let vacio para asociarlo al prompt inicial
    let opcionElegida = null; 
    //let falso para negarlo después
    let esOpcionValida = false;

    while (!esOpcionValida || !opcionElegida) {
        opcionElegida = prompt(
            promptInicio.pregunta +
            " " +
            promptInicio.opciones.map((opcion) => opcion.nombre)
        );
        esOpcionValida =
            !isNaN(Number(opcionElegida)) && opcionElegida >= 0 && opcionElegida <= promptInicio.opciones.length;
        if (!esOpcionValida) {
            alert("La opción ingresada es inválida, pruebe de nuevo");
        };
    }
    promptInicio.opciones[opcionElegida].accion();
}

// B. CARTA
const promptCarta = new PromptMenu("¿Qué desea pedir?", cartaCompleta);


//----------Paso 2 - A ------------
function elegirCategoria() {
    let categoriaElegida = null;
    let opcionValida = false;
    while (!opcionValida || !categoriaElegida) {
        categoriaElegida = prompt(
            `${promptCarta.pregunta} ${promptCarta.opciones.map(
                (opcion, index) => (index + 1) + '. ' + opcion.nombre
            )}`
        );
        opcionValida =
            !isNaN(Number(categoriaElegida)) &&
            categoriaElegida > 0 &&
            categoriaElegida <= promptCarta.opciones.length;
        if (!opcionValida) {
            alert("La opción ingresada es inválida, pruebe de nuevo.");
        }
    }
    elegirComida(promptCarta.opciones[categoriaElegida - 1]);
}



iniciar();

let total = 0;
let tiempo = 0;