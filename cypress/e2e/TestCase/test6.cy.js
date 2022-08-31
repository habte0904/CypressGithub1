import RegisterPage from "../PageObject/RegisterPage"

describe("cypress hooks",()=>{

    let dt=''
    
    before(()=>{
       
        cy.fixture("example").then(function(data){
            dt=data
        })
    })
    it("handle Table",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
        cy.controlTable(dt.name[3], dt.position[2])
        
    })

    it.only("POM",()=>{

        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        const rp = new RegisterPage();

        rp.getName().eq(0).type(dt.name[3])
        rp.getEmail().type(dt.email)
        rp.getGender().select(dt.gender).should('have.value',dt.gender)
     

    })
})