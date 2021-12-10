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
let pantalla10
let pantalla11
let pantalla12
let pantalla13
let pantalla14
let pantalla15
let cambio
let personaje
let enemigo1Aire
let enemigo2Aire
let enemigos
let rocas
let planta


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
  pantalla10 = new Pantalla(0, 0, 1000, 600, "10")
  pantalla11 = new Pantalla(0, 0, 1000, 600, "11")
  pantalla12 = new Pantalla(0, 0, 1000, 600, "12")
  pantalla13 = new Pantalla(0, 0, 1000, 600, "13")
  pantalla14 = new Pantalla(0, 0, 1000, 600, "14")
  pantalla15 = new Pantalla(0, 0, 1000, 600, "15")
  pantalla16 = new Pantalla(0, 0, 1000, 600, "16")
  personaje = new Personaje(15, 0, 70, 100, 0, 4, 3)
  enemigo1Aire = new Enemigo(0, 0, 100, 100, 0, 0, "aire", 1, 1)
  enemigo2Aire = new Enemigo(0, 0, 100, 100, 9, 5, "aire", -1, 1)
  enemigos = []
  enemigos.push(enemigo1Aire)
  enemigos.push(enemigo2Aire)
  rocas = []
  planta = []
  setMaps()

  let plantasAgregadas = 0

  while (plantasAgregadas < 5) {
    let randomFila = Math.floor(random(0, 6))
    let randomCol = Math.floor(random(0, 10))

    if (pantalla13.mapa[randomFila][randomCol] == 1) {
      planta.push(new Inventario(0 + (100 * randomCol), 0 + (100 * randomFila), 70, 100))
      console.log(randomFila)
      console.log(randomCol)
      pantalla13.mapa[randomFila][randomCol] = 5
      plantasAgregadas++
    }
  }
  cambio = 1
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

      if (pantalla7.mapa[personaje.matY][personaje.matX] > 1) {
        cambio = 8
      }

      for (let index = 0; index < enemigos.length; index++) {
        const enemigo = enemigos[index];
        enemigo.showAire()
        enemigo.moverAire()
        enemigo.impactoBalas(personaje)
      }

      for (let i = 0; i < enemigos.length; i++) {
        const enemigo = enemigos[i];
        for (let j = 0; j < personaje.balas.length; j++) {
          const bala = personaje.balas[j];
          if (bala.impacto(enemigo)) {
            personaje.balas.splice(j, 1)
            enemigos.splice(i, 1)
          }
        }
      }

      gameover()

      break
    case 8:
      pantalla8.show()
      break
    case 9:
      pantalla9.show()
      break

    case 10:
      pantalla10.show()
      personaje.showAgua()
      personaje.showVidas()


      if (pantalla10.mapa[personaje.matY][personaje.matX] < 1) {
        personaje.vida--
        personaje.matX = 0
        personaje.matY = 3
        console.log(personaje.vida)

      }

      if (pantalla10.mapa[personaje.matY][personaje.matX] > 1) {
        cambio = 11
      }

      if (frameCount % 60 == 0) {
        rocas.push(new Roca(800, 20 + 100 * Math.floor(random(0, 6)), 100, 50))
        console.log(rocas[rocas.length - 1].y)
      }

      for (let index = 0; index < rocas.length; index++) {
        const e = rocas[index];
        e.pintar()
        e.mover()
      }

      for (let index = 0; index < rocas.length; index++) {
        const e = rocas[index];
        if (personaje.choque(e)) {
          console.log("choque")
          personaje.vida--
          rocas.splice(index, 1)
        }
      }

      for (let index = 0; index < rocas.length; index++) {
        const e = rocas[index];
        if (e.x < 0) {
          rocas.splice(index, 1)
        }
      }

      gameover()

      break

    case 11:
      pantalla11.show()
      break

    case 12:
      pantalla12.show()
      break

    case 13:
      pantalla13.show()
      personaje.showTierra()
      personaje.showVidas()
      for (let index = 0; index < planta.length; index++) {
        const p = planta[index];
        p.show()

      }
      gameover()

      if (pantalla13.mapa[personaje.matY][personaje.matX] < 1) {
        personaje.vida--
        personaje.matX = 9
        personaje.matY = 5
        console.log(personaje.vida)
      }

      for (let index = 0; index < planta.length; index++) {
        const p = planta[index];
        if (personaje.recolectar(p)) {
          personaje.inventario.push(p)
          planta.splice(index, 1)
        }
      }

      if (personaje.inventario.length > 4) {
        pantalla13.setMapTile(0, 2, 2)
      }

      if (pantalla13.mapa[personaje.matY][personaje.matX] == 2) {
        cambio = 14
      }
      break

    case 14:
      pantalla14.show()


      break

    case 15:
      pantalla15.show()
      break

    case 16:
      pantalla16.show()
      break
  }
}

function gameover() {
  if (personaje.vida <= 0) {
    reiniciar()
    cambio = 16
  }
}

function reiniciar() {
  personaje.vida = 3
  personaje.matX = 0
  personaje.matY = 4
  personaje.inventario = []

  enemigos = []
  enemigos.push(enemigo1Aire)
  enemigos.push(enemigo2Aire)
  rocas = []
  planta = []
  setMaps()

  let plantasAgregadas = 0

  while (plantasAgregadas < 5) {
    let randomFila = Math.floor(random(0, 6))
    let randomCol = Math.floor(random(0, 10))

    if (pantalla13.mapa[randomFila][randomCol] == 1) {
      planta.push(new Inventario(0 + (100 * randomCol), 0 + (100 * randomFila), 70, 100))
      console.log(randomFila)
      console.log(randomCol)
      pantalla13.mapa[randomFila][randomCol] = 5
      plantasAgregadas++
    }
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
            personaje.matX = 1
            personaje.matY = 4
            cambio = 7


          }
        }
      }
      break



    case 8:
      for (let fil = 0; fil < 6; fil++) {
        for (let col = 0; col < 10; col++) {
          if (pantalla8.clickTile(mouseX, mouseY, fil, col) && pantalla8.mapa[fil][col] == 1) {
            cambio = 9
          }
        }
      }
      break

    case 9:
      for (let fil = 0; fil < 6; fil++) {
        for (let col = 0; col < 10; col++) {
          if (pantalla9.clickTile(mouseX, mouseY, fil, col) && pantalla9.mapa[fil][col] == 1) {
            personaje.matX = 0
            personaje.matY = 3
            cambio = 10
          }
        }
      }
      break




    case 11:
      for (let fil = 0; fil < 6; fil++) {
        for (let col = 0; col < 10; col++) {
          if (pantalla11.clickTile(mouseX, mouseY, fil, col) && pantalla11.mapa[fil][col] == 1) {
            cambio = 12
          }
        }
      }
      break



    case 12:
      for (let fil = 0; fil < 6; fil++) {
        for (let col = 0; col < 10; col++) {
          if (pantalla12.clickTile(mouseX, mouseY, fil, col) && pantalla12.mapa[fil][col] == 1) {
            personaje.matX = 9
            personaje.matY = 5
            cambio = 13
          }
        }
      }
      break

    case 13:


      break

    case 14:
      for (let fil = 0; fil < 6; fil++) {
        for (let col = 0; col < 10; col++) {
          if (pantalla14.clickTile(mouseX, mouseY, fil, col) && pantalla14.mapa[fil][col] == 1) {
            cambio = 15
          }
        }
      }
      break

    case 15:
      for (let fil = 0; fil < 6; fil++) {
        for (let col = 0; col < 10; col++) {
          if (pantalla15.clickTile(mouseX, mouseY, fil, col) && pantalla15.mapa[fil][col] == 1) {
            reiniciar()
            cambio = 1
          }
        }
      }
      break

    case 16:
      for (let fil = 0; fil < 6; fil++) {
        for (let col = 0; col < 10; col++) {
          if (pantalla16.clickTile(mouseX, mouseY, fil, col) && pantalla16.mapa[fil][col] == 1) {
            reiniciar()
            cambio = 1
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
      if (keyCode == RIGHT_ARROW) {
        personaje.direccion = 1
      }

      if (keyCode == LEFT_ARROW) {
        personaje.direccion = -1
      }

      personaje.disparar()

      break

    case 10:
      personaje.move(pantalla10.mapa)
      break

    case 13:
      personaje.move(pantalla13.mapa)
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
  pantalla10.loadMap()
  pantalla11.loadMap()
  pantalla12.loadMap()
  pantalla13.loadMap()
  pantalla14.loadMap()
  pantalla15.loadMap()
  pantalla16.loadMap()

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
  pantalla7.setMapTile(1, 1, 3)
  pantalla7.setMapTile(1, 2, 3)
  pantalla7.setMapTile(2, 2, 3)
  pantalla7.setMapTile(3, 3, 3)
  pantalla7.setMapTile(3, 4, 3)
  pantalla7.setMapTile(4, 4, 3)
  pantalla7.setMapTile(0, 5, 3)
  pantalla7.setMapTile(1, 5, 3)
  pantalla7.setMapTile(1, 6, 3)
  pantalla7.setMapTile(3, 7, 3)
  pantalla7.setMapTile(4, 7, 3)
  pantalla7.setMapTile(3, 8, 3)
  pantalla7.setMapTile(0, 6, 2)


  // Pantalla 8
  pantalla8.setMapTile(0, 8, 1)
  pantalla8.setMapTile(0, 9, 1)
  pantalla8.setMapTile(1, 8, 1)
  pantalla8.setMapTile(1, 9, 1)
  pantalla9.setMapTile(0, 8, 1)
  pantalla9.setMapTile(0, 9, 1)
  pantalla9.setMapTile(1, 8, 1)
  pantalla9.setMapTile(1, 9, 1)

  pantalla10.setMapTile(5, 9, 2)
  pantalla10.setMapTile(5, 8, 2)


  pantalla10.setMapTile(0, 0, 1)
  pantalla10.setMapTile(0, 1, 1)
  pantalla10.setMapTile(0, 2, 1)
  pantalla10.setMapTile(0, 3, 1)
  pantalla10.setMapTile(0, 4, 1)
  pantalla10.setMapTile(0, 5, 1)
  pantalla10.setMapTile(0, 6, 1)
  pantalla10.setMapTile(0, 7, 1)


  pantalla10.setMapTile(1, 0, 1)
  pantalla10.setMapTile(1, 1, 1)
  pantalla10.setMapTile(1, 2, 1)
  pantalla10.setMapTile(1, 3, 1)
  pantalla10.setMapTile(1, 4, 1)
  pantalla10.setMapTile(1, 5, 1)
  pantalla10.setMapTile(1, 6, 1)
  pantalla10.setMapTile(1, 7, 1)


  pantalla10.setMapTile(2, 0, 1)
  pantalla10.setMapTile(2, 1, 1)
  pantalla10.setMapTile(2, 2, 1)
  pantalla10.setMapTile(2, 3, 1)
  pantalla10.setMapTile(2, 4, 1)
  pantalla10.setMapTile(2, 5, 1)
  pantalla10.setMapTile(2, 6, 1)
  pantalla10.setMapTile(2, 7, 1)


  pantalla10.setMapTile(3, 0, 1)
  pantalla10.setMapTile(3, 1, 1)
  pantalla10.setMapTile(3, 2, 1)
  pantalla10.setMapTile(3, 3, 1)
  pantalla10.setMapTile(3, 4, 1)
  pantalla10.setMapTile(3, 5, 1)
  pantalla10.setMapTile(3, 6, 1)
  pantalla10.setMapTile(3, 7, 1)


  pantalla10.setMapTile(4, 0, 1)
  pantalla10.setMapTile(4, 1, 1)
  pantalla10.setMapTile(4, 2, 1)
  pantalla10.setMapTile(4, 3, 1)
  pantalla10.setMapTile(4, 4, 1)
  pantalla10.setMapTile(4, 5, 1)
  pantalla10.setMapTile(4, 6, 1)
  pantalla10.setMapTile(4, 7, 1)


  pantalla10.setMapTile(5, 0, 1)
  pantalla10.setMapTile(5, 1, 1)
  pantalla10.setMapTile(5, 2, 1)
  pantalla10.setMapTile(5, 3, 1)
  pantalla10.setMapTile(5, 4, 1)
  pantalla10.setMapTile(5, 5, 1)
  pantalla10.setMapTile(5, 6, 1)
  pantalla10.setMapTile(5, 7, 1)


  pantalla11.setMapTile(0, 8, 1)
  pantalla11.setMapTile(0, 9, 1)
  pantalla11.setMapTile(1, 8, 1)
  pantalla11.setMapTile(1, 9, 1)

  pantalla12.setMapTile(0, 8, 1)
  pantalla12.setMapTile(0, 9, 1)
  pantalla12.setMapTile(1, 8, 1)
  pantalla12.setMapTile(1, 9, 1)

  pantalla13.setMapTile(0, 2, 3)
  pantalla13.setMapTile(0, 0, 1)
  pantalla13.setMapTile(0, 1, 1)
  pantalla13.setMapTile(0, 3, 1)
  pantalla13.setMapTile(0, 4, 1)
  pantalla13.setMapTile(0, 6, 1)
  pantalla13.setMapTile(0, 7, 1)
  pantalla13.setMapTile(0, 9, 1)

  pantalla13.setMapTile(1, 0, 1)
  pantalla13.setMapTile(1, 1, 1)
  pantalla13.setMapTile(1, 2, 1)
  pantalla13.setMapTile(1, 3, 1)
  pantalla13.setMapTile(1, 4, 1)
  pantalla13.setMapTile(1, 5, 1)
  pantalla13.setMapTile(1, 6, 1)
  pantalla13.setMapTile(1, 7, 1)
  pantalla13.setMapTile(1, 8, 1)
  pantalla13.setMapTile(1, 9, 1)

  pantalla13.setMapTile(2, 0, 1)
  pantalla13.setMapTile(2, 2, 1)
  pantalla13.setMapTile(2, 3, 1)
  pantalla13.setMapTile(2, 4, 1)
  pantalla13.setMapTile(2, 5, 1)
  pantalla13.setMapTile(2, 6, 1)
  pantalla13.setMapTile(2, 8, 1)
  pantalla13.setMapTile(2, 9, 1)

  pantalla13.setMapTile(3, 0, 1)
  pantalla13.setMapTile(3, 1, 1)
  pantalla13.setMapTile(3, 2, 1)
  pantalla13.setMapTile(3, 3, 1)
  pantalla13.setMapTile(3, 5, 1)
  pantalla13.setMapTile(3, 6, 1)
  pantalla13.setMapTile(3, 7, 1)
  pantalla13.setMapTile(3, 8, 1)
  pantalla13.setMapTile(3, 9, 1)

  pantalla13.setMapTile(4, 0, 1)
  pantalla13.setMapTile(4, 1, 1)
  pantalla13.setMapTile(4, 2, 1)
  pantalla13.setMapTile(4, 3, 1)
  pantalla13.setMapTile(4, 4, 1)
  pantalla13.setMapTile(4, 5, 1)
  pantalla13.setMapTile(4, 6, 1)
  pantalla13.setMapTile(4, 7, 1)
  pantalla13.setMapTile(4, 8, 1)
  pantalla13.setMapTile(4, 9, 1)

  pantalla13.setMapTile(5, 0, 1)
  pantalla13.setMapTile(5, 1, 1)
  pantalla13.setMapTile(5, 3, 1)
  pantalla13.setMapTile(5, 4, 1)
  pantalla13.setMapTile(5, 5, 1)
  pantalla13.setMapTile(5, 7, 1)
  pantalla13.setMapTile(5, 8, 1)
  pantalla13.setMapTile(5, 9, 1)



  pantalla14.setMapTile(0, 8, 1)
  pantalla14.setMapTile(0, 9, 1)
  pantalla14.setMapTile(1, 8, 1)
  pantalla14.setMapTile(1, 9, 1)



  pantalla15.setMapTile(4, 0, 1)
  pantalla15.setMapTile(5, 0, 1)
  pantalla15.setMapTile(4, 1, 1)
  pantalla15.setMapTile(5, 1, 1)

  pantalla16.setMapTile(4, 0, 1)
  pantalla16.setMapTile(5, 0, 1)
  pantalla16.setMapTile(4, 1, 1)
  pantalla16.setMapTile(5, 1, 1)
}