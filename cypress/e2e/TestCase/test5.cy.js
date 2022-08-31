///<reference types="cypress-iframe" />
import 'cypress-iframe'


describe("Handling Iframe and Fixture",()=>{
    let dt=''
   
    before(()=>{
       
        cy.fixture("example").then(function(data){
            dt=data
        })
    })

    it("frame",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/",{timeout:10000})

        cy.frameLoaded("#courses-iframe")
        cy.wait(2000)
        cy.iframe().find("a[href='mentorship']").eq(0).click()
    })

    it.only("Fixture",()=>{
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get("input[name='name']").eq(0).type(dt.name)
        cy.get("input[name='email']").type(dt.email)
        cy.get('select').select(dt.gender).should('have.value',dt.gender)
     

    })
})