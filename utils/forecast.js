const request = require("request");
const { weatherKey } = require("../secretkeys");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${weatherKey}&query=${latitude},${longitude}`;
  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("faild to connect ", undefined);
    } else if (body.error) {
      callback("unable to find location", undefined);
    } else {
      const data = body.current;
      callback(
        undefined,
        `${data.weather_descriptions[0]} . it is ${data.temperature} degree out there and it feels like ${data.feelslike}`
      );
    }
  });
};

module.exports = forecast;
