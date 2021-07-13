'use strict';
const burgerSize = {
    small: {
        price: 50,
        callories: 20,
    },
    large: {
        price: 100,
        callories: 40,
    }
}
const burgerTopping = {
    chisee: {
        price: 10,
        callories: 20,
    },
    salad: {
        price: 20,
        callories: 5,
    },
    potato: {
        price: 15,
        callories: 10,
    },
    seasoning: {
        price: 15,
        callories: 0,
    },
    mayo: {
        price: 20,
        callories: 5,
    }
}
class Hamburger {
    constructor(size, stuffung) {
        this.size = [size];
        this.stuffung = [stuffung];
    }
    addTopping(topping) {
        this.stuffung.push(topping);
    }
    removeTopping(topping) {
        this.stuffung.pop(topping);
    }
    calculatePrise() {
        let sumPrice = 0;
        for (let price of this.stuffung) {
            sumPrice += price.price;
        }
        console.log(sumPrice);
    }
    calculateCallories() {
        let sumCall = 0;
        for (let call of this.stuffung) {
            sumCall += call.callories;
        }
        console.log(sumCall);
    }
}

const hamburger1 = new Hamburger(burgerSize.small, burgerTopping.chisee);
hamburger1.addTopping(burgerTopping.mayo);
hamburger1.addTopping(burgerTopping.seasoning);
hamburger1.removeTopping(burgerTopping.seasoning);
hamburger1.calculatePrise();
hamburger1.calculateCallories();