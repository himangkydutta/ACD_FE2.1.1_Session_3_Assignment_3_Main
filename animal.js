/*
 * Creating class using inheritance.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// creating class
var Animal = (function () {
    // constructor
    function Animal(code, name) {
        this.distance = code;
        this.name = name;
    }
    // Methods
    Animal.prototype.move = function (distance) {
        console.log('***** Animal Details *****');
        console.log('Distance is  : ' + this.distance);
    };
    //Method
    Animal.prototype.makeSound = function () {
        console.log("Different animal make different sound");
    };
    return Animal;
}());
var Tiger = (function (_super) {
    __extends(Tiger, _super);
    function Tiger(code, name, col) {
        var _this = _super.call(this, code, name) || this;
        _this.color = col;
        return _this;
    }
    // Methods
    Tiger.prototype.move = function (code) {
        console.log('***** Tiger Details *****');
        console.log('Distance is  : ' + code);
        console.log('color is  : ' + this.color);
    };
    return Tiger;
}(Animal));
var ani = new Tiger(12, 'Tiger', 'white');
ani.move(12);
ani.makeSound();
