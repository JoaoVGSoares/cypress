/// <reference types="cypress"/>

import homePage from "../pages/homePage";
import productPage from "../pages/productPage";

describe("Testes na página do produto", () => {
  it("Acessa a página do produto", () => {
    cy.visit("/");
    homePage.acessarProdutoPosicao(0);
    cy.get(productPage.price).should("be.visible");
    productPage.aumentarQtd(3);
    productPage.diminuirQtd(2);
    productPage.clicarComprar();
    cy.get(productPage.iconOk)
      .parent()
      .should(
        "contain.text",
        "Product successfully added to your shopping cart"
      );
    cy.get(productPage.btnCheckout).should("be.visible");
  });
});
