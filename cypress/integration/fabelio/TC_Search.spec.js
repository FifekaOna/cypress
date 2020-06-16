/// <reference types="cypress" />




Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  

describe('search',function(){

    before(function(){

        // Get data from JSON file 
        cy.fixture('testDataFromCSV').then(function(data){
            this.data=data
        })
    })
    
    it('search_product',function(){
        // looping every data 
        var i=0
        while (this.data[i] != null){
            //visit page
            cy.visit('https://qa.fabelio.com')
            // search in search box
            cy.get('input[placeholder="Cari produk"]').type(this.data[i].search)
            cy.get('input[placeholder="Cari produk"]').type('{enter}')

            // click desired item based on criteria
            if (this.data[i].lookFor != null) {
                cy.contains(this.data[i].lookFor).parent().within(()=>{
                    cy.get('a').click({ force: true })
                }
                )
            }
            // click buy 
            cy.get('button[id="buyNow"]').click({ force: true })
            
            // wait for all XHR finished and check-out page appeared
            cy.server()
            cy.route('POST','/rest/default/V1/checkout-step').as('checkout')
            cy.wait('@checkout', { timeout: 60000 })

            // take screenshot
            cy.screenshot();

            i++
           
        }
        
    })
})



