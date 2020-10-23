// Your code here

class Polygon {
    constructor(side){
        this.side = side
    }

    get countSides() {
        return this.side.length
    }

    get perimeter() {
        return this.side.reduce((a, b) => a + b)
    }

}

class Triangle extends Polygon {
    
    get isValid() {
        if(this.countSides !== 3){
            return false
        }
        if((this.side[0] + this.side[1]) > this.side[2]){
            if((this.side[1] + this.side[2]) > this.side[0]){
                if((this.side[0] + this.side[2]) > this.side[1]){
                    return true
                }
            }
        }
        return false
    }
}

class Square extends Polygon {
    
    get isValid(){
        if(this.countSides !== 4){
            return false
        }

        if(this.side[0] === this.side[1] && this.side[2] === this.side[3] && this.side[0] === this.side[3]){
            return true
        }else{
            return false
        }
    }

    get area(){
        if(this.isValid){
            return this.side[0] * this.side[1]
        }else{
            return "invalid square"
        }
    }
}