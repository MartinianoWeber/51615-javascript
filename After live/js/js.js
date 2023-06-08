const pokemons = [
  {
    name: "bulbasaur",
    img: "./imagenes/bulbasaur.png",
    attack: 118,
    defense: 111,
    type: "grass",
    hp: 700,
    attacks: [
      {
        name: "hoja afilada",
        type: "grass",
        damage: 15,
      },
      {
        name: "latigo cepa",
        type: "grass",
        damage: 7,
      },
      {
        name: "placaje",
        type: "normal",
        damage: 5,
      },
    ],
  },
  {
    name: "Chikorita",
    img: "./imagenes/chikorita.png",
    attack: 93,
    defense: 122,
    type: "grass",
    hp: 500,
    attacks: [
      {
        name: "Placaje",
        type: "normal",
        damage: 5,
      },
      {
        name: "latigo cepa",
        type: "grass",
        damage: 7,
      },
      {
        name: "Energibola",
        type: "grass",
        damage: 10,
      },
    ],
  },
  {
    name: "Charmander",
    img: "./imagenes/charmander.png",
    attack: 116,
    defense: 93,
    type: "fire",
    hp: 650,
    attacks: [
      {
        name: "Ascuas",
        type: "fire",
        damage: 10,
      },
      {
        name: "Arañazo",
        type: "normal",
        damage: 5,
      },
      {
        name: "Pirotecnia",
        type: "fire",
        damage: 15,
      },
    ],
  },
  {
    name: "Cyndaquil",
    attack: 116,
    img: "./imagenes/cyndaquil.png",
    defense: 96,
    type: "fire",
    hp: 600,
    attacks: [
      {
        name: "Ascuas",
        type: "fire",
        damage: 10,
      },
      {
        name: "Nitrocarga",
        type: "fire",
        damage: 15,
      },
      {
        name: "Placaje",
        type: "normal",
        damage: 5,
      },
    ],
  },
];
let dialogosOak = [
  {
    dialogo: "Hola, bienvenido al mundo pokemon, soy el profesor Oak",
  },
  {
    dialogo:
      "Muy buen nombre! Tienes que seleccionar tres pokemon para empezar tu lucha",
  },
  {
    dialogo:
      "Muy bien! Ahora que tienes tu pokemon, puedes empezar tu aventura",
  },
];

let dialogosPj = [
  {
    dialogo: "Hola, soy Ash, y quiero ser el mejor entrenador pokemon",
  },
  {
    dialogo: "Muy bien, quiero estos",
  },
  {
    dialogo: "Gracias, ahora puedo empezar mi lucha",
  },
];
let dialogosPjJames = [
  {
    dialogo: "Hola, soy James, y quiero ser el mejor entrenador pokemon",
  },
  {
    dialogo: "Muy bien, quiero estos",
  },
  {
    dialogo: "Gracias, ahora puedo empezar mi lucha",
  },
];
// QUERY SELECTORS
const btnJugar = document.getElementById("btnJugar");
const btnUsers = document.getElementById("btnUsers");
const pantallaUser = document.getElementById("pantallaUser");
const inicio = document.getElementById("inicio");
const buttonAttack = document.getElementById("buttonAttack");

// ARRAYS
const pokemonArray = [];
const pjArray = [];
const npcArrayPokemons = [];
const pokemonsPelea = [];

// Variables
let stopDialogo = false;
let turnoActual = "pj";

class Pokemons {
  constructor(name, attack, img, defense, type, hp, attacks) {
    this.name = name;
    this.attack = attack;
    this.img = img;
    this.defense = defense;
    this.type = type;
    this.hp = hp;
    this.attacks = attacks;
  }
}

class Pj {
  constructor(name, img, pokemons) {
    this.name = name;
    this.img = img;
    this.pokemons = pokemons;
  }
}

function cargarPokemons() {
  pokemons.forEach((pokemon) => {
    pokemonArray.push(
      new Pokemons(
        pokemon.name,
        pokemon.attack,
        pokemon.img,
        pokemon.defense,
        pokemon.type,
        pokemon.hp,
        pokemon.attacks
      )
    );
  });
  console.log(pokemonArray);
}

cargarPokemons();
pantallaPrincipal();
function pantallaPrincipal() {
  btnJugar.addEventListener("click", () => {
    inicio.classList.add("disableScreen");
    pantallaUser.innerHTML = `
    <form action="" id="formJuego">
    <input type="text" id="namePj" placeholder="Escribe tu nombre" name="" id="">
    <select name=""  id="imgPj">
        <option value="">Selecciona tu personaje</option>
        <option value="./imagenes/ashPj.png">Ash</option>
        <option value="./imagenes/jamesPj.png">James</option>
    </select>
    <button id="btnJugar">Jugar</button>
</form>
    `;
    const formJuego = document.getElementById("formJuego");
    const namePj = document.getElementById("namePj");
    const imgPj = document.getElementById("imgPj");

    newPjForm(formJuego, namePj, imgPj);
  });
}

function newPjForm(formJuego, namePj, imgPj) {
  formJuego.addEventListener("submit", (e) => {
    e.preventDefault();
    if (namePj.value === "" || imgPj.value === "") {
      alert("Rellena todos los campos");
    } else {
      pjArray.push(new Pj(namePj.value, imgPj.value, []));
      segundaPantalla();
    }
  });
}

function segundaPantalla() {
  pantallaUser.innerHTML = "";

  pantallaUser.innerHTML = `
  <div>
  <div >
      <img class="pjSize" src="./imagenes/profesorOakPj.png" alt="">
  </div>
  <div>
      <h1>Profesor Oak</h1>
      <p class="dialogosPj disableScreen" id="dialogoOak"></p>
  </div>
</div>
<div>
  <div>
      <img class="pjSize" id="imgPj" src="${pjArray[0].img}" alt="">
  </div>
  <div>
      <h1 id="pjElegido"></h1>
      <p class="dialogosPj disableScreen" id="dialogoPj"></p>
  </div>
</div>
<p id="skipButton">skip</p>
  `;

  const containerDialogoOak = document.getElementById("dialogoOak");
  const containerDialogoPj = document.getElementById("dialogoPj");
  const skipButton = document.getElementById("skipButton");
  const dialogoDePj = pjArray[0].name == "Ash" ? dialogosPj : dialogosPjJames;
  skipButton.addEventListener("click", () => {
    stopDialogo = true;
    pantallaPelea();
  });
  generateDialog(
    containerDialogoOak,
    containerDialogoPj,
    dialogosOak,
    dialogoDePj
  );
}

function generateDialog(
  containerDialogoOak,
  containerDialogoPj,
  dialogosOak,
  dialogoDePj
) {
  write(containerDialogoOak, dialogosOak[0].dialogo, () => {
    write(containerDialogoPj, dialogoDePj[0].dialogo, () => {
      write(containerDialogoOak, dialogosOak[1].dialogo, () => {
        write(containerDialogoPj, dialogoDePj[1].dialogo, () => {
          write(containerDialogoOak, dialogosOak[2].dialogo, () => {
            write(containerDialogoPj, dialogoDePj[2].dialogo, () => {});
          });
        });
      });
    });
  });
}

function write(contenendor, dialogo, callback) {
  contenendor.classList.remove("disableScreen");
  contenendor.innerHTML = "";
  let arrFromStr = dialogo.split("");
  let i = 0;
  let mensaje = setInterval(() => {
    contenendor.innerHTML += arrFromStr[i];
    i++;
    if (i === arrFromStr.length) {
      clearInterval(mensaje);
      setTimeout(() => {
        contenendor.classList.add("disableScreen");
        if (callback) {
          callback();
        }
      }, 1000);
    }
  }, 50);
}

function pantallaPelea() {
  pantallaUser.innerHTML = "";
  Swal.fire("Tus pokemon son...", `${aleatoryPokemonPj()}`, "question");
  aleatoryPokemonNpc();
  createScreenFigth();
}
// Funciones para asignar pokemon aleatoriamente para cada jugador
// Funciones para asignar pokemon aleatoriamente para cada jugador
function aleatoryPokemonPj() {
  for (let i = 0; i < 3; i++) {
    let randomPokemon = Math.floor(Math.random() * pokemonArray.length);
    pjArray[0].pokemons.push(pokemonArray[randomPokemon]);
  }
  const pokemonsName = pjArray[0].pokemons
    .map((pokemon) => pokemon.name)
    .join(", ");
  return pokemonsName;
}

function aleatoryPokemonNpc() {
  for (let i = 0; i < 3; i++) {
    let randomPokemon = Math.floor(Math.random() * pokemonArray.length);
    npcArrayPokemons.push(pokemonArray[randomPokemon]);
  }
}

function createScreenFigth() {
  aleatoryFirstPokemons();
  generandoScreenPokemon();
  realizarAtaqueNpc();
}

function generandoScreenPokemon() {
  pantallaUser.innerHTML = "";
  pokemonsPelea.forEach((pokemon) => {
    pantallaUser.innerHTML += `
        <div class="pokemon">
          <div class="imgPokemon">
            <img src="${pokemon.img}" alt="">
          </div>
          <div class="infoPokemon">
            <h1>${pokemon.name}</h1>
            <p>Tipo ${pokemon.type}</p>
            <p>HP ${pokemon.hp}</p>
            <p>Ataque ${pokemon.attack}</p>
          </div>
        </div>
      `;
    botonesDeAccion(pokemon);
  });
}

function botonesDeAccion(pokemon) {
  if (pokemon.pj === "pj") {
    buttonAttack.innerHTML = `
        <div class="buttonsAtaque">
            <button class="ataque1"  id="${pokemon.attacks[0].damage}">${pokemon.attacks[0].name}</button>
            <button class="ataque1" id="${pokemon.attacks[1].damage}">${pokemon.attacks[1].name}</button>
            <button class="ataque1"  id="${pokemon.attacks[2].damage}">${pokemon.attacks[2].name}</button>
        </div>
        `;
  }

  const ataque = document.querySelectorAll(".ataque1");

  golpe(ataque);
}

function golpe(ataque) {
  ataque.forEach((ataque) => {
    ataque.addEventListener("click", (e) => {
      setTimeout(() => {
        const daño = dadoDeGolpe() * e.target.id;

        vida(daño);
      }, 1000);
      if (turnoActual === "pj") {
        turnoActual = "npc";
        setTimeout(() => {
          realizarAtaqueNpc();
        }, 1000);
      } else {
        turnoActual = "pj";
      }
    });
  });
}

function dadoDeGolpe() {
  const dado = Math.floor(Math.random() * 10);
  return dado;
}

function vida(daño) {
  encontrarPokemon("npc").hp = encontrarPokemon("npc").hp - daño;
  Toastify({
    text: `El pokemon ${encontrarPokemon("npc").name} recibio ${daño} de daño`,
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
  if (encontrarPokemon("npc").hp <= 0) {
    Swal.fire(
      "El pokemon",
      ` ${encontrarPokemon("pj").name} ha ganado`,
      "success"
    );
  } else {
    generandoScreenPokemon();
  }
}

function encontrarPokemon(pj) {
  const pokemon = pokemonsPelea.find((pokemon) => pokemon.pj === pj);
  return pokemon;
}

// ASIGNA LOS PRIMEROS POKEMONS EN PELEA
function aleatoryFirstPokemons() {
  // POKEMON ALEATORIO PARA EL NPC
  for (let i = 0; i < 1; i++) {
    let randomPokemon = Math.floor(Math.random() * npcArrayPokemons.length);
    pokemonsPelea.push({ ...npcArrayPokemons[randomPokemon], pj: "npc" });
  }
  // POKEMON ALEATORIO PARA EL NPC
  for (let i = 0; i < 1; i++) {
    let randomPokemon = Math.floor(Math.random() * pjArray[0].pokemons.length);
    pokemonsPelea.push({ ...pjArray[0].pokemons[randomPokemon], pj: "pj" });
  }
}

function realizarAtaqueNpc() {
  if (turnoActual === "npc") {
    const pokemonsNpc = encontrarPokemon("npc");
    const ataques = pokemonsNpc.attacks.map((ataque) => ataque.damage);
    const daño =
      dadoDeGolpe() * ataques[Math.floor(Math.random() * ataques.length)];
    vidaPokemonPj(daño);
    turnoActual = "pj";
  }
}

function vidaPokemonPj(daño) {
  encontrarPokemon("pj").hp = encontrarPokemon("pj").hp - daño;
  Toastify({
    text: `El pokemon ${encontrarPokemon("pj").name} recibio ${daño} de daño`,
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #c93d)",
    },
  }).showToast();
  if (encontrarPokemon("pj").hp <= 0) {
    Swal.fire(
      "El pokemon",
      ` ${encontrarPokemon("npc").name} ha ganado`,
      "success"
    );
  } else {
    generandoScreenPokemon();
  }
}
