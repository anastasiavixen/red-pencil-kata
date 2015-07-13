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
    this.currentPrice = null;
    this.currentPriceStartDate = null;
    this.previousPrice = null;
    this.previousPriceStartDate = null;   
};

Product.prototype.getOriginalPrice = function(){ 
    return this.originalPrice;
};

Product.prototype.updatePrice = function(price){  
    if(this.currentPrice == null){
        this.currentPrice = price; 
        this.currentPriceStartDate = new Date();
    }
    return this.currentPrice;
};                 

Product.prototype.calculatePriceReduction = function(price){
    var newPrice = Product.prototype.updatePrice(price);
    var originalPrice = this.originalPrice;
    var percentageChange = (originalPrice - newPrice)/originalPrice * 100;
    return percentageChange;
};



module.exports = Product;
//var newProduct = new Product;
//console.log(newProduct.calculatePriceReduction(250.99));