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
    }
    showFuego(){
        
        image(this.imagenFuego, this.x + (this.matX * 100), this.y + (this.matY * 100), this.ancho, this.altura)
    }

    showVidas(){
        for(let i = 0; i < this.vida; i ++){
            fill(255, 0, 0)
            rect(10 + 60*i, 10, 50, 50)
        }
    }

    move(mapa) {
        //console.log(this.matX)
        if(keyCode == RIGHT_ARROW) {
            this.matX++
        }

        if(keyCode == LEFT_ARROW) {
            this.matX--
        }

        if( keyCode == DOWN_ARROW) {
            this.matY++
        }

        if(keyCode == UP_ARROW) {
            this.matY--
        }
    }
}