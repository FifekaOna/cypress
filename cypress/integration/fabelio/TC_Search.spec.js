/// <reference types="cypress" />




Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  

describe('search',function(){

    before(function(){
        cy.fixture('items').then(function(data){
            this.data=data
        })
    })
    
    it('search_product',function(){

        var i=0
        while (this.data[i] != null){
            cy.visit('https://qa.fabelio.com')
            cy.get('input[placeholder="Cari produk"]').type(this.data[i].search)
            cy.get('input[placeholder="Cari produk"]').type('{enter}')

            if (this.data[i].lookFor != null) {
                cy.contains(this.data[i].lookFor).parent().within(()=>{
                    cy.get('a').click({ force: true })
                }
                )
            }
            
           
            cy.get('button[id="buyNow"]').click({ force: true })
            

            // cy.wait(50000)
            cy.server()
            cy.route('POST','/rest/default/V1/checkout-step').as('checkout')
            cy.wait('@checkout', { timeout: 60000 })

            cy.screenshot();

            i++
           
        }
        
    })
})



