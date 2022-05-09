/// <reference types="cypress" />

const { should } = require("chai")

context('Funcionalidade Login', () =>{

it('Deve fazer login com sucesso' , () =>{
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
cy.get('#username').type('aluno_ebac@teste.com')
cy.get('#password').type('teste@teste.com')
cy.get('.woocommerce-form > .button').click()
cy.get('.page-title').should('contain','Minha conta')
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, aluno')
    })

it('Deve exibir uma mensagem de erro ao usuario ou senha invalido',() =>{
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
cy.get('#username').type('aluno_ebac1982@teste.com')
cy.get('#password').type('teste@teste.com')
cy.get('.woocommerce-form > .button').click()

cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido')

    })
it('Deve exibir uma mensagem de erro a senha invalido',() =>{
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
cy.get('#username').type('aluno_ebac@teste.com')
cy.get('#password').type('teste1982@teste.com')
cy.get('.woocommerce-form > .button').click()

cy.get('.woocommerce-error > li').should('contain','Erro: A senha fornecida')

           })
})

