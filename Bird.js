class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.shapeColor="white"
    this.image = loadImage("sprites/rh.jpg");
    
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    //fill("white");
    super.display();
  }
}
