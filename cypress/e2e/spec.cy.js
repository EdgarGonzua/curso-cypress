describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.wait(10000)
  })
})