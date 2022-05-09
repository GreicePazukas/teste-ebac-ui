/// <reference types="cypress" />


beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});

describe('Funcionalidade Pre cadastro', () => {
    
});

it('Deve completar o pre cadastro com sucesso', () => {
    cy.get('#reg_email').type('greicemaste880@teste.com')
    cy.get('#reg_password').type('!teste@teste')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

    cy.get('#account_first_name').type('Greice')
    cy.get('#account_last_name').type('Teste')
    cy.get('.woocommerce-Button').click()

    cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')


});