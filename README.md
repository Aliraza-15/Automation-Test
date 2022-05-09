# Automation-Test

#Test 1

    describe('Automation Practice', ()=>{
    it('Search  with your name',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#search_query_top').type('hammad')
        cy.get('#searchbox > .btn').click()
        cy.url().should('contain', 'hammad')
        cy.get('.alert.alert-warning').should('contain.text','No results were found for your search hammad')
    })

#Test 2

    it('Check number of length of dresses',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#block_top_menu > ul > li:nth-child(2) > a').click()
        cy.url().should('contain', 'controller=category')
        cy.get('#layered_id_attribute_group_1').check()
        cy.wait(1000)
        cy.url().should('contain', 'size-s')
        cy.get('#ul_layered_id_attribute_group_1 > li:nth-child(1) > label > a > span').should('contain.text', '5')
        cy.get('#center_column > div.content_sortPagiBar.clearfix > div.top-pagination-content.clearfix > div.product-count').should('contain.text', '5 items')
        
    })

#Test 3

    it('Add any Product cart and verify',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.wait(10000)
        cy.get('#layer_cart_product_price').should('have.text', '$27.00')
        cy.get('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6').should('contain.text', 'Product successfully added to your shopping cart')
    })
})
