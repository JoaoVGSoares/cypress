import loginPage from "../pages/loginPage.js";
import homePage from "../pages/homePage.js";

describe("Testes de login", () => {
  it("Realiza login através do  endpoint", () => {
    cy.loginViaEndpoint("joao.v.g.soares@gmail.com", "#12345");
    cy.visit("/");
    cy.get(".account").should("be.visible");
  });
  it("Acessar a página de login", () => {
    cy.visit("/");
    homePage.clicarSignIn();
    cy.url().should("eq", loginPage.url);
    cy.get(".navigation_page").should("contain.text", "Authentication");
  });

  context(
    "Testes na página de login",
    {
      baseUrl: loginPage.url,
    },
    () => {
      beforeEach(() => {
        cy.visit("/");
      });

      it("Realizar login", () => {
        loginPage.login("joao.v.g.soares@gmail.com", "#12345");
        cy.url().should("include", "controller=my-account");
        cy.get(".page-heading").should("have.text", "My account");
      });

      //Exact error message text
      it("Clicar em SignIn sem informar senha", () => {
        loginPage.login("joao.v.g.soares@gmail.com");
        cy.get(loginPage.loginErrorMessage)
          .children()
          .last()
          .then(($el) => {
            expect($el.text().trim()).to.equal("Password is required.");
          });
      });

      //Partial error message text
      it("Clicar em SignIn sem informar email", () => {
        loginPage.login(null, "12345");
        cy.get(loginPage.loginErrorMessage)
          .children()
          .last()
          .should("contain.text", "An email address required.");
      });

      it("Clicar em criar conta sem informar email", () => {
        loginPage.criarConta();
        cy.get(loginPage.createErrorMessage)
          .should("be.visible")
          .and("have.text", "Invalid email address.");
      });
    }
  );
});
