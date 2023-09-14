/// <reference types="cypress" />
const  { faker }  =  require ( '@faker-js/faker' ) ;
describe('Funcionalidade Pre-cadastro', () => {


    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    it('Deve completar o Pre-cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.emai())
        cy.get('#reg_password').type('Teste_teste3000')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('Guateli')
        cy.get('#account_last_name').type('30000')
        cy.get('.woocommerce-Button').click()
        
    });
});