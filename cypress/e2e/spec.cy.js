const { LoginMethods } = require("./pages/login/login.methods")

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'random01';
    const constrasena = 'random01';
    cy.visit('https://demoblaze.com/index.html')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login(usuario,constrasena)
    cy.get('a#nameofuser').should('contains.text',usuario)
    cy.wait(5000)
  })
})