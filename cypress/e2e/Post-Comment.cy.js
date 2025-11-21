describe('Teste técnico Vicio publicando comentário', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.loginSuccess()
  })

  it('Fazer uma publicação na categoria Dicas', () => {
    cy.publication('Dicas').then((textoPublicacaoGerado) => {

      cy.contains('span', textoPublicacaoGerado)
        .should('be.visible')
        .and('include.text', textoPublicacaoGerado)
    })
  })

  it('Fazer uma publicação na categoria Sugestão', () => {
    cy.publication('Sugestão').then((textoPublicacaoGerado) => {

      cy.contains('span', textoPublicacaoGerado)
        .should('be.visible')
        .and('include.text', textoPublicacaoGerado)
    })
  })

  it('Fazer uma publicação na categoria Edital', () => {
    cy.publication('Edital').then((textoPublicacaoGerado) => {

      cy.contains('span', textoPublicacaoGerado)
        .should('be.visible')
        .and('include.text', textoPublicacaoGerado)
    })
  })
})