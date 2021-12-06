class Personaje{
    constructor(x, y, ancho, altura, matX, matY, vida) {
        this.x = x
        this.y = y
        this.ancho = ancho
        this.altura = altura
        this.matX = matX
        this.matY = matY
        this.vida = vida
        this.imagenFuego = loadImage("PersonajeFuego.png")
        this.imagenAire = loadImage("PersonajeAire.png")
        this.imagenVidas = loadImage("CORAZON.png")
    }
    showFuego(){
        image(this.imagenFuego, this.x + (this.matX * 100), this.y + (this.matY * 100), this.ancho, this.altura)
    }

    showAire(){
        fill(255)
        rect(this.x + (this.matX * 100), this.y + (this.matY * 100), this.ancho, this.altura)
        image(this.imagenAire, this.x + (this.matX * 100), this.y + (this.matY * 100), this.ancho, this.altura)
    }

    showVidas(){
        for(let i = 0; i < this.vida; i ++){
            image(this.imagenVidas, 10 + 60*i, 10, 50, 50)
        }
    }

    move(mapa) {
        //console.log(this.matX)
        if(keyCode == RIGHT_ARROW && mapa[this.matY][this.matX] != 3) {
            this.matX++
        }

        if(keyCode == LEFT_ARROW && mapa[this.matY][this.matX] != 5) {
            this.matX--
        }

        if( keyCode == DOWN_ARROW && mapa[this.matY][this.matX] != 4) {
            this.matY++
        }

        if(keyCode == UP_ARROW && mapa[this.matY][this.matX] != 6) {
            this.matY--
        }
    }
}