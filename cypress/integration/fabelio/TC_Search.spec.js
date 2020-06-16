/// <reference types="cypress" />

import Homepage from './PageObject/Homepage'
import Homepage from './PageObject/Searchpage'
import Homepage from './PageObject/Itempage'
import Searchpage from './PageObject/Searchpage'
import Itempage from './PageObject/Itempage'


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
            const hp= new Homepage()
            hp.visit()
            // search in search box
            hp.searchItem(this.data[i].search)

            const sp= new Searchpage()
            // click desired item based on criteria
            if (this.data[i].lookFor != null) {
                sp.searchItemInList(this.data[i].lookFor )
            }

            const ip= new Itempage()
            // click buy 
            ip.clickBuyButton()
            
            // wait for all XHR finished and check-out page appeared
            ip.waitForCheckOutPage()

            // take screenshot
            cy.screenshot();

            i++
           
        }
        
    })
})



