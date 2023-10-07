const User = require('../src/User');

const user = new User("Joe Bloggs", "test123", 21);

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    expect(typeof user.username).toBe("string");
  })
  // test password
  test("password test", () => {
  
      expect(user.password).toEqual("test123");
    });


  // test age
  test("age test", () => {
      expect(user.age).toEqual(21);
    });
})


// test login
test("login",() => 
  {
    user.login("test123")
    expect(loggedIn).toBe(true);
  });
  


// test logout
test("logout",() => 
  {user.logout()
 
    expect(loggedIn).toBe(false);
  });
  
