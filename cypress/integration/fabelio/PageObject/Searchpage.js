class Searchpage{

    searchItemInList(item){
        cy.contains(item).parent().within(()=>{
            cy.get('a').click({ force: true })
        }
        )
    }
}

export default Searchpage