#!/usr/bin/node

class Rectangle {

    // initialize instance attributes with these values //

    constructor (w, h) {
        if (w && h > 0) {
            this.width = w;
            this.height = h;
        }else {
            return 'Rectangle {}';
        }
    }    

    print () {
        for (let i = 1; i <= this.height; i++) {
            const rect_X = 'X'.repeat(this.width);
            console.log(rect_X);
        }
    }

    rotate() {
        // Exchange the width and height values of the rectangle //
        [this.width, this.height] = [this.height, this.width];
      }
    
}

module.exports = Rectangle;
