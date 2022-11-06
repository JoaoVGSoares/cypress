/// <reference types="cypress"/>

import infoCadastro from "../fixtures/infoCadastro";
import loginPage from "../pages/loginPage";
import createAccountPage from "../pages/createAccountPage";
import myAccountPage from "../pages/myAccountPage";

describe("Testes de criação de conta", { baseUrl: loginPage.url }, () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Acessa a página de criação de conta", { baseUrl: loginPage.url }, () => {
    loginPage.criarConta(infoCadastro.email);
    cy.get(".page-heading").should("have.text", "Create an account");
  });

  it("Preenche corretamente as informações", () => {
    loginPage.criarConta(infoCadastro.email);
    createAccountPage.preencherCadastro(infoCadastro);
    cy.get(myAccountPage.pageTitle).should("have.text", "My account");
  });
});
