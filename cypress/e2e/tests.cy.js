describe('template spec', () => {
  it('login com um usuario valido', () => {
    cy.visit('/')
    cy.get('[placeholder="seuemail@provedor.com"]').type('mendes99gabriel@gmail.com')
    cy.get('button[type="submit"]').click()
    cy.get('input[placeholder="••••••••"]').type('@Mel1506')
    cy.get('button[type="submit"]').click()

    cy.contains('Olá,Gabriel!').should('be.visible')
  })

  it('login com email invalido', () => {
    cy.visit('/')
    cy.get('[placeholder="seuemail@provedor.com"]').type('mendes999gabriel@gmail.com')
    cy.get('button[type="submit"]').click()

    cy.contains('p', 'Email não cadastrado').should('be.visible')
  })

  it.only('login com senha invalida', () => {
    cy.visit('/')
    cy.get('[placeholder="seuemail@provedor.com"]').type('mendes99gabriel@gmail.com')
    cy.get('button[type="submit"]').click()
    cy.get('input[placeholder="••••••••"]').type('@Mel1506t')
    cy.get('button[type="submit"]').click()

    cy.contains('p', 'senha incorreta.').should('be.visible')
  })
})