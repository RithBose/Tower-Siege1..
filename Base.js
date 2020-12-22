class Base{
    constructor(x,y){
    var options ={isStatic:true}
    
    this.body= Bodies.rectangle(x,y,200,20,options)
    World.add(world,this.body)
    }
    display(){
    var Pos= this.body.position    
    rectMode(CENTER)
    fill("black")
    rect(Pos.x,Pos.y,200,20)
    
    }
}