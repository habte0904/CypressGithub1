class RegisterPage{

    getName(){
       return cy.get("input[name='name']")
    }

    getEmail(){
        return cy.get("input[name='email']")
    }

    getGender(){
        return cy.get('select')
    }
    
}
export default RegisterPage;