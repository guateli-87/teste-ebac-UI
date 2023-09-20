/// <reference types="cypress" />

describe('Funcinalidade pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um item da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(0)
            .contains('Abominable Hoodie')
            .click()

    });

    it.only('Deve comprar um item no carrinho', () => {
        var quantidade = 3
        cy.get('[class="product-block grid"]')
           .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
});


});