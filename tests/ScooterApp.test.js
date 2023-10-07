const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp();
// ScooterApp tests here

// register user
describe("registerUser method tests", () => {
  test("Should return instance of User", () => {
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });
});

// log in
test("Should return instance of user", () => {
  let response = scooterApp.loginUser("Joe Bloggs", "test123", 21);
  expect(response).toBeInstanceOf(User);
});

// log out
test("Should return instance of user", () => {
  let response = scooterApp.logoutUser("Joe Bloggs", "test123", 21);
  expect(response).toBeInstanceOf(User);
});



// rent scooter
test("Should return instance of scooter", () => {
  let response = scooterApp.rentScooter("Joe Bloggs", "test123", 21);
  expect(response).toBeInstanceOf(Scooter);
});
// dock scooter
test("Should return instance of scooter", () => {
  let response = scooterApp.dockScooter("Joe Bloggs", "test123", 21);
  expect(response).toBeInstanceOf(Scooter);
});
