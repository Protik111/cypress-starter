describe("Assertions", () => {

    it("Implicit (Built-in)", () => {
        cy.visit("https://staging-ecom.techserve4u.com/")

        //should, and are implicits (two built-in)

        cy.url().should('include', 'techserve4u.com')
        cy.url().should('eq', 'https://staging-ecom.techserve4u.com/')
        cy.url().should('contain', 'staging-ecom')

        //chaining
        cy.url().should('include', 'techserve4u.com')
        .should('eq', 'https://staging-ecom.techserve4u.com/')
        .should('contain', 'staging-ecom')

        //with and 
        cy.url().should('include', 'techserve4u.com')
        .and('eq', 'https://staging-ecom.techserve4u.com/')
        .and('contain', 'staging-ecom')

        //negative assertions
        cy.url().should('include', 'techserve4u.com')
        .and('eq', 'https://staging-ecom.techserve4u.com/')
        .and('contain', 'staging-ecom')
        .and('not.contain', 'stagig-eco')

        //title check
        cy.title().should('include', 'Ecommerce')
        .and('eq', 'Ecommerce Website')
        .and('contain', 'Ec')

        //logo visible
        cy.get('.logo > a > img').should('be.visible')
        cy.get('.logo > a > img').should('exist')

        // no of links
        cy.xpath("//a").should("have.length", 149)
    })

    it("Explicit", () => {
        cy.visit("https://staging-ecom.techserve4u.com/")

        // expect - BDD
        // assert - TDD

        cy.get('.header_info > :nth-child(2) > .far').click();

        cy.get('#normal_login_email').type("rafiurprotik111@gmail.com")

        cy.get('#normal_login_password').type("test123")

        cy.get(':nth-child(3) > .primary_btn').click()

        cy.get('.header_info > :nth-child(3) > .far').click()

        let expectedName = "Protik"

        //function to explicit assertions
        cy.get('.name_mobile > p').then((name) => {
            let actualResult = name.text();

            //BDD asserts
            expect(actualResult).to.equal(expectedName)
            // expect(actualResult).to.not.equal(expectedName)

            //TDD style
            assert.equal(actualResult, expectedName)
            // assert.notEqual(actualResult, expectedName)

        })
        
    })
})