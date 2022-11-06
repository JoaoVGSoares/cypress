class HomePage {
  signIn = ".login";

  url = "http://automationpractice.com/index.php";
  productList = ".product-container";
  btnMore = ".lnk_view";

  acessar() {
    cy.visit(this.url);
  }

  acessarProdutoPosicao(num) {
    return cy.get(this.productList).eq(num).find(this.btnMore).click();
  }

  clicarSignIn() {
    cy.get(this.signIn).click();
  }
}
module.exports = new HomePage();
