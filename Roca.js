class Roca{

    constructor(x,y,ancho,alto){
        this.x= x
        this.y= y
        this.ancho= ancho
        this.alto= alto
        this.piedra= loadImage("Piedra1.png")
    }

    pintar(){
        image(this.piedra,this.x,this.y, this.ancho, this.alto)
    }
   
    mover(){
        this.x += -5
    }
}