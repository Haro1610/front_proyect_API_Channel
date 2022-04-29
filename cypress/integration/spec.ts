describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Chat app 1.0')
    //cy.contains('sandbox app is running!')
  })
})
