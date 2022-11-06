/// <reference types="cypress"/>

class LoginPage {
  inputEmail = "#email";
  inputPassword = "#passwd";
  inputEmailCreate = "#email_create";
  btnLogin = "#SubmitLogin";
  btnCreateAccount = "#SubmitCreate";
  url =
    "http://automationpractice.com/index.php?controller=authentication&back=my-account";
  loginErrorMessage = ".alert";
  createErrorMessage = "#create_account_error";

  login(user, password) {
    this.preencherEmail(user);
    this.preencherSenha(password);
    this.clicarLogin();
  }

  preencherEmail(user) {
    return user == null ? null : cy.get(this.inputEmail).type(user);
  }
  preencherSenha(password) {
    return password == null ? null : cy.get(this.inputPassword).type(password);
  }
  clicarLogin() {
    cy.get(this.btnLogin).click();
  }

  criarConta(user) {
    this.preencherEmailCreateAccount(user);
    this.clicarCreateAccount();
  }

  preencherEmailCreateAccount(user) {
    return user == null ? null : cy.get(this.inputEmailCreate).type(user);
  }
  clicarCreateAccount() {
    cy.get(this.btnCreateAccount).click();
  }
}

module.exports = new LoginPage();
