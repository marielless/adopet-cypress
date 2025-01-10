describe('Página de cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Marielle Santos');
    cy.get('[data-test="input-email"]').type('mari.santos@teste.com');
    cy.get('[data-test="input-password"]').type('senhaSegura123');
    cy.get('[data-test="input-confirm-password"]').type('senhaSegura123');
    cy.get('[data-test="submit-button"]').click();
  })
})