const { $, expect } = require('@wdio/globals')
const Page = require('./page');

const element = {
    buttonCheckout: $('#checkout')
} 

class CartPage extends Page {

    async validateCartPage() {
        expect(browser).toHaveUrlContaining('/cart.html')
        expect(element.buttonCheckout).toBeDisplayed()
    }
    
    open () {
        return super.open('/cart.html'); 
    }
}

module.exports = new CartPage();