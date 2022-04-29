
describe ('Login component', () =>{
    it('should redirect to users',() =>{
        cy.visit('/');
        cy.contains("Don't have an account?");
        cy.get('input[name= "username"]').type('hola@email.com');
        cy.get('input[name= password]').type('hola123');
        cy.get('')
    })

})