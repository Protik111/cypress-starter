
describe('Suit name', () => {
    it('Verify title positive', () => {
        cy.visit('https://google.com')
        cy.title().should('eq', 'Google')
    })

    it('Verify title negative', () => {
        cy.visit('https://google.com')
        cy.title().should('eq', 'Google Search Engine')
    })
}) 