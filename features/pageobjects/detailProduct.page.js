const { $, expect } = require('@wdio/globals')
const Page = require('./page');

const element = {
    buttonAddtoCartOnDetail: $('#add-to-cart-sauce-labs-bike-light')
}

class DetailProductPage extends Page {

    async validateDetailProductPage() {
        expect(browser).toHaveUrlContaining('/inventory-item.html?id=0')
        expect(element.buttonAddtoCartOnDetail).toBeDisplayed()
    }
    
    open () {
        return super.open('/inventory-item.html?id=0'); 
    }
}

module.exports = new DetailProductPage();