
describe("Test Alert, Table and Mouse over",()=>{

    it("handle Alert",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#name").type("abebe")
        cy.get("#alertbtn").click()

        cy.get("#name").type("abebe")
        cy.get("#confirmbtn").click()

        cy.on("window:alert",(str)=>{
            expect(str).to.be.equal("Hello abebe, share this practice page and share your knowledge")
        })      
        cy.on('window:confirm',(str)=>{
            expect(str).to.be.equal("Hello abebe, Are you sure you want to confirm?")
        })
    })

    it("handle Table",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
        
        cy.get("tr td:nth-child(2)").each(($el,$index,$list)=>{
            let txt = $el.text()
            if(txt.includes('Engineer')){
                cy.get("tr td:nth-child(2)").eq($index).prev().then((price)=>{
                    let m = price.text()
                    expect(m).to.be.equal('Alex')
                })
            }
        })
    })

    it.only("handle Mouse over",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
        cy.get("div .mouse-hover-content").invoke('show')
        cy.contains("Top").click()

        cy.contains("Top").click({force:true})
        cy.url().should('include','top')
    })

})