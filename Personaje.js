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
        this.imagenAgua = loadImage("PersonajeAgua.png")
        this.imagenTierra = loadImage("PersonajeTierra.png")
    }
    showFuego(){
        image(this.imagenFuego, this.x + (this.matX * 100), this.y + (this.matY * 100), this.ancho, this.altura)
    }

    showAire(){
    
        image(this.imagenAire, this.x + (this.matX * 100), this.y + (this.matY * 100), this.ancho, this.altura)
    }
    
    showAgua(){
    
        image(this.imagenAgua, this.x + (this.matX * 100), this.y + (this.matY * 100), this.ancho, this.altura)
    }

    showTierra(){
    
        image(this.imagenTierra, this.x + (this.matX * 100), this.y + (this.matY * 100), this.ancho, this.altura)
    }
    showVidas(){
        for(let i = 0; i < this.vida; i ++){
            image(this.imagenVidas, 10 + 60*i, 10, 50, 50)
        }
    }


    move(mapa) {
        //console.log(this.matX)
        if(keyCode == RIGHT_ARROW && mapa[this.matY][this.matX + 1] < 3) {
            this.matX++
        }

        if(keyCode == LEFT_ARROW && mapa[this.matY][this.matX - 1] < 3) {
            this.matX--
        }

        if( keyCode == DOWN_ARROW && mapa[this.matY + 1][this.matX] < 3) {
            this.matY++
        }

        if(keyCode == UP_ARROW && mapa[this.matY - 1][this.matX] < 3) {
            this.matY--
        }
    }
}