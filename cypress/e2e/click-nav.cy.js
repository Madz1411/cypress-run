describe('ABUS Website Test', () => {
  it('Checks the presence of the "Cookies" link and the "email" input', () => {
    cy.viewport(360, 500) // Set viewport
    // Visit the website
    cy.visit('https://mobil.abus.com')
	cy.wait(2000); // 2000 milliseconds = 2 seconds
	cy.contains('Ohne Cookies fortfahren').click()
	

    // Find and click the burger menu
    cy.get('button.top-bar__menu-toggle')
      .should('be.visible')
      .click()

    // Find and click the "Über ABUS" link
    cy.contains('Über ABUS').click()

    // Wait for the page to load
    cy.url().should('include', '/Ueber-ABUS')

    // Find the "email" input and assert its presence
    cy.get('input[type="email"][name="email"].form-input__input')
      .should('be.visible')
      .and('have.attr', 'id', 'input-28636309')
  })
})
