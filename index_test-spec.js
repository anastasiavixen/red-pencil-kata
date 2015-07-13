/*
Name: Red Pencil Code Kata 
Developer: Danielle Closs
Date: 7/12/2015
Notes: using jasmine-node to run tests
Rules:
- A red pencil promotion starts due to a price reduction. The price has to be reduced by at least 5% but at most be 30% and the previous price had to be stable for at least 30 days.
- A red pencil promotion lasts 30 days as the maximum length.***
- If the price is further reduced during the red pencil promotion the promotion will not be prolonged by that reduction.
- If the price is increased during the red pencil promotion the promotion will be ended immediately.
- If the price is reduced during the red pencil promotion so that the overall reduction is more than 30% with regard to the original price, the promotion is ended immediately.
- After a red pencil promotion is ended, additional red pencil promotions may follow – as long as the start condition is valid: the price was stable for 30 days and these 30 days don’t intersect with a previous red pencil promotion.*/

var Product = require('./');

describe('Product', function() {
    
    it("verify updatePrice function is available", function() {
        var result = new Product;
        expect(result.updatePrice(250.99)).toBeTruthy();
    });
    
    it("check that updated price is lower than original price", function() {
        var result = new Product;
        expect(result.updatePrice(250.99)).toBeLessThan(result.getOriginalPrice());
    });
    
    it("check that updated price is higher than original price", function() {
        var result = new Product;
        expect(result.updatePrice(350.99)).toBeGreaterThan(result.getOriginalPrice());
    });
    
    it("check that updated price is lower by at least 5%", function() {
        var result = new Product;
        expect(result.calculatePriceReduction(250.99)).toBeGreaterThan(5);
    });
    
});