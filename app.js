const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (address) {
  geocode(address, (error, { latitude, longitude, name } = {}) => {
    if (error) return console.log(error);

    forecast(latitude, longitude, (error, forcastData) => {
      if (error) return console.log(error);
      console.log(name);
      console.log(forcastData);
    });
  });
} else {
  console.log("Please enter an address as an argument string");
}
