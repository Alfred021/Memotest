/// <reference types="Cypress" />

describe('preparing the MemoryGame', () => {
    it('find the element Start and clicks on it and opens the gaming table', () => {
        cy.visit('/')
        cy.get('#start').contains('Start').click()
        .then(() => {
            const $cards = 16
            cy.get('#cards')
            .find('.card.color-hidden').should('have.length', $cards)
            cy.get('#status').should('have.text', "Let's Play!")
        })
    })

    it('shuffling the deck', () => {
        cy.get('.card.color-hidden').then((cards) => {
            let currentCards = [];
            cards.each((index,card) => {
                currentCards.push(card.className);
            });

            let newCards = [];
            cy.visit('/')
            cy.get('#start').contains('Start').click()
            .then(()=> {
                cy.get('.card.color-hidden').then((cards) =>{
                    cards.each((index, card) => {
                        newCards.push(card.className);
                    })
                })
            })
            expect(currentCards).not.to.equal(newCards);
        })
    })
})
  
describe('playing cards', () => {
    let cardMap, pairList;

    it('resolve the game', () => {
        cy.get('.card').then(card => {
            cardMap = getCardPairs(card);
            pairList = Object.values(cardMap);
            console.log(pairList);
        pairList.forEach((pair) => {
            cy.get(pair[0]).click()
            cy.get(pair[1]).click()
        }); 
        });

        cy.get('#player-moves').should('contain.text', '8')
        cy.get('#status').should('have.text', 'You Win! Your Rank: S. Reload the page to restart the game.')
    })
})

function getCardPairs(cards) {
    const pairs = {}

    cards.each((index, card) => {
        const classColor = card.className.replace('','card color-hidden ', '')

    if (pairs[classColor]) {
        pairs[classColor].push(card);
    } else {
        pairs[classColor] = [card];
    }
    })
    return pairs;
}
