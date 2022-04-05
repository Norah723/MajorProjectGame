//Database
var apikey = '624509df67937c128d7c9335';
var url = 'https://majorproject-8602.restdb.io/rest/majorproject';

var initialCurrency = 100000;
var stock = '';
var itemClicked = -1;

$(document).ready(function () {
  // Get value on button click and show alert
  $("#myBtn").click(function () {
    var str = $("#myInput").val();
    alert(str + ', at the age of 15, you fell off a cliff and survived, and found 100,000 silver currency in the cave. And decided to break into the world to build a family business.');
    startTimer();
  });

});

document.getElementById('timer').innerHTML =
  05 + ":" + 00;

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if (s == 59) { m = m - 1 }
  if (m < 0) {
    return
  }

  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);

}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
  if (sec < 0) { sec = "59" };
  return sec;
}

// If the count down is over, write some text 
if (sec = 0) {
  clearInterval(x);
  document.getElementById("timer").innerHTML = "EXPIRED";
}

var arrObjects = [
  { name: 'Umbrella', img: 'images/Umbrella 2.png', value: 1, min: 5000, max: 8600, amount: 30, inStockAmount: 0 },
  { name: 'Rouge', img: 'images/Rouge 1.png', value: 2, min: 803, max: 1473, amount: 60, inStockAmount: 0 },
  { name: 'Jewellery', img: 'images/Jewellery 4.png', value: 3, min: 39319, max: 50638, amount: 10, inStockAmount: 0 },
  { name: 'Dessert', img: 'images/Dessert 3.png', value: 4, min: 2596, max: 3366, amount: 50, inStockAmount: 0 },
  { name: 'Rice', img: 'images/Rice 1.png', value: 5, min: 350, max: 991, amount: 100, inStockAmount: 0 }
];

var arrRndNo = [];

var rndNo = 0;
var numbersUsed = '';
//var price = Math.floor(Math.random() * (arrObjects[rndNo].max - arrObjects[rndNo].min + 1) + arrObjects[rndNo].min);
var price = 1005;
console.log('Price: ' + price);

//var arrNumberUsed = 

function displayObject() {
  //loop over array
  var successfulCount = 0;
  //var numbersUsed = '';
  //console.log('starting');
  while (successfulCount <= 2) {
    //successfulCount++
    //console.log('successfulCount -');
    //console.log(successfulCount);
    rndNo = Math.floor(Math.random() * 5);
    console.log('RndNo - ' + rndNo);
    console.log('numbersUsed - ' + numbersUsed);
    console.log(numbersUsed.indexOf(rndNo.toString()));
    if (numbersUsed.indexOf(rndNo.toString()) == -1) {
      numbersUsed = numbersUsed + rndNo.toString();
      successfulCount++
      // var price = Math.floor(Math.random() * (arrObjects[rndNo].max - arrObjects[rndNo].min + 1) + arrObjects[rndNo].min);
      //var price = 1000;
      console.log('Price = ' + price);
      var numberOf = arrObjects[rndNo].amount;
      var numberOf2 = arrObjects[rndNo].inStockAmount;
      var displayHTML = '';
      var displayHTML1 = '';
      var displayHTML2 = '';
      displayHTML += "<div id='image" + rndNo + "' class='objects'>";
      displayHTML += "<img src='" + arrObjects[rndNo].img + "'>"
      displayHTML += "<div class='price' > Silver Currency: ";
      displayHTML += price;
      displayHTML += "</div> "
      displayHTML += "</div> "
      displayHTML1 += "<div class='numberOf>' > Numbers of " + arrObjects[rndNo].name + " available = ";
      displayHTML1 += numberOf;
      displayHTML1 += "</div>"
      displayHTML2 += "<div class='numberOf2>' > Numbers of " + arrObjects[rndNo].name + " in stock = ";
      displayHTML2 += numberOf2;
      displayHTML2 += "</div>"
      $('#information').append(displayHTML1, displayHTML2);
      console.log(displayHTML1);
      console.log(displayHTML2);
      $('#displayScreen').append(displayHTML);
    }

  }
  numbersUsed = numbersUsed + rndNo.toString();
  console.log('Numbers Used' + numbersUsed);
}

displayObject();

$(document).on('click', '#btnUmbrella', function () {
  console.log("hi");
  itemClicked = arrObjects[0]
});

$(document).on('click', '#btnRouge', function () {
  itemClicked = arrObjects[1]
});

$(document).on('click', '#btnJewellery', function () {
  itemClicked = arrObjects[2]
});

$(document).on('click', '#btnDessert', function () {
  itemClicked = arrObjects[3]
});

$(document).on('click', '#btnRice', function () {
  itemClicked = arrObjects[4]
});

//var numberOf3 = itemClicked.amount;
//var numberOf4 = itemClicked.inStockAmount;

$(document).on('click', '#btnPurchase', function () {
  //subtract arrObjects[rndNo].amount * price from the initialCurrency
  var purchaseAmount = itemClicked.amount * price;
  var numberOf3 = itemClicked.amount;
  var numberOf4 = itemClicked.inStockAmount;
  console.log('Item Clicked Amount: ' + itemClicked.amount + ' * ' + price + ' = ' + purchaseAmount);
  console.log(initialCurrency);
  initialCurrency = initialCurrency - purchaseAmount
  console.log(initialCurrency);
  $('.currency').text('Currency: ' + initialCurrency);
  //add arrObjects[rndNo].amount to arrObjects[rndNo].inStockAmount &
  //substract arrObjects[rndNo].amount from arrObjects[rndNo].amount 
  $("#information").empty();
  amountAfterPurchase = numberOf3 - numberOf3;
  inStockAmountAfterPurchase = numberOf4 + numberOf3;
  var displayHTML3 = '';
  var displayHTML4 = '';
  displayHTML3 += "<div class='numberOf>' > Numbers of " + itemClicked.name + " available = ";
  displayHTML3 += amountAfterPurchase;
  displayHTML3 += "</div>"
  displayHTML4 += "<div class='numberOf2>' > Numbers of " + itemClicked.name + " in stock = ";
  displayHTML4 += inStockAmountAfterPurchase;
  displayHTML4 += "</div>"
  $('#information').append(displayHTML3, displayHTML4);
  console.log(displayHTML3);
  console.log(displayHTML4);
  /*var afterCurrency = inStockAmountAfterPurchase * price;
  console.log(afterCurrency + 'AAAAAAA');*/
});

$(document).on('click', '#btnSell', function () {
  //add arrObjects[rndNo].amount * price to the initialCurrency
  var afterCurrency = inStockAmountAfterPurchase * price;
  var numberOf3 = itemClicked.amount;
  var numberOf4 = itemClicked.inStockAmount;
  console.log(inStockAmountAfterPurchase);
  console.log(inStockAmountAfterPurchase + ' * ' + price + ' = ' + afterCurrency);
  //console.log(initialCurrency);
  initialCurrency = initialCurrency + afterCurrency
  console.log(initialCurrency);
  $('.currency').text('Currency: ' + initialCurrency);
  //subtract arrObjects[rndNo].amount from arrObjects[rndNo].inStockAmount &
  //add arrObjects[rndNo].amount to arrObjects[rndNo].amount 
  $("#information").empty();
  amountAfterSell = numberOf3 + numberOf3;
  inStockAmountAfterSell = numberOf4 - numberOf3;
  console.log('Amount After Sell = ' + amountAfterSell);
  console.log('Number Of 3 = ' + numberOf3 + ' ' + itemClicked.name);
  console.log('Number Of 4 = ' + numberOf4 + ' ' + itemClicked.name);
  var displayHTML3 = '';
  var displayHTML4 = '';
  displayHTML3 += "<div class='numberOf>' > Numbers of " + itemClicked.name + " available = ";
  displayHTML3 += amountAfterSell;
  displayHTML3 += "</div>"
  displayHTML4 += "<div class='numberOf2>' > Numbers of " + itemClicked.name + " in stock = ";
  displayHTML4 += inStockAmountAfterSell;
  displayHTML4 += "</div>"
  $('#information').append(displayHTML3, displayHTML4);
  console.log(displayHTML3);
  console.log(displayHTML4);
});

//DataBase Function
/*function addPurchaseInformation(item, url, apikey) {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": url,
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "x-apikey": apikey,
      "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(item)
  }

  $.ajax(settings).done(function (response) {
    console.log('Item successfully added');
    console.log(response);
  });

}*/

/* --- Event Handlers --- */

/*$('#btnPurchase').click(function () {
  console.log('submitted');
  var tempItem = {
    "Name": arrObjects[rndNo].name,
    "Object": arrObjects[rndNo].img,
    "AmountPurchased": arrObjects[rndNo].amount, 
    "PriceEach": price
  };
  addPurchaseInformation(tempItem, url, apikey);
});*/

/* --- Code to run at start --- */

