class Scooter{
  // scooter code here
  constructor (station,user = null, serial = 0, nextSerial = serial+1, charge = 100, isBroken = false){
    //user,serial, nextSerial, charge, isBroken
    this.station = station;
    this.user = user;
    this.serial = serial;
    this.nextSerial = next.serial;
    this.charge = charge;
    this.isBroken = isBroken;

  }
  rent(user){
    if (this.charge > 20 && isBroken == false){
      return this.user
    }else{
      throw new Error ("Scooter needs to be charged or repaired");
    }
  }

  dock(station){
    this.user = null;
    return this.station
  }

 

}


module.exports = Scooter

