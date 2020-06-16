class Homepage{

    visit(){
        //visit page
        cy.visit('https://qa.fabelio.com')
    }

    searchItem(item){
        // search in search box
        cy.get('input[placeholder="Cari produk"]').type(item)
        cy.get('input[placeholder="Cari produk"]').type('{enter}')
    }


}

export default Homepage