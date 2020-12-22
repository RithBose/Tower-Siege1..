class ball{
    constructor(x,y,r){
    var options ={isStatic:false,density:1.2}
    this.x=x
    this.y=y
    this.r=50
    this.body= Bodies.circle(this.x,this.y,50,options)
    this.image=loadImage("polygon.png")
    World.add(world,this.body)
    }
    display(){
    var ballPos= this.body.position   
    push()
    translate(ballPos.x,ballPos.y) 
    imageMode(CENTER)
    fill("black")
    image(this.image,this.x,this.y,this.r,this.r)
    pop()
    }
}