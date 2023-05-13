describe("radio button", () => {

    it("Implicit (Built-in)", () => {
        cy.visit("https://automation.ts4u.us/")

        cy.get("#__next > div > div.MuiBox-root.css-0 > div > nav > div > div > div > ul > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-c4sutr > div > div > div > div:nth-child(8) > div.MuiListItemText-root.css-1tsvksn > span").click();

        cy.get("#__next > div > div.MuiBox-root.css-0 > div > main > div > div > div.MuiBox-root.css-110ry07 > div.MuiFormControl-root.css-13sljp9 > div > label:nth-child(1)").should('be.visible');

        cy.get(':nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').check({ force: true }).should('be.checked');

        cy.get(':nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').should("not.be.checked")

        cy.get(':nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').check({ force: true }).should('be.checked');

        cy.get(':nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').should("not.be.checked")
    })
})