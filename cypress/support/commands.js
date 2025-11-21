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

function gerarPublicacaoUnica(categoria) {
  const timestamp = new Date().getTime();
  return `Publicação de Teste Única ${categoria} - ${timestamp}`;
}

Cypress.Commands.add('publication', (categoria) => {
    
    const textoPublicacao = gerarPublicacaoUnica();

    cy.contains('Comunidade').click()
    cy.contains('button', 'Fazer publicação').click()
    cy.get('button[role="combobox"][type="button"]').click()
    cy.contains('p', categoria).click()
    cy.get('[data-placeholder="Escreva aqui sua publicação..."]').type(textoPublicacao)
    
   
    return cy.contains('button', 'Publicar').click().then(() => {
        
        return textoPublicacao; 
    })
})