    class Box{
        constructor(x,y){
            var options={isStatic:false, friction:4}
            this.x=x
            this.y=y
            this.body=Bodies.rectangle(x,y,30,40,options)
            World.add(world,this.body)
        }
        display(){
            var Pos=(this.body.position)
            push()
            translate(Pos.x,Pos.y)
            
            rectMode(CENTER)
            strokeWeight(5)
            stroke("green")
            fill("cyan")
            rect(0,0,30,40)
            pop()
        }
    }