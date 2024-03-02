const { $, expect } = require('@wdio/globals')
const Page = require('./page');

const element = {
    iconCart: $('.shopping_cart_link') 
}

class HomePage extends Page {
    async validateHomePage() {
        expect(browser).toHaveUrlContaining('/inventory.html')
        expect(element.iconCart).toBeDisplayed()
    }

    open () {
        return super.open('/inventory.html'); 
    }
}

module.exports = new HomePage();
