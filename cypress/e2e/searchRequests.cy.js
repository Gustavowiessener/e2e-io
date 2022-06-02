describe('New Cypress 10.00', () => {
    before(() => {
       cy.homeAutomation()
    })

    it('Search and Elements filter status 200 - requests', () => {
        cy.contains('a', 'Busca de elementos').click()
        cy.contains('a', 'Links').click()
        cy.contains('a', 'Ok 200 - Sucess')
        .click()
        .get('div.center > .center')
        .should('is.visible')
        
        cy.contains('h5', 'Success!!')
        .should('is.visible')

        cy.contains('a', 'Voltar').click()
    })

    it('Search and Elements filter status 400 - requests', () => {
        cy.contains('a', 'Busca de elementos').click()
        cy.contains('a', 'Links').click()
        cy.contains('a', 'Erro 400 - Bad Request')
        .click()
        .get('div.center > .center')
        .should('is.visible')
        
        cy.contains('h5', 'Bad Request!!')
        .should('is.visible')
        cy.contains('a', 'Voltar').click()
    })

    it('Search and Elements filter status 404 - requests', () => {
        cy.contains('a', 'Busca de elementos').click()
        cy.contains('a', 'Links').click()
        cy.contains('a', 'Erro 404 - Page not found')
        .click()
        .get('div.center > .center')
        .should('is.visible')
        
        cy.contains('h5', 'Page Not Found!!')
        .should('is.visible')
        cy.contains('a', 'Voltar').click()
    })

    it('Search and Elements filter status 500 - requests', () => {
        cy.contains('a', 'Busca de elementos').click()
        cy.contains('a', 'Links').click()
        cy.contains('a', 'Erro 500 - Internal Server Error')
        .click()
        .get('div.center > .center')
        .should('is.visible')
        
        cy.contains('h5', 'Internal Server Error!!')
        .should('is.visible')
        cy.contains('a', 'Voltar').click()
    })
});