describe('Register page E2E testing', function() {  // Use function() to allow using this
    beforeEach(function() {
        cy.fixture('user').then((user) => {
            this.userData = user;
        });
    });

    it('Testing Register Page Fun', function() {
        cy.visit('/register');
       
        cy.get('input[name="name"]').type(this.userData.name);
        cy.get('input[name="age"]').type(this.userData.age);
        cy.get('input[name="email"]').type(this.userData.email);
        cy.get('input[name="password"]').type(this.userData.password);
        cy.get('button[type="submit"]').click({ multiple: true });
        cy.log('Register functionality is working');
    });
});
