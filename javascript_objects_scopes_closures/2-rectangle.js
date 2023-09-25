#!/usr/bin/node

class Rectangle {

    // initialize instance attributes with width and height  //

    constructor (w, h) {
        if (w && h > 0) {
            this.width = w;
            this.height = h;
        }else {
            return 'Rectangle {}';
        }
    }
}

module.exports = Rectangle;