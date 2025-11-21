describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('login com um usuario valido', () => {
    cy.loginSuccess()

    cy.contains('Olá,Gabriel!').should('be.visible')
  })

  it('login com email invalido', () => {
    cy.loginEmailFaill()

    cy.contains('p', 'Email não cadastrado').should('be.visible')
  })

  it('login com senha invalida', () => {
    cy.loginPasswordFaill()

    cy.contains('p', 'senha incorreta.').should('be.visible')
  })
})