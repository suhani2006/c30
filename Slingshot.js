class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.slingShot1 = loadImage("sprites/sling1.png");
        this.slingShot2 = loadImage("sprites/sling2.png");
        this.slingShot3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    display(){
    image (this.slingShot1,200,20)
    image (this.slingShot2,170,20) 
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<220){
            strokeWeight(7);
            line(pointA.x-25, pointA.y, pointB.x-15, pointB.y);
            line(pointA.x-25, pointA.y, pointB.x+20, pointB.y);
            image (this.slingShot3,pointA.x-25,pointA.y-15,15,30); 
           }
           else{
            strokeWeight(3);
            line(pointA.x+25, pointA.y, pointB.x-15, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+20, pointB.y);
            image (this.slingShot3,pointA.x+25,pointA.y-15,15,30);    
           }
        }  
    }
    
}