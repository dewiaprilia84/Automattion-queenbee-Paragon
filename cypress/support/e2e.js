// Prevent test failure on uncaught exception from application code
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
