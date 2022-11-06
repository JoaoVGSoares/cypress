/// <reference types="cypress"/>

class ProductPage {
  price = "#our_price_display";
  btnAddToCart = ".exclusive";
  quantity = "#quantity_wanted";
  colors = "#color_to_pick_list";
  btnMinusQtd = ".button-minus";
  btnMoreQtd = ".button-plus";
  selectSize = "#group_1";
  boxInfo = ".box-info-product";
  btnCheckout = ".button-medium";
  modalCart = ".layer_cart_product";
  iconOk = ".icon-ok";

  aumentarQtd(num) {
    return num <= 0
      ? null
      : cy.get(this.btnMoreQtd).click() && this.aumentarQtd(num - 1);
  }

  diminuirQtd(num) {
    return num <= 0
      ? null
      : cy.get(this.btnMinusQtd).click() && this.diminuirQtd(num - 1);
  }

  clicarComprar() {
    cy.get(this.boxInfo).find(this.btnAddToCart).click();
  }
}
module.exports = new ProductPage();
