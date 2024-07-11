describe('Home Page Test',()=>{
    it('Check the Input field',()=>{
        cy.visit('/')
        cy.get('input').type('Hemanth')
        cy.get('button').should('be.visible')
        cy.get('button').click({ multiple: true });
        
        cy.get('input').should('have.value','Hemanth')

    })
})