const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=5424d4f9466022cf0e67f6b9648dff38&query=${latitude},${longitude}`;
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
