class Enemigo {
    constructor(x, y, ancho, altura, matX, matY, tipo, dirX, dirY) {
        this.x = x
        this.y = y
        this.ancho = ancho
        this.altura = altura
        this.matX = matX
        this.matY = matY
        this.tipo = tipo
        this.imagenAire = loadImage("EnemigoAire.png")
        this.dirX = dirX
        this.dirY = dirY
        this.balas = []
        this.piedra1 = loadImage("Piedra1.png")
    }
    showAire() {
        image(this.imagenAire, this.x + (this.matX * 100), this.y + (this.matY * 100), this.ancho, this.altura)
        this.dispararAire(this.dirX)
        this.showBalas()
        this.eliminarBalas()
    }

    showBalas() {
        for (let i = 0; i < this.balas.length; i++) {
            this.balas[i].show()
            this.balas[i].move()
        }
    }

    dispararAire(dirX) {
        if (frameCount % 60 == 0) {
            this.balas.push(new Balas((this.x + 25) + (this.matX * 100), (this.y + 30) + (this.matY * 100), 40, 40, dirX))
        }
    }

    eliminarBalas() {
        for (let i = 0; i < this.balas.length; i++) {
            if (this.dirX == 1) {
                if (this.balas[i].x > 100 * 8) {
                    this.balas.splice(i, 1)
                }
            } else if (this.dirX == -1) {
                if (this.balas[i].x < 100 * 1) {
                    this.balas.splice(i, 1)
                }
            }
        }
    }

    moverAire() {
        if (frameCount % 60 == 0) {
            this.matY += 1 * this.dirY
        }
        if (this.matY > 5 || this.matY < 0) {
            this.dirY *= -1
            if (this.matY > 4) {
                this.matY -= 1
            } else {
                this.matY += 1
            }
        }
    }

    impactoBalas(personaje) {
        for (let index = 0; index < this.balas.length; index++) {
            const bala = this.balas[index];
            if(bala.impacto(personaje)) {
                personaje.vida--
                this.balas.splice(index, 1)
            }
        }
    }
   
}