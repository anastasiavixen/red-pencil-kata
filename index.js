/*
Name: Red Pencil Code Kata 
Developer: Danielle Closs
Date: 7/12/2015
Notes: using node.js to run
Basic user flow:
Manually update the product price, and then use the rules described in the test-spec to determine what can happen with the promo state of the product and the product price
*/

var Product = function Product(){
    this.originalPrice = 299.99;
    this.originalPriceDate = new Date("January 01, 2012 00:00:00");
    this.currentPrice = 275.00;
    this.currentPriceStartDate = new Date("January 01, 2014 00:00:00");
    this.previousPrice = 299.99;
    this.previousPriceStartDate = new Date("January 01, 2013 00:00:00");   
};

Product.prototype.getOriginalPrice = function(){ 
    return this.originalPrice;
};

Product.prototype.getCurrentPriceDate = function(){
    return this.currentPriceStartDate;
}

Product.prototype.updatePrice = function(price){  
    if(this.currentPrice != null){
        this.previousPrice = this.currentPrice;
        this.previousPriceStartDate = this.currentPriceStartDate;
    }
    this.currentPrice = price; 
    this.currentPriceStartDate = new Date();
    return this.currentPrice;
};                 

Product.prototype.updatePriceDate = function(){
    var priceDate = this.currentPriceStartDate = new Date();
    return priceDate;
}

Product.prototype.calculatePriceReduction = function(price){
    var newPrice = Product.prototype.updatePrice(price);
    var currentPrice = this.currentPrice;
    var percentageChange = (currentPrice - newPrice)/currentPrice * 100;
    return percentageChange;
};

Product.prototype.calculatePriceDayLength = function(){
    var previousPriceDate = this.previousPriceStartDate;
    var currentPriceDate = this.currentPriceStartDate;     
    var daysLength = (currentPriceDate - previousPriceDate)/(1000*60*60*24);    
    return daysLength;
};

module.exports = Product;

//var newProduct = new Product;
//console.log(newProduct.calculatePriceReduction(250.99));
//newProduct.updatePrice(250.99);
//console.log(newProduct.calculatePriceDayLength());
