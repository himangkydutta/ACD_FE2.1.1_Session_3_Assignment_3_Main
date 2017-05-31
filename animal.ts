/*
 * Creating class using inheritance.
*/

// creating class
class Animal {    
    // Fields
    protected distance: number;
    protected name: string;

    // constructor
    constructor(code: number, name: string) {
        this.distance = code;
        this.name = name;
    }

    // Methods
    move(distance): void {
        console.log('***** Animal Details *****');
        console.log('Distance is  : ' + this.distance);
    }
    //Method
    makeSound(){
        console.log("Different animal make different sound");
    }
}

class Tiger extends Animal {
    private color: string;
    constructor(code: number, name: string, col: string) {
        super(code, name);
        this.color = col;
    }
     // Methods
    move(code): void {
        console.log('***** Tiger Details *****');
        console.log('Distance is  : ' + code);
        console.log('color is  : ' + this.color);
    }

}

var ani = new Tiger(12,'Tiger', 'white');
ani.move(12);
ani.makeSound();