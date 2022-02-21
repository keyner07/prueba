describe('E2E tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('frontpage can be opened', () => {
        cy.contains('Top Rated');
        cy.screenshot();
    })

    it('should can show details of a movie', () => {
        cy.get('.ant-card:last').within(() => {
            cy.get('a').click();
        });

        cy.screenshot()
    })
})
