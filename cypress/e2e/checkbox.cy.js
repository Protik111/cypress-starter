describe("radio button", () => {

    it("radio button", () => {
        cy.visit("https://automation.ts4u.us/")

        cy.get("#__next > div > div.MuiBox-root.css-0 > div > nav > div > div > div > ul > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-c4sutr > div > div > div > div:nth-child(6) > div.MuiListItemText-root.css-1tsvksn > span").click();


        //checking
        cy.get('#__next > div > div.MuiBox-root.css-0 > div > main > div > div > div:nth-child(2) > span:nth-child(2) > input').check({ force: true }).should('be.checked');

        //unchecking
        cy.get('#__next > div > div.MuiBox-root.css-0 > div > main > div > div > div:nth-child(2) > span:nth-child(2) > input').uncheck({ force: true }).should('not.be.checked');

    })

    it.only("selecting all", () => {

        cy.visit("https://automation.ts4u.us/")

        cy.get("#__next > div > div.MuiBox-root.css-0 > div > nav > div > div > div > ul > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-c4sutr > div > div > div > div:nth-child(6) > div.MuiListItemText-root.css-1tsvksn > span").click();

        const sortableElement = [1, 2];

        
        // cy.get('#__next > div > div.MuiBox-root.css-0 > div > main > div > div > div:nth-child(3) > span:nth-child(1) > input').check({ force: true }).should('be.checked')
        
        // cy.get("#__next > div > div.MuiBox-root.css-0 > div > main > div > div > div:nth-child(3) > span:nth-child(2) > input").check({ force: true }).should('be.checked')

        //selecting all
        sortableElement.forEach(index => cy.get(`#__next > div > div.MuiBox-root.css-0 > div > main > div > div > div:nth-child(3) > span:nth-child(${index}) > input`).check({ force: true }).should('be.checked'))

        sortableElement.forEach(index => cy.get(`#__next > div > div.MuiBox-root.css-0 > div > main > div > div > div:nth-child(3) > span:nth-child(${index}) > input`).uncheck({ force: true }).should('not.be.checked'))
    })
})