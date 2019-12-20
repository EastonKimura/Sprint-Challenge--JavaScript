// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(attributes) {
        this.length = attributes.length,
        this.height = attributes.height,
        this.width = attributes.width
    }
    volume(){
            return this.length*this.width*this.height;
        }
        
     surfaceArea() {
          return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
          }
        }
       
          const cuboid1 = new CuboidMaker({
            length:4,
            width:5,
            height:5,
        })
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {
    constructor(CubeMaker) {
      super(CubeMaker);
    }
    volume() {
      return this.length*this.width*this.height;
    }
    surfaceArea() {
      return this.length*this.length*6;
    }
  }
  const cube1 = new CubeMaker({
    length:5,
    width:5,
    height:5,
  })
  console.log(cube1.volume());
  console.log(cube1.surfaceArea());