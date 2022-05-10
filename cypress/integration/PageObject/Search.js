class Search{
    SearchName(){
 
       return cy.get('#search_query_top')
     } 
    
     SearchClick(){
 
       return cy.get('#searchbox').click()
     } 
    }
    
    export default Search