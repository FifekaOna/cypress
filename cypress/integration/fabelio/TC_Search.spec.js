/// <reference types="cypress" />


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  

describe('search',function(){
    it('search_product',function(){
        cy.visit('https://qa.fabelio.com')
        cy.get('input[placeholder="Cari produk"]').type('cessi')
        cy.get('input[placeholder="Cari produk"]').type('{enter}')
        cy.contains('Dining Chair').parent().within(()=>{
            cy.get('a').click({ force: true })
        }
        )
        const x= cy.get('button[id="buyNow"]').click({ force: true })
        cy.screenshot();
    })
})



