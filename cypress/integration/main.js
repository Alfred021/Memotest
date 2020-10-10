/// <reference types="Cypress" />

describe('Visit MemoryGame', function(){
    it('visits the MemoryGame, find the element Start and clicks on it and opens the gaming table', function(){
        cy.visit('/')
        cy.contains('Start').click()
        cy.get('#cards')
    })
})
  