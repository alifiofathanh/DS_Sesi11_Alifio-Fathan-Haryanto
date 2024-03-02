const { $, expect } = require('@wdio/globals')
const Page = require('./page');

//Ini test ke page Checkout: Your Information setelah klik checkout dari Cart
const element = {
    buttonContinue: $('#continue')
} 

class CheckoutYourInformationPage extends Page {

    async validateCheckoutYourInformationPage() {
        expect(browser).toHaveUrlContaining('/checkout-step-one.html')
        expect(element.buttonContinue).toBeDisplayed()
    }
    
    open () {
        return super.open('/checkout-step-one.html'); 
    }
}

module.exports = new CheckoutYourInformationPage();