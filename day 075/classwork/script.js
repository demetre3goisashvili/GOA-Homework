class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    parameter(){
        return this.height + this.width + this.height + this.width;
    }
}