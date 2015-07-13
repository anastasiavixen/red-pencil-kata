/*
Name: Red Pencil Code Kata 
Developer: Danielle Closs
Date: 7/12/2015
Notes: using node.js to run
Basic user flow:
Manually update the product price, and then use the rules described in the test-spec to determine what can happen with the promo state of the product and the product price
*/

var Product = function() {};

Product.updatePrice = function(price){  
    return price;
}                  

module.exports = Product;

//console.log(RedPencil.updatePrice());