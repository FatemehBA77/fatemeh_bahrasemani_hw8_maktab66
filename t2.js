class Circle{
    constructor(raduis){
        this.raduis=raduis
    }
    getArea(){
        return (Math.pow(this.raduis,2)) * Math.PI
    }
    getPerimeter(){
        return Math.PI * 2 * this.raduis
    }
}
const circle= new Circle(2)
console.log(circle.getArea())
const circle1= new Circle(4.4)
console.log(circle1.getPerimeter())