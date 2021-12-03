class Personaje{
    constructor(x, y, ancho, altura, matX, matY, vida, imagen) {
        this.x = x
        this.y = y
        this.ancho = ancho
        this.altura = altura
        this.matX = matX
        this.matY = matY
        this.vida = vida
        this.imagen = imagen
    }
    show(){
        
        image(this.imagen, this.x + (this.matX * 100), this.y + (this.matY * 100), this.ancho, this.altura)
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