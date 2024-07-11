describe('open home page',()=>{
    it('open home page',()=>{
        cy.visit('/')
        
        cy.contains('Register')
        cy.contains('Login')
    })
})