
describe('CreateAccount', () => {
  
  it("Completing the practise test with all necessary validations",()=>{
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/",{timeout:10000})
           
     //====HOW TO CHECK CHECKBOX==========
     cy.get('#checkBoxOption1')
        .check()
        .should('be.checked')
        .and('have.value','option1')

     cy.get('#checkBoxOption1')
        .uncheck()
        .should('not.be.checked')
        .and('have.value','option1')
           
     //to check it is checked on box
     cy.get('input[type="checkbox"')     //display how many checkbox
     cy.get('input[type="checkbox"').check(['option2','option3']) 
           
     //====== How to handle Static Dropdown=====
     cy.get('select').select('option2').should('have.value','option2')
     cy.get('#dropdown-class-example').select('option1').should('have.value','option1')


     //====how to handle Dynamic Dropdown=====
     cy.get('#autocomplete').type('ind')
     cy.get('.ui-menu-item div').each(($el,index,$list)=>{
            if ($el.text()==='Indonesia') { //includes function is used to take the file which contains that text
                $el.click()
            }
        })
       
        //to validate the selected value is equal to india
        cy.get('#autocomplete').should('have.value','Indonesia')
      
    })
  })
  
