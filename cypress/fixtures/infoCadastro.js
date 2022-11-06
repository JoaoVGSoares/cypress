import Chance from "chance";
const chance = new Chance();

const infoCadastro = {
  firstName: chance.first(),
  lastName: chance.last(),
  email: chance.email(),
  password: `${chance.integer({ min: 1, max: 3 })}${chance.animal()}`,
  day: chance.integer({ min: 1, max: 27 }),
  month: chance.month(),
  year: chance.year({ min: 1940, max: 2004 }),
  company: chance.company(),
  address: chance.address(),
  city: chance.city(),
  state: chance.state({ full: true }),
  postalCode: chance.zip(),
  country: "United States",
  info: chance.paragraph({ sentences: 1 }),
  phone: chance.phone({ country: "us" }),
  mobile: chance.phone({ country: "us" }),
  alias: "My address",
};
module.exports = infoCadastro;
