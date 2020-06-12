/// <reference types="cypress" />


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  

describe('search',function(){
    it('search_product',function(){
        cy.visit('https://fabelio.com')
        cy.get('#search').type('cessi')
        cy.get('#search').type('{enter}')

        
    })
})