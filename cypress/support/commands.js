Cypress.Commands.add('homeAutomation', () => {
    cy.visit('https://automacaocombatista.herokuapp.com/')
    cy.contains('a', 'Começar Automação Web').click()
})