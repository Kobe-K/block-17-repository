const coffeeMenu = require('./coffee_data');

const allDrinks = coffeeMenu.map(drink => drink.name);
console.log(allDrinks);

const cheapDrinks = coffeeMenu.filter(drink => drink.price <= 5);
console.log(cheapDrinks);

const evenPricedDrinks = coffeeMenu.filter(drink => drink.price % 2 === 0);
console.log(evenPricedDrinks);

const totalOrderCost = coffeeMenu.reduce((total, drink) => total + drink.price, 0);
console.log(totalOrderCost);

const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal);
console.log(seasonalDrinks);

const seasonalDrinksWithBeans = seasonalDrinks.map(drink => drink.name + " with imported beans");
console.log(seasonalDrinksWithBeans);
