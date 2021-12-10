class Balas {
    constructor(x, y, ancho, altura, dirX) {
        this.x = x
        this.y = y
        this.ancho = ancho
        this.altura = altura
        this.dirX = dirX
        this.imagenBalasAire = loadImage("balaAire.png")
    }

    show() {
        image(this.imagenBalasAire, this.x, this.y, this.ancho, this.altura)
    }

    showBolitas() {
        noStroke()
        fill(0, 0, 255)
        circle(this.x + this.ancho / 2, this.y + this.altura / 2, this.ancho)
    }

    move() {
        this.x += 5 * this.dirX
    }

    impacto(personaje) {
        let personajeX = personaje.x + (personaje.matX * 100)
        let personajeY = personaje.y + (personaje.matY * 100)
        //console.log(personajeX + personaje.ancho)
        //console.log(personajeY + personaje.altura)

        if (personajeX + personaje.ancho > this.x &&
            personajeX < this.x + this.ancho &&
            personajeY + personaje.altura > this.y &&
            personajeY < this.y + this.altura) {
            return true
        } else return false
    }
}