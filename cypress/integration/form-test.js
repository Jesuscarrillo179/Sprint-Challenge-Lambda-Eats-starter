describe("Test form", function() {
    beforeEach(function(){
        cy.visit("http://localhost:3000/");
    })
it("test inputs", function() {
    cy.get('[href="/pizza"]').click()
    cy.get('input[name="name"]')
    .type("Jesus")
    .should("have.value", "Jesus")
    cy.get('[type="checkbox"]')
    .check()
    .should('be.checked')
    cy.get('#original')
    .check()
    .should('be.checked')
    cy.get('#instructions')
    .type("I want it raw.")
    .should("have.value", "I want it raw.")

    cy.get('[type="submit"]').click()

    cy.get('input[name="name"]')
    .type("Jesus")
    .clear()
    cy.get('.error')
    .should("contain", "You must provide a name.")

    cy.get('input[name="name"]')
    .type("Jesus")
    .clear()
    .type("J")
    cy.get('.error')
    .should("contain", "Your name is too short.")

    cy.get('#instructions')
    .type("I want it raw.")
    .clear()
    cy.get('.error')
    .should("contain", "You must provide instructions.")
});
});