describe('Teste técnico Vicio Editando Perfil', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.loginSuccess()
  })
  it('Editando nome e descrição do perfil', () => {
    const longText = Cypress._.repeat('teste sistema', 10)

    cy.contains('span', 'Gabriel').click()
    cy.contains('p', 'Perfil').click()
    cy.get('path[stroke="#E5E5E5"]').click()
    cy.get('input.bg-white').clear().type('Gabriel Silva')
    cy.get('textarea.block').type(longText, {delay:0})
    cy.contains('button', 'Salvar Informações').click()
  })
})