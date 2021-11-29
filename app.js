"use strict";
//-------------------Prototipos
// prototype == prototipo creado por el ususrario
// _proto_ == prototipo heredado o creado por el DOM

//------------------------------"use strict"
// convierte errores de javascript en excepciones
//  evita que se realize el codigo en sitaxsis erradas
// modificar propiedades
// nno se puede agregar propiedades a un string
// no existen multiples variables en una funcion
// no se pueden eliminar variables
// delete se usa para eliminar propiedades
// las palabras reservadas no se pueden definir como variables
// el parametro this se elimina
// los numeros octales se representan con una "o" adelante
// argumetns y eval no pueden ser variables

// const obj = {};

// Object.defineProperty(obj, "nombre", { value: "pedro", writeable: false });

// console.log(obj.nombre)

//-------------------------------------Funciones Flecha
// si solo se realiza una linea de codigo y una sola expresion la funcion se retorna automaticamente
// this contextual == this es Window afuera de cualquier funcion
// funciones recursivas

// const validarEdad = (msg) => {
//   let edad;
//   try {
//     if (msg) {
//       edad = prompt(msg);
//     } else {
//       edad = prompt("introduce tu edad");
//       edad = parseInt(edad);
//       if (isNaN(edad)) throw "introduce un numero e la edad";
//       if (edad > 18) {
//         console.log("sos mayor de edad");
//       } else {
//         console.log("sos menor de edad");
//       }
//     }
//   } catch (e) {
//     validarEdad(e);
//   }
// };

// clausulas == funciones que retornan otras funciones

const cambiarTamaño = (tamaño) => {
  return () => {
    document.querySelector(".texto").style.fontSize = `${tamaño}px`;
  };
};

let px12 = cambiarTamaño(12);
let px14 = cambiarTamaño(14);
let px16 = cambiarTamaño(16);

document.querySelector(".t12").addEventListener("click", px12);
document.querySelector(".t14").addEventListener("click", px14);
document.querySelector(".t16").addEventListener("click", px16);

// parametros por defecto____________________parametro rest
// el parametro rest va siempre al final de los parametros

let num1;
let num2;

const suma = (...num) => {
  num1 = parseInt(prompt("ingrese numero 1"));
  num2 = parseInt(prompt("ingrese numero 2"));
  let resultado = 0;
  for (let i = 0; i < num.length; i++) {
    resultado += parseInt(num[i]);
  }
  document.querySelector(
    ".texto"
  ).innerHTML += `<div class="resultado">${resultado}</button>`;

  return resultado;
};

document
  .querySelector(".suma")
  .addEventListener("click", () => suma(num1, num2));

//__________________________________________-condicional (ternario)
//condicion ? verdadero : falso

// let edad = Math.random() * 80;

// edad > 18
//   ? console.log("es mayor de edad")
//   : (console.log(" es menor de edad"), console.log(" no puede pasar"));

//___________________________________________Operador spread
// operador del paramtro rest
// convierte un array en sus valores
// añadir arrays
// concatenar arrays
// como argumento rest

let arr = ["manzana", "pera", "kiwi"];
let arr2 = ["kiwi", "banana"];

arr.push(...arr2);

let arr3 = [...arr, ...arr2];

// console.log(arr3);

const sumar = (num1, num2) => {
  //   console.log(num1 + num2);
};

let array = [Math.random() * 10, Math.random() * 10];
sumar(...array);

// ___________________________________________Objeto Date
// getDate()
// getDays()
// getMonth()
// getYear()
// getHours()
// getMinutes()
// getSeconds()

// api == interfaz de  progrmacion de aplicaciones
// api rest == se encian a sitios web por informacion

const fecha = new Date();

// console.log(fecha.getYear() + 1900);
// console.log(fecha.getMonth() + 1);
// console.log(fecha.getDay() + 1);
// console.log(fecha.getHours());
// console.log(fecha.getMinutes());
// console.log(fecha.getSeconds());

const addZeros = (n) => {
  if (n.toString().length < 2) {
    return "0".concat(n);
  } else {
    return n;
  }
};

const actualizarHora = () => {
  const time = new Date();
  let hora = addZeros(time.getHours());
  let min = addZeros(time.getMinutes());
  let seg = addZeros(time.getSeconds());
  document.querySelector(".hora").textContent = hora;
  document.querySelector(".min").textContent = min;
  document.querySelector(".seg").textContent = seg;
};

actualizarHora();

setInterval(actualizarHora, 1000);

//________________________-LocalStorage y SesionStorage
// setItem() definir
// getItem() obtener
// removeItem() remover
// clear() remueve todos los elementos

//_________________________________-Drag &Droop
//----Eventos del objeto
//dragStart
//drag
//dragEnd
//----Eventos de Zona
//dragenter
//dragover
//drop
//dragleave
// const circulo = document.querySelector(".circulo");

// // circulo.addEventListener("dragstart", () => console.log(1));
// // circulo.addEventListener("drag", () => console.log(2));
// // circulo.addEventListener("dragend", () => console.log(3));

// const rectangulo = document.querySelector(".cuadrado");
// rectangulo.addEventListener("dragenter", () => console.log(1));
// rectangulo.addEventListener("dragover", (e) => {
//   e.preventDefault();
//   console.log(2);
// });
// // rectangulo.addEventListener("drop", () => console.log(3));
// rectangulo.addEventListener("dragleave", () => console.log(4));

// //_________________________porpiedad Datatransfer
// // setData
// // getData

// circulo.addEventListener("dragstart", (e) => {
//   e.dataTransfer.setData("text-plain", e.target.className);
// });
// rectangulo.addEventListener("drop", (e) => {
//   console.log(e.dataTransfer.getData("text-plain"));
// });

const zona = document.querySelector(".zona");
zona.addEventListener("dragover", (e) => {
  e.preventDefault();
});

zona.addEventListener("drop", (e) => {
  let n = e.dataTransfer.getData("textura");
  zona.style.background = `url("/textura${n}.jpg")`;
  zona.style.backgroundSize = "cover";
});
for (
  let i = 1;
  i < document.querySelector(".texturas").children.length + 1;
  i++
) {
  document
    .querySelector(`.textura${i}`)
    .addEventListener("dragstart", (e) => transferirTextura(i, e));
}

const transferirTextura = (n, e) => {
  e.dataTransfer.setData("textura", n);
};

//__________________________________________Geolocalizacion
// navigator
// geolocation
// getCurrentPosition(posicion,error,options)
// watchPosition()

const geolocation = navigator.geolocation;

const posicion = (pos) => {
  //   console.log(pos);
};

const err = () => {
  //   console.log(e);
};

const options = {
  maximumAge: 0,
  setTimeout: 3000,
  enableHightAccuracy: true,
};

geolocation.getCurrentPosition(posicion, err, options);

//_______________________________________Hisotrial
// back()
// forward()
// go()
// evento popState
// pushSate() == crear una nueva entrada en el historial
// replaceState() == cambia la url sin agregar entradas al historial

// console.log(location.href)

//__________________________________________FileReader
// ReadAsText()

// const archivo = document.getElementById("archivo");
// archivo.addEventListener("change", (e) => {
//   leerArchivo(archivo.files);
// });

// const leerArchivo = (ar) => {
//   for (var i = 0; i < ar.length; i++) {
//     const reader = new FileReader();
//     reader.readAsText(ar[i]);
//     reader.addEventListener("load", (e) => {
//       console.log(JSON.parse(e.currentTarget.result));
//     });
//   }
// };

// ReadAsDataURL()

const archivo = document.getElementById("archivo");
archivo.addEventListener("change", (e) => {
  leerArchivo(archivo.files);
});

const leerArchivo = (ar) => {
  for (var i = 0; i < ar.length; i++) {
    const reader = new FileReader();
    reader.readAsDataURL(ar[i]);
    reader.addEventListener("load", (e) => {
      let newImg = `<img src="${e.currentTarget.result}" id="newImg">`;
      document.querySelector(".resultado").innerHTML += newImg;
    });
  }
};

//Problema 1

const zonaArrastre = document.querySelector(".zona-arrastre");
zonaArrastre.addEventListener("dragover", (e) => {
  zonaArrastre.style.border = "4px dashed black";
  e.preventDefault();
});
zonaArrastre.addEventListener("dragleave", (e) => {
  zonaArrastre.style.border = "3px dashed grey";
});
zonaArrastre.addEventListener("drop", (e) => {
  zonaArrastre.style.border = "3px dashed grey";
  cargarVideo(e.dataTransfer.files[0]);
  e.preventDefault();
});

const cargarArchivo = (archive) => {
  const reader = new FileReader();
  reader.readAsText(archive);
  reader.addEventListener("load", (e) => {
    document.querySelector(".zona-arrastre").textContent =
      e.currentTarget.result;
    console.log(e.currentTarget);
  });
};
const cargarImagen = (archive) => {
  const reader = new FileReader();
  reader.readAsDataURL(archive);
  reader.addEventListener("load", (e) => {
    let url = URL.createObjectURL(archive);
    let img = document.createElement("IMG");
    img.setAttribute("src", url);
    img.setAttribute("id", "img-crg");
    document.querySelector(".zona-arrastre").appendChild(img);
  });
};
const cargarVideo = (archive) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(archive);
  reader.addEventListener("progress", (e) => {
    let carga = Math.round(e.loaded / archivo.size);
    console.log(carga);
  });
  reader.addEventListener("load", (e) => {
    let video = new Blob([new Uint8Array(e.currentTarget.result)], {
      type: "video/mp4",
    });
    let url = URL.createObjectURL(video);
    let img = document.createElement("VIDEO");
    img.setAttribute("src", url);
    img.setAttribute("id", "img-crg");
    document.querySelector(".resultado2").appendChild(img);
    img.play();
  });
};

//_________________________________________ IndexeDB
// Base de datos no relacionada
// Create
// Read
// Update
// Delete
// Open()
// ------------------------Eventos
// onupgradeneeded ()
// onsucces ()
// onerror()
//--------------------------Creacion de Objetos
// metodo Objectstore()
// metodo Transaction ()
// IDBTransaction.objecStore()
// IDBObjectstore.add()

let IDBRequest = indexedDB.open("Database", 1);

console.log(IDBRequest);

IDBRequest.addEventListener("upgradeneeded", () => {
  const db = IDBRequest.result;
  db.createObjectStore("nombres", {
    autoIncrement: true,
  });
});
IDBRequest.addEventListener("success", () => {
  console.log("todo ok");
});
IDBRequest.addEventListener("error", () => {
  console.log("error");
});

const addObjeto = (Object) => {
  const db = IDBRequest.result;
  const IDBtransaction = db.transaction("nombres", "readwrite");
  const objectStore = IDBtransaction.objectStore("nombres");
  objectStore.add(Object);
  IDBtransaction.addEventListener("complete", () => {
    console.log("objeto agregado correctamente");
  });
};
const readObjeto = () => {
  const db = IDBRequest.result;
  const IDBtransaction = db.transaction("nombres", "readonly");
  const objectStore = IDBtransaction.objectStore("nombres");
  const cursor = objectStore.openCursor();
  cursor.addEventListener("success", () => {
    if (cursor.result) {
      console.log(cursor.result.value);
      cursor.result.continue();
    } else {
      console.log("todos los datos fueron leidos");
    }
  });
};
const modificarObjeto = (key, Object) => {
  const db = IDBRequest.result;
  const IDBtransaction = db.transaction("nombres", "readwrite");
  const objectStore = IDBtransaction.objectStore("nombres");
  objectStore.put(Object, key);
  IDBtransaction.addEventListener("complete", () => {
    console.log("objeto agregado correctamente");
  });
};
const eliminarObjeto = (key) => {
  const db = IDBRequest.result;
  const IDBtransaction = db.transaction("nombres", "readwrite");
  const objectStore = IDBtransaction.objectStore("nombres");
  objectStore.delete(key);
  IDBtransaction.addEventListener("complete", () => {
    console.log("objeto eliminado correctamente");
  });
};

//_________________________________________matchMedia
// matchMedia()
// evento onchange

// const mq = matchMedia("(max-width: 500px)");
// const caja = document.querySelector(".caja");

// mq.addEventListener("onchange", () => {
//   if (mq.matches) {
//     caja.classList.replace("caja", ".responsive-caja");
//   } else if (mq.className == "responsive-caja") {
//     caja.classList.replace("responsive-caja", ".caja");
//   }
// });

// __________________________________Intersection Observer
// intersection Observer()

const cajas = document.querySelectorAll(".caja");

const verifyVisibility = (entries) => {
  for (let enttry of entries) {
    if (enttry.isItersecting == true) {
      console.log("se esta viendo la caja3");
    }
  }
};

const Observer = new IntersectionObserver(verifyVisibility);

for (const caja of cajas) {
  Observer.observe(caja);
}

// _____________________________________________-Lazy Load

const publicaciones = document.querySelector(".publicacion");
let contador = 0;

const cargarmasPubliaciones = (entry) => {
  if (entry[0].isItersecting) {
    console.log(entry);
    cargarPubliaciones(4);
  }
};

const Observer2 = new IntersectionObserver(cargarmasPubliaciones);

const createPublication = (name, content) => {
  const container = document.createElement("DIV");
  const comentarios = document.createElement("DIV");
  const contenido = document.createElement("P");
  const h3 = document.createElement("H3");
  const btnComentario = document.createElement("INPUT");
  const btnEnviar = document.createElement("INPUT");

  container.classList.add("publicacion");
  comentarios.classList.add("comentarios");
  btnEnviar.classList.add("enviar");
  btnEnviar.type = "submit";
  btnEnviar.value = "Enviar";
  btnComentario.classList.add("comentario");
  btnComentario.setAttribute("placeholder", "Introduce un comentario");
  h3.textContent = name;
  contenido.textContent = content;

  comentarios.appendChild(btnComentario);
  comentarios.appendChild(btnEnviar);
  container.appendChild(h3);
  container.appendChild(contenido);
  container.appendChild(comentarios);

  return container;
};

const cargarPubliaciones = async (num) => {
  const request = await fetch("publish.txt");
  const conten = await request.json();
  const arr = conten.array;
  const documentFrag = document.createDocumentFragment();
  for (let i = 0; i < num; i++) {
    if (arr[contador] != undefined) {
      const newPubliacion = createPublication(
        arr[contador].name,
        arr[contador].content
      );
      documentFrag.appendChild(newPubliacion);
      contador++;
      if (i == num - 1) {
        Observer2.observe(newPubliacion);
      } else {
        let noMore = document.createElement("H3");
        noMore.textContent = " No hay mas publiacaciones";
        publicaciones.appendChild(documentFrag);
      }
    }
  }
  publicaciones.appendChild(documentFrag);
};

// cargarPubliaciones(5);

//_________________________________________Visibility change

// addEventListener("visibilitychange", (e) => {
//   if (e.target.visibilityState == "visible") {
//     document.write("por que abandonaste la pagina");
//   } else {
//     alert("volviste");
//   }
// });

// ________________________________________Notification

if (!("Notification" in window)) {
  console.log("las notificaciones no estan permiotidas");
}

Notification.requestPermission(() => {
  if (Notification.permission == "granted") {
    // new Notification("Hey yujuu");
  }
});

// ________________________________________________Web Workers
// Archivo que se ejecuta en segundo plano
// Dedicated Worker
// Service Worker
// Abstract Worker
// solamente se puede acceder al worker si se encuentra en el mismo puerto de origen

const worker2 = new Worker("worker.js");
document
  .querySelector(".buttonWorker")
  .addEventListener("click", () => EjecutarBucle());
worker2.addEventListener("message", () => {
  worker2.terminate();
});
const EjecutarBucle = () => {
  worker2.postMessage("que onda todo bien");
  worker2.terminate();
};

const cargarData = async (div) => {
  const req = await fetch("publish.txt");
  const res = await req.json();
  const arr = res;
  document.querySelector(div).innerHTML = arr;
};

//__________________________________________Objeto Navigator

// console.log("")




