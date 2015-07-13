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

Product.prototype.updatePrice = function(price){  
    if(this.currentPrice == null){
        this.currentPrice = price; 
        this.currentPriceStartDate = new Date();
    }
    
    return this.currentPrice;
}                  

module.exports = Product;

var newProduct = new Product();
console.log(newProduct.updatePrice(250.99));