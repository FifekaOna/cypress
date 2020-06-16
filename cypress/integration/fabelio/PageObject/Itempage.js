class Itempage{
    
    clickBuyButton(){
        // click buy 
        cy.get('button[id="buyNow"]').click({ force: true })
    }

    waitForCheckOutPage(){
        cy.server()
            cy.route('POST','/rest/default/V1/checkout-step').as('checkout')
            cy.wait('@checkout', { timeout: 60000 })
    }
}

export default Itempage