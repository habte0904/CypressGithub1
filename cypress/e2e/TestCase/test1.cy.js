
describe('test1.cy.js', () => {
  
  it('should visit', () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
            cy.get('.search-keyword').type('ca')
            cy.get('.search-button').click()
    
            //assertion
            cy.url()
              .should('include', 'seleniumPractise')

            cy.get('.product')
              .should('have.length',5)
    
            //how to handle invisible items or elements check with visible and without visible
            cy.get('.product:visible')
              .should('have.length',4)
    
            //parent child chaining and use of find function
            cy.get('.products').find('.product').should('have.length',4)
            cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    
  })
})

