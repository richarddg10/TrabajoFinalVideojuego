let cuadroActivado = new Array(6)
let mapa = []
let pantalla1
let pantalla2
let pantalla3
let pantalla4Fuego
let pantalla5
let pantalla6
let pantalla7
let pantalla8
let pantalla9
let cambio
let personaje
let enemigo1Aire
let enemigo2Aire


function setup() {
  createCanvas(1000, 600)

  pantalla1 = new Pantalla(0, 0, 1000, 600, "01")
  pantalla2 = new Pantalla(0, 0, 1000, 600, "02")
  pantalla3 = new Pantalla(0, 0, 1000, 600, "03")
  pantalla4Fuego = new Pantalla(0, 0, 1000, 600, "04FUEGO")
  pantalla5 = new Pantalla(0, 0, 1000, 600, "05")
  pantalla6 = new Pantalla(0, 0, 1000, 600, "06")
  pantalla7 = new Pantalla(0, 0, 1000, 600, "07")
  pantalla8 = new Pantalla(0, 0, 1000, 600, "08")
  pantalla9 = new Pantalla(0, 0, 1000, 600, "09")
  personaje = new Personaje(0, 0, 100, 100, 0, 4, 3)
  enemigo1Aire = new Enemigo(0, 0, 100, 100, 0, 0, "aire", 1, 1)
  enemigo2Aire = new Enemigo(0, 0, 100, 100, 9, 5, "aire", -1, 1)

  setMaps()
  cambio = 7
}

function draw() {
  background(150);

  switch (cambio) {
    case 1:
      pantalla1.show()
      break
    case 2:
      pantalla2.show()
      break
    case 3:
      pantalla3.show()
      break
    case 4:
      pantalla4Fuego.show()
      personaje.showFuego()
      personaje.showVidas()
      gameover()

      if (pantalla4Fuego.mapa[personaje.matY][personaje.matX] < 1) {
        personaje.vida--
        console.log(personaje.vida)
        personaje.matX = 0
        personaje.matY = 4
      }

      if (pantalla4Fuego.mapa[personaje.matY][personaje.matX] > 1) {
        cambio = 5
      }
      break
    case 5:
      pantalla5.show()
      break
    case 6:
      pantalla6.show()
      break
    case 7:
      pantalla7.show()
      personaje.showAire()
      personaje.showVidas()
      enemigo1Aire.showAire()
      enemigo2Aire.showAire()

      enemigo1Aire.moverAire()
      enemigo2Aire.moverAire()

      enemigo1Aire.impactoBalas(personaje)
      enemigo2Aire.impactoBalas(personaje)
      break
    case 8:
      pantalla8.show()
      break
    case 9:
      pantalla9.show()
      break
  }
}

function gameover() {
  if (personaje.vida <= 0) {
    personaje.vida = 3
    personaje.matX = 0
    personaje.matY = 4
    cambio = 1
  }
}

function mousePressed() {
  switch (cambio) {
    case 1:
      for (let fil = 0; fil < 6; fil++) {
        for (let col = 0; col < 10; col++) {
          if (pantalla1.clickTile(mouseX, mouseY, fil, col) && pantalla1.mapa[fil][col] == 1) {
            cambio = 2
          }
        }
      }
      break

    case 2:
      for (let fil = 0; fil < 6; fil++) {
        for (let col = 0; col < 10; col++) {
          if (pantalla2.clickTile(mouseX, mouseY, fil, col) && pantalla2.mapa[fil][col] == 1) {
            //personaje.y = personaje.y + (100 * 4) 
            cambio = 3
          }
        }
      }
      break

    case 3:
      for (let fil = 0; fil < 6; fil++) {
        for (let col = 0; col < 10; col++) {
          if (pantalla3.clickTile(mouseX, mouseY, fil, col) && pantalla3.mapa[fil][col] == 1) {
            cambio = 4
          }
        }
      }
      break

    case 4:


      break

    case 5:
      for (let fil = 0; fil < 6; fil++) {
        for (let col = 0; col < 10; col++) {
          if (pantalla5.clickTile(mouseX, mouseY, fil, col) && pantalla5.mapa[fil][col] == 1) {
            cambio = 6
          }
        }
      }
      break

    case 6:
      for (let fil = 0; fil < 6; fil++) {
        for (let col = 0; col < 10; col++) {
          if (pantalla6.clickTile(mouseX, mouseY, fil, col) && pantalla6.mapa[fil][col] == 1) {
            cambio = 7
          }
        }
      }
      break

    case 8:
      for (let fil = 0; fil < 6; fil++) {
        for (let col = 0; col < 10; col++) {
          if (pantalla3.clickTile(mouseX, mouseY, fil, col) && pantalla3.mapa[fil][col] == 1) {
            cambio = 9
          }
        }
      }
      break

    case 9:
      for (let fil = 0; fil < 6; fil++) {
        for (let col = 0; col < 10; col++) {
          if (pantalla3.clickTile(mouseX, mouseY, fil, col) && pantalla3.mapa[fil][col] == 1) {
            cambio = 10
          }
        }
      }
      break
  }
}

function keyPressed() {
  switch (cambio) {
    case 4:
      personaje.move(pantalla4Fuego.mapa)
      break

    case 7:
      personaje.move(pantalla7.mapa)
      break
  }
}

function setMaps() {
  pantalla1.loadMap()
  pantalla2.loadMap()
  pantalla3.loadMap()
  pantalla4Fuego.loadMap()
  pantalla5.loadMap()
  pantalla6.loadMap()
  pantalla7.loadMap()
  pantalla8.loadMap()
  pantalla9.loadMap()
  pantalla1.setMapTile(4, 4, 1)
  pantalla1.setMapTile(4, 5, 1)
  pantalla2.setMapTile(0, 8, 1)
  pantalla2.setMapTile(0, 9, 1)
  pantalla2.setMapTile(1, 8, 1)
  pantalla2.setMapTile(1, 9, 1)
  pantalla3.setMapTile(0, 8, 1)
  pantalla3.setMapTile(0, 9, 1)
  pantalla3.setMapTile(1, 8, 1)
  pantalla3.setMapTile(1, 9, 1)
  pantalla4Fuego.setMapTile(4, 0, 1)
  pantalla4Fuego.setMapTile(4, 1, 1)
  pantalla4Fuego.setMapTile(4, 2, 1)
  pantalla4Fuego.setMapTile(3, 1, 1)
  pantalla4Fuego.setMapTile(2, 1, 1)
  pantalla4Fuego.setMapTile(5, 2, 1)
  pantalla4Fuego.setMapTile(5, 3, 1)
  pantalla4Fuego.setMapTile(5, 4, 1)
  pantalla4Fuego.setMapTile(5, 5, 1)
  pantalla4Fuego.setMapTile(4, 5, 1)
  pantalla4Fuego.setMapTile(3, 4, 1)
  pantalla4Fuego.setMapTile(3, 5, 1)
  pantalla4Fuego.setMapTile(3, 6, 1)
  pantalla4Fuego.setMapTile(2, 3, 1)
  pantalla4Fuego.setMapTile(2, 4, 1)
  pantalla4Fuego.setMapTile(2, 5, 1)
  pantalla4Fuego.setMapTile(2, 6, 1)
  pantalla4Fuego.setMapTile(1, 3, 1)
  pantalla4Fuego.setMapTile(1, 6, 1)
  pantalla4Fuego.setMapTile(0, 2, 1)
  pantalla4Fuego.setMapTile(0, 3, 1)
  pantalla4Fuego.setMapTile(0, 6, 1)
  pantalla4Fuego.setMapTile(0, 7, 1)
  pantalla4Fuego.setMapTile(3, 7, 1)
  pantalla4Fuego.setMapTile(3, 8, 1)
  pantalla4Fuego.setMapTile(2, 8, 1)
  pantalla4Fuego.setMapTile(4, 8, 1)
  pantalla4Fuego.setMapTile(1, 9, 1)
  pantalla4Fuego.setMapTile(2, 9, 1)
  pantalla4Fuego.setMapTile(0, 9, 2)
  pantalla5.setMapTile(0, 8, 1)
  pantalla5.setMapTile(0, 9, 1)
  pantalla5.setMapTile(1, 8, 1)
  pantalla5.setMapTile(1, 9, 1)
  pantalla6.setMapTile(0, 8, 1)
  pantalla6.setMapTile(0, 9, 1)
  pantalla6.setMapTile(1, 8, 1)
  pantalla6.setMapTile(1, 9, 1)
  for (let fil = 0; fil < 6; fil++) {
    for (let col = 0; col < 10; col++) {
      pantalla7.mapa[fil][col] = 1
    }
  }
  pantalla7.setMapTile(4, 2, 3)
  pantalla7.setMapTile(2, 3, 4)
  pantalla7.setMapTile(1, 3, 5)
  pantalla7.setMapTile(3, 2, 6)

  // Pantalla 8
  pantalla8.setMapTile(0, 8, 1)
  pantalla8.setMapTile(0, 9, 1)
  pantalla8.setMapTile(1, 8, 1)
  pantalla8.setMapTile(1, 9, 1)
  pantalla9.setMapTile(0, 8, 1)
  pantalla9.setMapTile(0, 9, 1)
  pantalla9.setMapTile(1, 8, 1)
  pantalla9.setMapTile(1, 9, 1)



}