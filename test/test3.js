class Circle{
    constructor(radius){
        this._radius = radius;
    }

    get radius(){
        return this._radius;
    }

    set radius(newRadius){
        if(newRadius>0){
            this._radius = newRadius;
        }else{
            console.log("ban kinh la so duong");
        }
}

    caculateArea(){
        return Math.PI * this._radius * this.radius;
    }
}
let circle = new Circle(5);
console.log("Ban kinh ban dau : " + circle.radius);
circle.radius = 10;
console.log("ban kinh moi: " +circle.radius);

circle.radius = -3;
