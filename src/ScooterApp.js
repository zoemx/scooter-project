const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(stations,registeredUsers){
    this.station = station;
    this.registerUser = registeredUsers;

    stations={
      west:[],
      south:[],
      east:[]
    }

    registeredUsers={
      userNames:[]
    }

  }


  registerUser(username,password, age){
    if (this.registeredUser[userNames] != username && age >= 18){
      this.registerUser[userNames] == username;
      console.log("user has been registered")
      return this.registerUser[username];
    }else if(this.registerUser[username == username]){
      throw new Error("already registered");
    }else{
      throw new Error("too young to register");
    }
  }

  loginUser(username, password){
    if (this.registerUser[userNames] == username){
      User.login(password)
      console.log("user has been logged in")
    }else{
      throw new Error("Username or password is incorrect")
    }
  }

  logoutUser(username){
    if (this.registerUser[userNames] == username){
      User.logout()
      console.log("user is logged out")
    }else{
      throw new Error("no such user is logged in")
    }

  }

  createScooter(station){
    if (this.station == true){
      this.Scooter(station)
    }else{
      throw new Error("no such station")
    }
  }
  
  dockScooter(scooter,station){
    if (stations == station ){
      //add codition that sccoter is not already at station
      Scooter.dock(station);
      console.log("scooter is docked")
    }else if (stations != station){
      throw new Error("no such station")
    }else{
      throw new Error("scooter already at station")
    }
  }

  rentScooter(scooter,user){
    //use a loop
    //const key = Object.values(obj)

    if (scooter == true){
      Scooter.rentScooter(user);
      console.log("scooter is rented")
    }else{
      throw new Error ("scooter is already rented")
    }

  }

  print(){
    console.log(this.registeredUsers)
    concole.log(this.stations+" "+this.stations.length)
  }
}

module.exports = ScooterApp
