//funciones
function verPedidoFinal() {
    for (const el of pedidoFinal) {
      pedidoFinal.push(el);
      console.log(pedidoFinal);
    }
  }
  function tiempoDeEspera() {
    let minutos = Math.max();
  }
  
  const pedidoFinal = [];
  
  function elegirIngredientes(ingredientes) {
    let ingredientesElegidos = [];
    let esOpcionSalir = false;
    while (!esOpcionSalir && ingredientesElegidos.length < ingredientes.length) {
      let ingredienteElegido = null;
      let ingredienteValido = false;
      while (!ingredienteValido || ingredienteElegido === null) {
        ingredienteElegido = prompt('Agregue un ingrediente: ' + ingredientes.map((ingrediente, index) => (index + 1) + '. ' + ingrediente) + ', 0. Salir');
        ingredienteValido = !isNaN(Number(ingredienteElegido)) && ingredienteElegido >= 0 && ingredienteElegido <= ingredientes.length;
        if (!ingredienteValido) {
          alert('Por favor, elija una opción válida.');
        }
      }
      if (Number(ingredienteElegido) === 0) {
        esOpcionSalir = true;
      } else {
        ingredientesElegidos.push(ingredientes[ingredienteElegido]);
      }
    }
    return ingredientesElegidos;
  }
  
  class Comida {
    constructor(
      nombre,
      cantidadIngredientes,
      ingredientes,
      aderezos,
      guarniciones,
      precio,
      tiempoDeCoccion
    ) {
      this.nombre = nombre;
      this.cantidadIngredientes = cantidadIngredientes;
      this.ingredientes = ingredientes;
      this.aderezos = aderezos;
      this.guarniciones = guarniciones;
      this.precio = precio;
      this.tiempoDeCoccion = tiempoDeCoccion;
    }
  }
  
  const aderezos = ["Mayonesa", "Ketchup", "Mostaza"];
  const ingredientesSimples = ["Lechuga", "Tomate"];
  const ingredientesCompletos = ["Lechuga", "Tomate", "Jamón", "Queso", "Huevo"];
  const ingredientesMilanesa = ["Carne", "Pollo"];
  
  const sanguches = [
    new Comida("Sanguche de pollo simple", 0, [], aderezos, [], 1500, 7),
    new Comida("Sanguche de pollo clásico", 2, ingredientesSimples, aderezos, [], 1600, 7),
    new Comida("Sanguche de pollo completo", 5, ingredientesCompletos, aderezos, [], 1700, 7),
    new Comida("Sanguche de carne simple", 0, [], aderezos, [], 1800, 7),
    new Comida("Sanguche de carne clásico", 2, ingredientesSimples, aderezos, [], 1900, 7),
    new Comida("Sanguche de carne completo", 5, ingredientesCompletos, aderezos, [], 2000, 7),
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
    new Categoria("Milanesa al plato con guarnición", []),
    new Categoria("A la plancha con guarnición", []),
    new Categoria("Tortilla de papa", []),
    new Categoria("Tartas", []),
  ];
  
  function salir() {
    alert("Gracias por visitarnos!");
  }
  
  function elegirComida(categoriaElegida) {
      const comidas = categoriaElegida.comidas;
      const promptComidas = new PromptMenu("¿Qué comida va a elegir?", comidas);
      let indexComidaElegida = null
      let esComidaValida = false;
      while (!esComidaValida || !indexComidaElegida) {
        indexComidaElegida = prompt(promptComidas.pregunta + ' ' + promptComidas.opciones.map((opcion, index) => (index + 1) + '. ' + opcion.nombre))
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
          ingredientesElegidos = elegirIngredientes(comidaElegida.ingredientes);
        }
  
        let aderezosElegidos = [];
        if (comidaElegida.aderezos.length > 0) {
          // aderezosElegidos = elegirAderezos();
        }
  
        let guarnicionesElegidas = [];
        if (comidaElegida.guarniciones.length > 0) {
          // guarnicionesElegidas = elegirGuarniciones();
        }
        pedidoFinal.push(new ItemPedido(comidaElegida.nombre, ingredientesElegidos, aderezosElegidos, guarnicionesElegidas, comidaElegida.precio, comidaElegida.tiempoDeCoccion));
      }
  
      // ESTO LO PUSE PARA VERIFICAR NADA MÁS --> ACA HAY QUE MOSTRAR PROMPT MENÚ FINAL CON OPCIONES
      console.log(pedidoFinal); 
  }
  
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
  
  /**
   * La clase PromptOpcion representa una opción individual que el usuario puede elegir.
   * - 'nombre' es un string que describe la opción.
   * - 'accion' es una función que se ejecutará cuando se elija esta opción.
   *
   * Esta clase es importante porque nos permite agrupar la descripción de una opción
   * con la acción que realizará, manteniendo nuestro código organizado y fácil de entender.
   */
  class PromptOpcion {
    constructor(nombre, accion) {
      this.nombre = nombre;
      this.accion = accion;
    }
  }
  
  /**
   * La clase PromptMenu representa un menú completo de opciones que se presentará al usuario.
   * - 'pregunta' es un string que se mostrará al usuario, pidiéndole que elija una opción.
   * - 'opciones' es un array de objetos PromptOpcion, cada uno representando una opción que el usuario puede elegir.
   *
   * Esta clase es crucial porque nos permite agrupar todas las opciones posibles bajo una sola pregunta,
   * facilitando la creación de menús de selección y haciendo el código más modular y reutilizable.
   */
  class PromptMenu {
    constructor(pregunta, opciones) {
      this.pregunta = pregunta;
      this.opciones = opciones;
    }
  }
  
  /*
   * opcionesInicio es un array de objetos PromptOpcion. Cada objeto representa una acción específica
   * que el usuario puede elegir realizar, como "Ver la carta", "Buscar" o "Salir".
   *
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
  const promptInicio = new PromptMenu(
    "Buenas! ¿Que desea hacer?",
    opcionesInicio
  );
  
  /*
   * La función mostrarInicio() maneja la lógica de mostrar el menú al usuario, aceptar su entrada y
   * asegurarse de que la entrada sea válida. Esto demuestra cómo las clases ayudan a organizar y
   * modularizar el código, haciendo que cada parte sea más manejable y comprensible.
   */
  
  /**
   * La función mostrarInicio() es responsable de interactuar con el usuario, mostrando el menú de inicio,
   * aceptando la selección del usuario y asegurándose de que sea válida.
   *
   * 1. **while(!esOpcionValida):**
   *    - Este bucle continuará hasta que el usuario ingrese una opción válida.
   *      Esencial para asegurarse de que el programa no proceda con una selección inválida.
   *
   * 2. **const opcionElegida = prompt(...):**
   *    - Esta línea muestra un cuadro de diálogo al usuario con las opciones disponibles y
   *      espera una entrada del usuario.
   *
   * 3. **esOpcionValida = !isNaN(Number(opcionElegida)) ...:**
   *    - Esta línea verifica que la entrada del usuario sea un número válido y esté dentro del
   *      rango de opciones disponibles.
   *
   * 4. **if (!esOpcionValida):**
   *    - Si la opción elegida no es válida, muestra una alerta informando al usuario que
   *      la opción es inválida.
   *
   * 5. **promptInicio.opciones[opcionElegida].accion();**
   *    - Una vez que se ha elegido una opción válida, esta línea ejecuta la acción asociada
   *      con la opción elegida.
   *
   * Esta función es un buen ejemplo de cómo manejar la entrada del usuario de manera robusta, asegurándose de
   * que el usuario solo pueda proceder con una entrada válida y proporcionando retroalimentación útil en caso
   * de una entrada inválida.
   */
  function iniciar() {
    let opcionElegida = null;
    let esOpcionValida = false;
    while (!esOpcionValida || !opcionElegida) {
      opcionElegida = prompt(
        promptInicio.pregunta +
          " " +
          promptInicio.opciones.map((opcion) => opcion.nombre)
      );
      esOpcionValida =
        !isNaN(Number(opcionElegida)) &&
        opcionElegida >= 0 &&
        opcionElegida <= promptInicio.opciones.length;
      if (!esOpcionValida) {
        alert("La opción ingresada es inválida, pruebe de nuevo");
      }
    }
    promptInicio.opciones[opcionElegida].accion();
  }
  
  // B. CARTA
  const promptCarta = new PromptMenu("¿Qué desea pedir?", cartaCompleta);
  
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
  
  //arrays
  const tipoSanguche = ["Pollo", "Carne", "Churrasco", "Suprema de pollo"];
  const empanadas = ["Pollo", "Carne", "Jamón y queso"];
  const tipoDeTortillas = ["Simple", "Rellena"];
  const milaAlPlato = ["simple", "Clásica", "Napolitana"];
  const guarniciones = [
    "Papas fritas",
    "Puré de papa",
    "Ensalada",
    "Arroz con queso",
  ];
  const aLaPlancha = ["Suprema de pollo", "Churrasco", "Bife"];
  
  const comidas = [
    new Comida("Tarta de jamón y queso", "Tartas", "Jamón y queso", 1400, 30),
    new Comida("Tarta de pollo", "Tartas", "Pollo y huevo", 1400, 30),
    new Comida("Ravioles con Tuco", "Plato del día", "Ravioles, carne, salsa, queso rallado y pan", 1700, 60),
    new Comida("Pastel de papa", "Plato del día", "Puré de papa, carne, huevo, queso, pan", 1500, 60),
    new Comida("Milanesa simple con guarnición", "Milanesas al plato", 1, ingredientesMilanesa, guarniciones, 2200, 20),
    new Comida("Milanesa clásica con guarnición", "Milanesas al plato", 1, ingredientesMilanesa, guarniciones, 2200, 20),
    new Comida("Milanesa napolitana con guarnición", "Milanesas al plato", 1, ingredientesMilanesa, guarniciones, 2200, 20),
    new Comida("Tortilla de papa", "Tortillas", "Papa, huevo, cebolla, jamón y queso", 1500, 20),
    new Comida("Tortilla de papa rellena", "Tortillas", "Papa, huevo, cebolla, jamón y queso", 1500, 20),
    new Comida("Tortilla de papa", "Tortillas", "Papa y huevo", 1500, 20),
  ];
  
  iniciar();
  
  let nombreComida = "";
  let total = 0;
  let tiempo = 0;