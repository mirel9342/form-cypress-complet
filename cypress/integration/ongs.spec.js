/// <reference types="cypress" />

describe('Ongs', () => {

    it('deve preencher o cadrastro do formulario', () => {

        cy.visit('http://127.0.0.1:5500/formulario-html-css-main/formulario.html');

      cy.get('[data-cy=nome]').type('Mireli Oliveira Gonçalves');
      cy.get('[data-cy=email]').type('omireli300@gmail.com');
      cy.get('[data-cy=telefone]').type('31 983643463');
      cy.get('#feminino').click();
      cy.get('#masculino').click();
      cy.get('#outro ').click();
      cy.get('[data-cy=cidade]').type(' Sabara');
      cy.get('[data-cy=estado]').type('Minas  Gerais');
      cy.get('[data-cy=endereco]').type('Rua Santa Tereza 618 Corrego da Ilha ');

      cy.get('#submit').click();
    });

    it('', () => {

    });
})