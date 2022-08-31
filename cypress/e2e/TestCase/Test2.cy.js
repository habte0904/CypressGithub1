
describe('CreateAccount', () => {
     it("Testing Find and Get",()=>{
     cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
     cy.get('.search-keyword').type('ca')
     cy.get('.search-button').click()
     cy.get('.products').find('.product').should('have.length',4)
     cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    
     //how to use Each function loop
     cy.get('.products').find('.product').each(($el,index,$list)=>{
      
      const textvalue = $el.find('h4.product-name').text()  //text() method used to get text from browser
      if (textvalue.includes('Carrot')) { //includes function is used to take the file which contains that text
      $el.find('button').click()
      }


      })
     //======display error====
    /*  const logo =cy.get('.brand') // to initialize the logo by brand director
     logo.text()  //to read or get text from brand class tag
     cy.log(logo) //to display the text on the cypress testing browser */
     //======We resolve =======
     cy.get('.brand').then(function(logoElement){
      
      cy.log(logoElement.text())
     })
     
     })
    })
    