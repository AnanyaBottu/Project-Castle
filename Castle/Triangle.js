class Triangle{
    constructor(x1,y1,x2,y2,x3,y3) {
       this.body = Bodies.polygon(x1,y1,x2,y2,x3,y3);
        /*this.sides=2;
        this.radius=3;
        this.body.position.x = x;
        this.body.position.y = y;
        World.add(world,this.body);*/
      }
      display(){
        push();
        triangle(this.body.position.x1,this.body.position.y1,this.body.position.x2,this.body.position.y2,this.body.position.x3,this.body.position.y3);
        pop();
      }
}