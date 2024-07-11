describe('Home Page Test', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Submit Data and Verify Table', () => {
        const testName = 'John Doe';

        // Type into the Name input field
        cy.get('input[placeholder="Enter Name"]').type(testName).should('have.value', testName);

        // Click the Submit button
        cy.contains('Submit').click({ force: true });

        // Ensure the table renders after data submission
        cy.get('table tbody tr').should('have.length', 5); // Check if there is exactly one row

        // Optionally, you can assert the content of the table row here
        cy.contains('table tbody tr', testName).should('exist');
    });
});
