class Pantalla {
    constructor(x, y, ancho, altura, numero) {
        this.x = x
        this.y = y
        this.ancho = ancho
        this.altura = altura
        this.pantalla1 = loadImage("PANTALLA" + numero + ".jpg")
        this.mapa = []
    }

    loadMap() {
        for (let index = 0; index < 10; index++) {
            this.mapa.push(new Array(10))
        }

        for (let fil = 0; fil < 6; fil++) {
            for (let col = 0; col < 10; col++) {
                this.mapa[fil][col] = 0
            }
        }
    }

    show() {
        image(this.pantalla1, this.x, this.y, this.ancho, this.altura)
        for (let fil = 0; fil < 6; fil++) {
            for (let col = 0; col < 10; col++) {
                if (this.mapa[fil][col] == 1) {
                    fill(255)
                } else if(this.mapa[fil][col] == 2){
                    fill(0, 0, 255)
                } else {
                    noFill()
                }
                rect(col * 100, fil * 100, 100, 100)
            }
        }
    }

    setMapTile(fil, col, value) {
        this.mapa[fil][col] = value
    }

    clickTile(mX, mY, fila, col) {
        if (mX > 100 * col && mX < 100 * col + 100 &&
            mY > 100 * fila && mY < 100 * fila + 100) {
            return true
        } else {
            return false
        }
    }

}