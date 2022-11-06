Cypress.Commands.add("loginViaEndpoint", (email, password) => {
  cy.request({
    method: "POST",
    url: "http://automationpractice.com/index.php?controller=authentication",
    form: true,
    body: {
      email: email,
      passwd: password,
      back: "my-account",
      SubmitLogin: "",
    },
  });
});
