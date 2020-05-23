class chain {
    constructor(A,B){
       var options = {
           bodyA:A,
           bodyB:B,
           stiffness: 3,
           length: 5
       }
       this.chain = Constraint.create(options)

       World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}