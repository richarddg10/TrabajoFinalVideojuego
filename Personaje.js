class Personaje {
    constructor(x, y, ancho, altura, matX, matY, vida) {
        this.x = x
        this.y = y
        this.ancho = ancho
        this.altura = altura
        this.matX = matX
        this.matY = matY
        this.vida = vida
        this.direccion = 1
        this.balas = []
        this.inventario = []
        this.imagenFuego = loadImage("PersonajeFuego.png")
        this.imagenAire = loadImage("PersonajeAire.png")
        this.imagenAire2 = loadImage("PersonajeAire2.png")
        this.imagenVidas = loadImage("CORAZON.png")
        this.imagenAgua = loadImage("PersonajeAgua.png")
        this.imagenTierra = loadImage("PersonajeTierra.png")
    }
    showFuego() {
        image(this.imagenFuego, this.x + (this.matX * 100), this.y + (this.matY * 100), this.ancho, this.altura)
    }

    showAire() {
        if (this.direccion == -1) {
            image(this.imagenAire, this.x + (this.matX * 100), this.y + (this.matY * 100), this.ancho, this.altura)
        } else {
            image(this.imagenAire2, this.x + (this.matX * 100), this.y + (this.matY * 100), this.ancho, this.altura)
        }
        for (let index = 0; index < this.balas.length; index++) {
            const bala = this.balas[index];
            bala.showBolitas()
            bala.move()
        }
    }

    showAgua() {
        image(this.imagenAgua, this.x + (this.matX * 100), this.y + (this.matY * 100), this.ancho, this.altura)
    }

    showTierra() {
        image(this.imagenTierra, this.x + (this.matX * 100), this.y + (this.matY * 100), this.ancho, this.altura)
    }

    disparar() {
        if (keyCode == 32) {
            this.balas.push(new Balas((this.x + 45) + (this.matX * 100), (this.y + 45) + (this.matY * 100), 10, 10, this.direccion))
        }
    }

    choque(roca) {
        let personajeX = this.x + (this.matX * 100)
        let personajeY = this.y + (this.matY * 100)
        if (personajeX + this.ancho > roca.x && personajeX < roca.x + roca.ancho && personajeY + this.altura > roca.y && personajeY < roca.y + roca.alto) {
            return true
        }
        return false
    }

    recolectar(planta){
        let personajeX = this.x + (this.matX * 100)
        let personajeY = this.y + (this.matY * 100)
        if (personajeX + this.ancho > planta.x && personajeX < planta.x + planta.ancho && personajeY + this.altura > planta.y && personajeY < planta.y + planta.altura) {
            return true
        }
        return false
    }

    showVidas() {
        for (let i = 0; i < this.vida; i++) {
            image(this.imagenVidas, 10 + 60 * i, 10, 50, 50)
        }
    }

    /* if (personajeX + personaje.ancho > this.x &&
         personajeX < this.x + this.ancho &&
         personajeY + personaje.altura > this.y &&
         personajeY < this.y + this.altura) {
         return true
     } else return false*/

    move(mapa) {
        //console.log(this.matX)
        if (keyCode == RIGHT_ARROW && mapa[this.matY][this.matX + 1] != 3 &&  mapa[this.matY][this.matX + 1] >= 0) {
            this.matX++
        }

        if (keyCode == LEFT_ARROW && mapa[this.matY][this.matX - 1] != 3 && mapa[this.matY][this.matX - 1] >= 0) {
            this.matX--
        }

        if (keyCode == DOWN_ARROW && mapa[this.matY + 1][this.matX] != 3 && mapa[this.matY + 1][this.matX] >= 0) {
            this.matY++
        }

        if (keyCode == UP_ARROW && mapa[this.matY - 1][this.matX] != 3 && mapa[this.matY - 1][this.matX] >= 0) {
            this.matY--
        }
    }
}