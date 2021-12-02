let cuadroActivado = new Array(6)
let mapa = []
let pantalla1
let pantalla2
let pantalla3Fuego
let cambio
let personaje

function setup() {
  createCanvas(1000, 600)

  pantalla1 = new Pantalla(0, 0, 1000, 600, "01")
  pantalla2 = new Pantalla(0, 0, 1000, 600, "02")
  pantalla3Fuego = new Pantalla(0, 0, 1000, 600, "03FUEGO")
  personaje = new Personaje(25, 25, 50, 50, 0, 4, 3)
  setMaps()
  cambio = 3
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
      pantalla3Fuego.show()
      personaje.show()

      if(pantalla3Fuego.mapa[personaje.matY][personaje.matX] < 1) {
        personaje.vida--
        console.log(personaje.vida)
        personaje.matX = 0
        personaje.matY = 4
      }
      break
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
  }
}

function keyPressed() {
  switch (cambio) {
    case 3:
      personaje.move(pantalla3Fuego.mapa)
      break
  }
}

function setMaps() {
  pantalla1.loadMap()
  pantalla2.loadMap()
  pantalla3Fuego.loadMap()
  pantalla1.setMapTile(4, 4, 1)
  pantalla1.setMapTile(4, 5, 1)
  pantalla2.setMapTile(0, 8, 1)
  pantalla2.setMapTile(0, 9, 1)
  pantalla2.setMapTile(1, 8, 1)
  pantalla2.setMapTile(1, 9, 1)
  pantalla3Fuego.setMapTile(4, 0, 1)
  pantalla3Fuego.setMapTile(4, 1, 1)
  pantalla3Fuego.setMapTile(4, 2, 1)
  pantalla3Fuego.setMapTile(3, 1, 1)
  pantalla3Fuego.setMapTile(2, 1, 1)
}