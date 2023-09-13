/// <reference types="cypress" />

context ('Funcionalidade login', () =>{

    it('Deve fazer login com sucesso' , () =>{
         cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
         cy.get('#username').type('aluno_ebac@teste.com')
         cy.get('#password').type('teste@teste.com')
         cy.get('.woocommerce-form > .button').click()
         cy.get('#primary-menu > .menu-item-992 > a').should('contain' , 'Categorias')
         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, aluno_ebac20 (não é aluno_ebac20? Sair)')

    })

    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', ()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste./com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-error').should('contain', 'Erro: o usuário aluno_ebac@teste./com não está cadastrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.' )     
    })
    
    it.('Deve exibir uma mensagem de erro ao inserir senha invalida', ()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste./com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta') 
    })      
    
    })  