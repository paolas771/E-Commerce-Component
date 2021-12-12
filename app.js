const menuItems = [{
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 0
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 782,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0
    }
]

var subTotal = document.getElementsByClassName("subtotal")[0];
var tax = document.getElementsByClassName("tax")[0];
var total = document.getElementsByClassName("total")[1];
//button variables
var addFFWK = document.getElementsByClassName("add")[0];
var addSAV = document.getElementsByClassName("add")[1];
var addSWMS = document.getElementsByClassName("add")[2];
var addBEAT = document.getElementsByClassName("add")[3];
var addCSWP = document.getElementsByClassName("add")[4];
var addFSAF = document.getElementsByClassName("add")[5];
//to access cart list items
var summaryList = document.getElementsByClassName("cart-summary")[0];
var empty = document.getElementsByClassName("empty")[0];
subTotal.innerHTML = "$" + 0 + "." + 0 + 0;
tax.innerHTML = "$" + 0 + "." + 0 + 0;
total.innerHTML = "$" + 0 + "." + 0 + 0;



//event Listeners to add items to cart
addFFWK.addEventListener("click", function() {
    empty.innerHTML = "";
    menuItems[0].count++;
    var foodSource = "images/plate__french-fries.png";
    addItem(menuItems[0].name, menuItems[0].price / 100, menuItems[0].count, foodSource);
    inCart(0, addFFWK);

});
addSAV.addEventListener("click", function() {
    empty.innerHTML = "";
    menuItems[1].count++;
    var foodSource = "images/plate__salmon-vegetables.png";
    addItem(menuItems[1].name, menuItems[1].price / 100, menuItems[1].count, foodSource);
    inCart(1, addSAV);
});
addSWMS.addEventListener("click", function() {
    empty.innerHTML = "";
    menuItems[2].count++;
    var foodSource = "images/plate__spaghetti-meat-sauce.png";
    addItem(menuItems[2].name, menuItems[2].price / 100, menuItems[2].count, foodSource);
    inCart(2, addSWMS);
});
addBEAT.addEventListener("click", function() {
    empty.innerHTML = "";
    menuItems[3].count++;
    var foodSource = "images/plate__bacon-eggs.png";
    addItem(menuItems[3].name, menuItems[3].price / 100, menuItems[3].count, foodSource);
    inCart(3, addBEAT);
});
addCSWP.addEventListener("click", function() {
    empty.innerHTML = "";
    menuItems[4].count++;
    var foodSource = "images/plate__chicken-salad.png";
    addItem(menuItems[4].name, menuItems[4].price / 100, menuItems[4].count, foodSource);
    inCart(4, addCSWP);   
});
addFSAF.addEventListener("click", function() {
    empty.innerHTML = "";
    menuItems[5].count++;
    var foodSource = "images/plate__fish-sticks-fries.png";
    addItem(menuItems[5].name, menuItems[5].price / 100, menuItems[5].count, foodSource);
    inCart(5, addFSAF);
});
//summaryList.contains(document.getElementsByClassName("decrease")[0]);

//create new list item for every menu item added to cart
function addItem(itemName, itemPrice, count, img) {
    //create new elements
    
    var newItem = document.createElement("li");
    var divPlate = document.createElement("div");
    var divQuantity = document.createElement("div");
    var foodPic = document.createElement("img");
    var divContent = document.createElement("div");
    var foodName = document.createElement("p");
    var price = document.createElement("p");
    var divWrapper = document.createElement("div");
    var decButtonImg = document.createElement("img");
    var decreaseButton = document.createElement("button");
    var divCount = document.createElement("div");
    var increaseButton = document.createElement("button"); 
    var incButtonImg = document.createElement("img");
    var divSubtotal = document.createElement("div");

    //add classes
    divPlate.classList.add("plate");
    foodPic.classList.add("plate");
    divQuantity.classList.add("quantity");
    divContent.classList.add("content");
    foodName.classList.add("menu-item");
    price.classList.add("price");
    divWrapper.classList.add("quantity__wrapper");
    decreaseButton.classList.add("decrease");    
    divCount.classList.add("quantity");
    increaseButton.classList.add("increase");
    divSubtotal.classList.add("subtotal");

    //add content to elements
    foodPic.src = img;
    divQuantity.textContent = count;
    divCount.textContent = count;
    foodName.textContent = itemName;
    price.textContent = itemPrice;
    divSubtotal.textContent = itemPrice;
    decButtonImg.src= "images/chevron.svg";
    incButtonImg.src= "images/chevron.svg";

    //add elements to cart list
    summaryList.appendChild(newItem);
    newItem.appendChild(divPlate);
    newItem.appendChild(divContent);
    newItem.appendChild(divWrapper);
    newItem.appendChild(divSubtotal);
    divPlate.appendChild(foodPic);
    divPlate.appendChild(divQuantity);
    divContent.appendChild(foodName);
    divContent.appendChild(price);
    divWrapper.appendChild(decreaseButton);
    divWrapper.appendChild(divCount);
    divWrapper.appendChild(increaseButton);
    decreaseButton.appendChild(decButtonImg);
    increaseButton.appendChild(incButtonImg);

   
}

function inCart(index, buttonName){
    document.getElementsByClassName("add")[index].classList.add("in-cart");
    //document.getElementsByClassName("add")[index].classList.remove("add");
    var checkMart = document.createElement("img");
    document.getElementsByClassName("add")[index].innerHTML =  "In Cart";
    document.getElementsByClassName("add")[index].appendChild(checkMart);
    checkMart.src="images/check.svg";
    buttonName.disabled = true;
}