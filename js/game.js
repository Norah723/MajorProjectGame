var currency = 100_000;

// Shop and Inventory variable to keep track of prices, whats in stock, and what we have
var arrItems = [
    { // 0
        name: 'Umbrella',
        img: 'images/Umbrella 2.png',
        price: 5000,
        priceMin: 5000, priceMax: 8600,
        stock: 30,
        owned: 0
    },
    
    { // 1
        name: 'Rouge',
        img: 'images/Rouge 1.png',
        price: 803,
        priceMin: 803, priceMax: 1473,
        stock: 60,
        owned: 0
    },

    { // 2
        name: 'Jewellery',
        img: 'images/Jewellery 4.png',
        price: 39319,
        priceMin: 39319, priceMax: 50638,
        stock: 10,
        owned: 0
    },

    { // 3
        name: 'Dessert',
        img: 'images/Dessert 3.png',
        price: 2596,
        priceMin: 2596, priceMax: 3366,
        stock: 50,
        owned: 0
    },

    { // 4
        name: 'Rice',
        img: 'images/Rice 1.png',
        price: 350,
        priceMin: 350, priceMax: 991,
        stock: 100,
        owned: 0
    }
];

function purchase(item, amount) {
    console.log("Purchasing an item");
    
    console.log(arrItems[item]);
    // Update the item (arrItems[item]) to the new values

    // Subtract the amount from the stock
    arrItems[item].stock = arrItems[item].stock - amount;
    console.log('Item: ' + arrItems[item].name + ' - ');
    console.log('Stock After Purchase = ' + arrItems[item].stock);
    // Add the amount to the owned
    arrItems[item].owned = arrItems[item].owned + amount;
    console.log('Owned Amount After Purchase = ' + arrItems[item].owned);
    // Subtract the price * amount from our bank
    currency = currency - arrItems[item].price * amount;
    console.log('Price For Each Item = ' + arrItems[item].price);
    console.log('Current Currency = ' + currency);

    if (currency < arrItems[item].price * amount) {
        console.log('success');
    } else {
        
    }
}

purchase(0, 10); // Prints Umbrella info
purchase(2, 5); // Prints Jewellery info
