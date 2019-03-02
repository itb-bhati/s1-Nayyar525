//1: click handle

const button = document.querySelector('#pushy');
button.addEventListener('click', () => {
    this.classList.toggle('on');
});

const button = document.querySelector('#pushy');
button.addEventListener('click', function() {
    console.log(this);
    this.classList.toggle('on');
});

//***************************************

//2:object method

const person = {
    points: 23,
    score: () => {
        this.points++;
    }
}


const person = {
    points: 23,
    score: function()  {
        this.points++;
    }
}
//****************************************

//3:Prototype Methods

class Car {
    constructor(make, colour) {
        this.make = make;
        this.colour = colour;
    }
}

const beemer = new Car('BMW', 'blue');
const subie = new Car('Subaru', 'white');

Car.prototype.summarize = () => {
    return `This car is a ${this.make} in the colour ${this.colour}`;  
};

Car.prototype.summarize = function() {
    return `This car is a ${this.make} in the colour ${this.colour}`;  
};
//********************************** */

//4:Arguments Object



const orderChildren = () => {
    const children = Array.from(arguments);
    return children.map((child, i) => {
        return `${child} was child #${i + 1}`;
    })
    console.log(arguments);
}




const orderChildren = function() {
    const children = Array.from(arguments);
    return children.map((child, i) => {
        return `${child} was child #${i + 1}`;
    })
    console.log(arguments);
}

//******************************************** */