var miles =  require('../lib/miles')

describe("Miles", function(){
  it("has enought gas to continue", function(){
    var car = {
      milesPerGallon: 20,
      gallonsInTank: 3
    };

    var route = {
      miles: 200,
      destination: "Boulder",
      location: "Fancy Land"
    };
    expect(miles.hasEnoughGas(car, route)).toEqual(false)
    car.gallonsInTank += 10;
    expect(miles.hasEnoughGas(car, route)).toEqual(true)

  });
});
