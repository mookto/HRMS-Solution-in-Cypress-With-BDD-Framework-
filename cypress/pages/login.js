// cypress/pages/login.js
class LoginPage {
  userInput = 'input[name="email"]'; 
  passInput = 'input[name="password"]';
  loginBtn = 'button[type="submit"]';

  visit() {
    cy.visit(Cypress.config("baseUrl"));
  }

  login(user, pass) {
    cy.get(this.userInput).clear().type(user);
    cy.get(this.passInput).clear().type(pass);
    cy.get(this.loginBtn).click();
  }
}
export default new LoginPage();