import {nome, ultimoNome,email, endereco, idade, universidade, genero, profissao} from '../support/users/index'

describe('New Cypress 10.00', () => {
    before(() => {
        cy.homeAutomation()
    })

    it('Cadastro de Usuarios', () => {
        cy.contains('a', 'Formulário').click()
        cy.contains('a', 'Criar Usuários')
        .should('is.visible').click()
        cy.get('input[id=user_name]').type(nome)
        cy.get('input[id=user_lastname]').type(ultimoNome)
        cy.get('input[id=user_email]').type(email)
        cy.get('input[id=user_address]').type(endereco)
        cy.get('input[id=user_university]').type(universidade)
        cy.get('input[id=user_profile]').type(profissao)
        cy.get('input[id=user_gender]').type(genero)
        cy.get('input[id=user_age]').type(idade)
        cy.get('input[value=Criar]').click()
    })
});