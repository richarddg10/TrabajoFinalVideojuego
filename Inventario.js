class Inventario {
    constructor(x, y, ancho, altura) {
        this.x = x
        this.y = y
        this.ancho = ancho
        this.altura = altura
        this.planta = loadImage("PLANTA.png")
    }

    show() {
        image(this.planta, this.x, this.y, this.ancho, this.altura)
    }

}