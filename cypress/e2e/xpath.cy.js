//cy.get("locator")
//cy.xpath("xpath")

describe('xpath', () => {
    it('find category', () => {
        cy.visit('https://staging-ecom.techserve4u.com/')

        //assertions
        cy.xpath("//div[@class='pages_list']/li").should("have.length", 5);
    })
}) 