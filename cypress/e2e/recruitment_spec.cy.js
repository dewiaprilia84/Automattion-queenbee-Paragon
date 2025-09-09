describe('User Registration and Login Tests', () => {

  // Test Scenario: Register - Valid Account (Positive)
  it('Register - Valid Account (Positive)', () => {
    cy.visit('https://recruitment-staging-queenbee.paradev.io/register');
    cy.get('input[name="name"]').scrollIntoView().should('be.visible').type('Dewi Aprilia',{ force: true });
    cy.get('input[name="phone"]').scrollIntoView().should('be.visible').type('+6281386000342',{ force: true });
    cy.get('input[name="email"]').scrollIntoView().should('be.visible').type('dewiaprilia720@gmail.com',{ force: true });
    cy.get('input[name="password"]').scrollIntoView().should('be.visible').type('Testing#12',{ force: true });
    cy.get('button[class="chakra-button styles_footer-button__nmzqr css-5makxi"]').scrollIntoView().should('be.visible').click({ force: true });
  });

  // Test Scenario: Register - Invalid password format (Negative)
  it('Register - Invalid password format (Negative)', () => {
    cy.visit('https://recruitment-staging-queenbee.paradev.io/register');
    cy.get('input[name="name"]').scrollIntoView().should('be.visible').type('Dewi Aprilia',{ force: true });
    cy.get('input[name="phone"]').scrollIntoView().should('be.visible').type('+6281386000342',{ force: true });
    cy.get('input[name="email"]').scrollIntoView().should('be.visible').type('dewiaprilia720@gmail.com',{ force: true });
    cy.get('input[name="password"]').scrollIntoView().should('be.visible').type('123',{ force: true });
    cy.get('button[class="chakra-button styles_footer-button__nmzqr css-5makxi"]').scrollIntoView().should('be.visible').click({ force: true });
  });

  // Test Scenario: Register - Invalid email (Negative)
  it('Register - Invalid email (Negative)', () => {
    cy.visit('https://recruitment-staging-queenbee.paradev.io/register');
    cy.get('input[name="name"]').scrollIntoView().should('be.visible').type('Dewi Aprilia',{ force: true });
    cy.get('input[name="phone"]').scrollIntoView().should('be.visible').type('+6281386000342',{ force: true });
    cy.get('input[name="email"]').scrollIntoView().should('be.visible').type('invalidemail.com',{ force: true });
    cy.get('input[name="password"]').scrollIntoView().should('be.visible').type('Testing#12',{ force: true });
    cy.get('button[class="chakra-button styles_footer-button__nmzqr css-5makxi"]').scrollIntoView().should('be.visible').click({ force: true });
  });

  // Test Scenario: Register - Retype email without reloading the page
  it('Register - Retype email without reloading the page', () => {
    cy.visit('https://recruitment-staging-queenbee.paradev.io/register');
    cy.get('input[name="name"]').scrollIntoView().should('be.visible').type('Dewi Aprilia',{ force: true });
    cy.get('input[name="phone"]').scrollIntoView().should('be.visible').type('+6281386000342',{ force: true });
    cy.get('input[name="email"]').scrollIntoView().should('be.visible').type('dewiaprilia720@gmail.com',{ force: true });
    cy.get('input[name="password"]').scrollIntoView().should('be.visible').type('Testing#12',{ force: true });
    cy.get('input[name="email"]').scrollIntoView().should('be.visible').clear({ force: true }).type('newemail@example.com',{ force: true });
    cy.get('button[class="chakra-button styles_footer-button__nmzqr css-5makxi"]').scrollIntoView().should('be.visible').click({ force: true });
  });

  // Test Scenario: Register - Invalid No. HP (Negative)
  it('Register - Invalid No. HP (Negative)', () => {
    cy.visit('https://recruitment-staging-queenbee.paradev.io/register');
    cy.get('input[name="name"]').scrollIntoView().should('be.visible').type('Dewi Aprilia',{ force: true });
    cy.get('input[name="phone"]').scrollIntoView().should('be.visible').type('invalidphone',{ force: true });
    cy.get('input[name="email"]').scrollIntoView().should('be.visible').type('dewiaprilia720@gmail.com',{ force: true });
    cy.get('input[name="password"]').scrollIntoView().should('be.visible').type('Testing#12',{ force: true });
    cy.get('button[class="chakra-button styles_footer-button__nmzqr css-5makxi"]').scrollIntoView().should('be.visible').click({ force: true });
  });

  // Test Scenario: Login - Valid Credentials (Positive)
  it('Login - Valid Credentials (Positive)', () => {
    cy.visit('https://recruitment-staging-queenbee.paradev.io/login');
    cy.get('input[name="phone"]').type('dewiaprilia720@gmail.com',{ force: true });
    cy.get('input[name="password"]').type('Testing#12',{ force: true });
    cy.get('button[class="chakra-button styles_footer-button__Gx5Df css-5makxi"]').scrollIntoView().should('be.visible').click({ force: true });
  });

  // Test Scenario: Login - Valid Credentials (Negative)
  it('Login - Invalid Credentials (Negative)', () => {
    cy.visit('https://recruitment-staging-queenbee.paradev.io/login');
    cy.get('input[name="phone"]').type('12345678',{ force: true });
    cy.get('input[name="password"]').type('1',{ force: true });
    cy.get('button[class="chakra-button styles_footer-button__Gx5Df css-5makxi"]').scrollIntoView().should('be.visible').click({ force: true });
  });

  // Test Scenario: Forgot Password - Email not found (Negative)
  it('Forgot Password - Email not found (Negative)', () => {
    cy.visit('https://recruitment-staging-queenbee.paradev.io/forgot-password');
    cy.get('input[name="email"]').type('nonexistentemail@example.com',{ force: true });
    cy.get('button[class="chakra-button styles_footer-button__JbWG3 css-5makxi"').scrollIntoView().should('be.visible').click({ force: true });
  });

});
