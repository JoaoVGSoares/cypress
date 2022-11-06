/// <reference types="cypress"/>

class CreateAccount {
  inputFirstName = "#customer_firstname";
  inputLastName = "#customer_lastname";
  inputEmail = "#email";
  inputPassword = "#passwd";
  selectDays = "#days";
  selectMonths = "#months";
  selectYears = "#years";
  inputAddressFirstName = "#firstname";
  inputAddressLastName = "#lastname";
  inputCompany = "#company";
  inputAddress1 = "#address1";
  inputAddress2 = "#address2";
  inputCity = "#city";
  selectState = "#id_state";
  inputPostalCode = "#postcode";
  selectCountry = "#id_country";
  inputAdditionalInfo = "#other";
  inputHomePhone = "#phone";
  inputMobilePhone = "#phone_mobile";
  inputAddressAlias = "#alias";
  btnRegister = "#submitAccount";

  preencherCadastro(account) {
    this.preencherPrimeiroNome(account.firstName);
    this.preencherSobrenome(account.lastName);
    this.preencherEmail(account.email);
    this.preencherSenha(account.password);
    this.preencherDia(account.day);
    this.preencherMes(account.month);
    this.preencherAno(account.year);
    this.preencherEmpresa(account.company);
    this.preencherEndereco(account.address);
    this.preencherCidade(account.city);
    this.preencherEstado(account.state);
    this.preencherCodigoPostal(account.postalCode);
    this.preencherPais(account.country);
    this.preencherInfoAdicional(account.info);
    this.preencherTelefoneResidencial(account.homePhone);
    this.preencherCelular(account.mobile);
    this.preencherAlias(account.alias);
    this.clicarRegistrar();
  }

  preencherPrimeiroNome(firstName) {
    return firstName == null
      ? null
      : cy.get(this.inputFirstName).type(firstName);
  }
  preencherSobrenome(lastName) {
    return lastName == null ? null : cy.get(this.inputLastName).type(lastName);
  }

  preencherEmail(email) {
    return email == null ? null : cy.get(this.inputEmail).clear().type(email);
  }

  preencherSenha(password) {
    return password == null ? null : cy.get(this.inputPassword).type(password);
  }
  preencherDia(day) {
    return day == null ? null : cy.get(this.selectDays).select(day);
  }
  preencherMes(month) {
    return month == null ? null : cy.get(this.selectMonths).select(month);
  }
  preencherAno(year) {
    return year == null ? null : cy.get(this.selectYears).select(year);
  }

  preencherEndPrimeiroNome(firstName) {
    return firstName == null
      ? null
      : cy.get(this.inputAddressFirstName).type(firstName);
  }

  preencherEndSobrenome(lastName) {
    return lastName == null
      ? null
      : cy.get(this.inputAddressLastName).type(lastName);
  }

  preencherEmpresa(company) {
    return company == null ? null : cy.get(this.inputCompany).type(company);
  }

  preencherEndereco(address) {
    return address == null ? null : cy.get(this.inputAddress1).type(address);
  }
  preencherEnderecoDois(address) {
    return address == null ? null : cy.get(this.inputAddress2).type(address);
  }

  preencherCidade(city) {
    return city == null ? null : cy.get(this.inputCity).type(city);
  }
  preencherEstado(state) {
    return state == null ? null : cy.get(this.selectState).select(state);
  }

  preencherCodigoPostal(postalCode) {
    return postalCode == null
      ? null
      : cy.get(this.inputPostalCode).type(postalCode);
  }

  preencherPais(country) {
    return country == null ? null : cy.get(this.selectCountry).select(country);
  }

  preencherInfoAdicional(info) {
    return info == null ? null : cy.get(this.inputAdditionalInfo).type(info);
  }

  preencherTelefoneResidencial(homePhone) {
    return homePhone == null
      ? null
      : cy.get(this.inputHomePhone).type(homePhone);
  }
  preencherCelular(mobile) {
    return mobile == null ? null : cy.get(this.inputMobilePhone).type(mobile);
  }

  preencherAlias(alias) {
    return alias == null ? null : cy.get(this.inputAddressAlias).type(alias);
  }

  clicarRegistrar() {
    cy.get(this.btnRegister).click();
  }
}
module.exports = new CreateAccount();
