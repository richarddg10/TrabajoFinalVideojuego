class Balas {
    constructor(x, y, ancho, altura, dirX) {
        this.x = x
        this.y = y
        this.ancho = ancho
        this.altura = altura
        this.dirX = dirX
    }

    show() {
        rect(this.x, this.y, this.ancho, this.altura)
    }

    move() {
        this.x += 5 * this.dirX
    }
}