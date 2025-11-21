Cypress.Commands.add('loginSuccess', () => {
    cy.get('[placeholder="seuemail@provedor.com"]').type('mendes99gabriel@gmail.com')
    cy.get('button[type="submit"]').click()
    cy.get('input[placeholder="••••••••"]').type('@Mel1506')
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('loginEmailFaill', () => {
    cy.get('[placeholder="seuemail@provedor.com"]').type('mendes999gabriel@gmail.com')
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('loginPasswordFaill', () => {
    cy.get('[placeholder="seuemail@provedor.com"]').type('mendes99gabriel@gmail.com')
    cy.get('button[type="submit"]').click()
    cy.get('input[placeholder="••••••••"]').type('@Mel1506t')
    cy.get('button[type="submit"]').click()
})